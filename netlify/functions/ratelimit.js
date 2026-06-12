// netlify/functions/ratelimit.js
// Stores and checks per-user rate-limit blocks in Netlify Blobs.
// Netlify auto-verifies the JWT from the Authorization header and
// populates context.clientContext.user — no manual signature check needed.

const { getStore } = require('@netlify/blobs');

const HEADERS = {
  'content-type': 'application/json',
  'access-control-allow-origin': '*',
};

exports.handler = async (event, context) => {
  // OPTIONS pre-flight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: HEADERS };
  }

  // Netlify Identity JWT verification (automatic via clientContext)
  const user = context.clientContext && context.clientContext.user;
  if (!user || !user.sub) {
    return { statusCode: 401, headers: HEADERS, body: JSON.stringify({ error: 'Unauthorized' }) };
  }

  const userId = user.sub;
  const store = getStore({ name: 'rl', consistency: 'strong' });

  // ── GET: check block status ──────────────────────────────────────────────
  if (event.httpMethod === 'GET') {
    let data = null;
    try { data = await store.get(userId, { type: 'json' }); } catch (e) {}

    if (!data || !data.blocked || Date.now() >= data.until) {
      // Clean up expired entries
      if (data) { try { await store.delete(userId); } catch (e) {} }
      return { statusCode: 200, headers: HEADERS, body: JSON.stringify({ blocked: false }) };
    }

    return {
      statusCode: 200,
      headers: HEADERS,
      body: JSON.stringify({ blocked: true, until: data.until }),
    };
  }

  // ── POST: record a block ─────────────────────────────────────────────────
  if (event.httpMethod === 'POST') {
    let body = {};
    try { body = JSON.parse(event.body || '{}'); } catch (e) {}

    if (body.action === 'block' && typeof body.until === 'number' && body.until > Date.now()) {
      try {
        await store.set(
          userId,
          JSON.stringify({ blocked: true, until: body.until, blockedAt: Date.now() }),
        );
      } catch (e) {
        return { statusCode: 500, headers: HEADERS, body: JSON.stringify({ error: 'Storage error' }) };
      }
      return { statusCode: 200, headers: HEADERS, body: JSON.stringify({ ok: true }) };
    }

    return { statusCode: 400, headers: HEADERS, body: JSON.stringify({ error: 'Bad request' }) };
  }

  return { statusCode: 405, headers: HEADERS, body: 'Method not allowed' };
};
