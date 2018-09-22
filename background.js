function openEventCreationTab(data) {
  
  chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.sendRequest(tab.id, {title: "title"}, function(response) {
      
      var gCalParams = new URLSearchParams({
        "action" : 'TEMPLATE',
         "text" : response.title,
        // "dates" : startTime + '/' + endTime,
        // "location" : locationText,
        "details" : response.URL,
        "trp;" : true,
        'gsessionid' : 'OK',
        'output' : 'xml'
      });
      var url = "https://calendar.google.com/calendar/render?" + gCalParams.toString();
      chrome.tabs.create({"url": url})
    });
  });
 
  
  //
}

chrome.contextMenus.create({
  title: "Add to Calendar",
  contexts: ["all"],
  onclick: openEventCreationTab
});
