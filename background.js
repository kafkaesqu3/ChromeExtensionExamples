//this is how you console.log into the current page from background.js
//this seems unecessary because i can see output in background page
//chrome.extension.getBackgroundPage().console.log('Hello from background.js');

//go to extensions and click on "Inpsect views background page" to view output of console.log
console.log("Hello from background.js log");

chrome.browserAction.onClicked.addListener(async () => {
    await chrome.tabs.create({url: chrome.extension.getURL("popup.html")});
    console.log("onClicked addListener");
});


chrome.runtime.onInstalled.addListener(function() { 
    console.log("onInstalled");
});