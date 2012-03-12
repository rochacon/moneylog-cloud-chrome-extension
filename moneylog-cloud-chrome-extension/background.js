/**
 * Open or focus a tab with Moneylog Cloud
 */
chrome.browserAction.onClicked.addListener(function (){
    var tab_properties = {
        "url": "http://moneylog-cloud.aurelio.net/"
    };
    chrome.tabs.query(tab_properties, function(tabs){
        if (tabs.length === 0) {
            chrome.tabs.create(tab_properties);
        } else {
            chrome.tabs.update(tabs[0].id, {"active": true});
        }
    });
});
