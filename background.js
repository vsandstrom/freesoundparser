// will not trigger if the extension has a popup
chrome.action.onClicked.addListener(function(tab) {
  chrome.tabs.sendMessage(tab.id, "plz");
});
