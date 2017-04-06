

function stopAutoPlay(){
  var youtubePlayer = document.getElementById('youtubePlayer');
  var srcUrl = youtubePlayer.src;
  srcUrl = srcUrl.replace('autoplay=1&','');
  youtubePlayer.src = srcUrl;
}

function remove(){
  document.getElementById('youtubePlayer').remove();
}
function checkAction(type){
  if (type === undefined){
    stopAutoPlay();
  }else if (type == 'stopAutoPlay'){
    stopAutoPlay();
  }else{
    remove();
  }
}
// Read it using the storage API
chrome.storage.sync.get('type', function(item) {
  checkAction(item.type);
});

chrome.storage.onChanged.addListener(function(changes, namespace) {
  if (changes["type"]) {

    // checkAction(changes["type"].newValue);
  }

});
