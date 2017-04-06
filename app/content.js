function stopAutoPlay() {
    var youtubePlayer = document.getElementById('youtubePlayer');
    var srcUrl = youtubePlayer.src;
    srcUrl = srcUrl.replace('autoplay=1&', '');
    youtubePlayer.src = srcUrl;
    youtubePlayer.id = 'youtubePlayer-new'
}

function remove() {
    document.getElementById('youtubePlayer').remove();
}

function checkAction(type) {
    if (type === undefined) {
        stopAutoPlay();
    } else if (type == 'stopAutoPlay') {
        stopAutoPlay();
    } else {
        remove();
    }
}
// Read it using the storage API
chrome.storage.sync.get('type', function(item) {
    checkAction(item.type);
});

var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        chrome.storage.sync.get('type', function(item) {
            checkAction(item.type);
        });
    });
});
// 參數：決定要監控哪些物件
var config = {
    attributes: true,
    childList: true,
    characterData: true,
    subtree:true
}

// 跟 MutationObserver 指定要監控的目標與參數
observer.observe(document.getElementById('js-room-section'), config);
// chrome.storage.onChanged.addListener(function(changes, namespace) {
//   if (changes["type"]) {
//
//     // checkAction(changes["type"].newValue);
//   }
//
// });
