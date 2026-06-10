(function() {
    const jaRegex = /[぀-ゟ゠-ヿ一-龯]/;
    function tagJapaneseElements(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            if (jaRegex.test(node.nodeValue)) {
                if (node.parentElement) {
                    node.parentElement.classList.add("notranslate-ja");
                }
            }
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            node.childNodes.forEach(tagJapaneseElements);
        }
    }
    tagJapaneseElements(document.body || document.documentElement);
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                tagJapaneseElements(node);
            });
        });
    });
    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });
})();