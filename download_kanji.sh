#!/bin/bash
# Downloads KanjiVG stroke-order SVG files for all kanji in くまキィ
# Run from the kumakey_site folder: bash download_kanji.sh

BASE="https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji"
OUT="kanji"
mkdir -p "$OUT"

CODES=(
04e00 04e5d 06708 04e8c 05341 04e09 0767e 056db 0516d 0516b
04e94 05343 05186 04e07 04e03 053e3 05165 051fa 076ee 065e5
0672c 066dc 04eca 05c71 04eba 0706b 05927 06c34 06728 05bfa
06642 091d1 0534a 0571f 05206 05200 04e0a 05f8c 04e0b 05348
0524d 04e2d 09580 056fd 09593 05e74 05916 06771 04eac 053f3
0897f 05074 05de6 05357 05de5 04e8b 05317 0540d 07530 04f55
0529b 05354 07537 05b50 07236 06027 06bcd 05973 04f9b 05b66
0751f 053bb 06bce 06821 05148 0738b 08a95 07c4d 0898b 08033
0805e 0884c 065b0 09280 08a00 065c5 08a71 07c53 06b27 096fb
06765 05408 07acb 05f85 09031 0826f 05468 098df 07269 098f2
05e97 0672b 04f1a 0793e 0591a 05c11 0597d 05207 05c0f 05e83
065e9 09ad8 09577 05b89 0660e 05168 08aac 053e4 053cb 05143
06c17 089aa 05929 06301 099ac 099c5 054e1 05e2d 05e02 05f79
06240 0753a 058f2 06751 075c5 096e8 09662 08eca 09000 07f8e
05bb9 06c60 06e90 081ea 08ee2 099d0 05834 04f11 05e30 05b9a
05f13 08d70 0866b 08d77 05f37 052c9 08c9d 08cb7 06709 06c0f
08aad 05b57 066f8 08a5e 08a9e 056f3 09928 08f9e 082f1 06559
079d1 0500b 0676f 0679a 0518a
)

TOTAL=${#CODES[@]}
echo "Downloading $TOTAL kanji SVGs to $OUT/ ..."
DONE=0
FAIL=0
for code in "${CODES[@]}"; do
  dest="$OUT/${code}.svg"
  if [ -f "$dest" ] && [ -s "$dest" ]; then
    ((DONE++))
    continue
  fi
  curl -sf -o "$dest" "$BASE/${code}.svg"
  if [ $? -eq 0 ] && [ -s "$dest" ]; then
    ((DONE++))
  else
    echo "  WARN: failed $code"
    rm -f "$dest"
    ((FAIL++))
  fi
done
echo "Done. $DONE downloaded, $FAIL failed."
