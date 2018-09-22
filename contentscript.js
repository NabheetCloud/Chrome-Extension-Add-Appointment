// alert("hello");
//document.body.style.background = 'yellow';

chrome.storage.local.set({title: document.title,
url:document.URL});
console.log(document.title +' ' + document.URL);
chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
      if (request.title == "title"){
        console.log('title '+document.title);
        sendResponse({title: document.title,URL:document.URL});
      }
      else
        sendResponse({}); 
    });