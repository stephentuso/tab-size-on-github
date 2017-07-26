chrome.tabs.onUpdated.addListener(function(tabId, updateInfo, tab) {
  if (updateInfo.status == "complete") {
    chrome.storage.sync.get("tabSize", function(items) {
      chrome.tabs.insertCSS(tabId, {
        code: `
          .tab-size[data-tab-size='2'],
          .tab-size[data-tab-size='4'],
          .tab-size[data-tab-size='8'],
          .inline-review-comment,
          .gist table.lines,
          table.diff-table,
          .markdown-body pre,
          body > pre,
          .blob-code {
            tab-size: ${items.tabSize || 4} !important;
          }
        `
      });
    })
  }
});
