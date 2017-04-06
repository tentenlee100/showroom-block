// Save it using the Chrome extension storage API.

// chrome.storage.sync.set({'foo': 'hello', 'bar': 'hi'}, function() {
//   console.log('Settings saved');
// });

// Read it using the storage API
chrome.storage.sync.get('type', function(item) {
  if (item.type === undefined){
    document.getElementById('stopAutoPlay').checked = true;
  }else if (item.type == 'stopAutoPlay'){
    document.getElementById('stopAutoPlay').checked = true;
  }else{
    document.getElementById('remove').checked = true;
  }
});

function reloadAllTab(){
  chrome.tabs.query({ url: 'https://www.showroom-live.com/*'}, function (tabs) {

    for (tab in tabs){
      chrome.tabs.reload();
    }
 });
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('button').onclick = function(){
    var type = 'stopAutoPlay';
    if (document.getElementById('stopAutoPlay').checked == true){
      type = 'stopAutoPlay';
    }else if (document.getElementById('remove').checked == true) {
      type = 'remove';
    }
    chrome.storage.sync.set({'type':type}, function() {
      reloadAllTab();
      window.close();
    });
  }
});
