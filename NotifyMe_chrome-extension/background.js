chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({ url: "https://rnehra01.github.io/NotifyMe/" });
});