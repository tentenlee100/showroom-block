var youtubePlayer = document.getElementById('youtubePlayer');
var srcUrl = youtubePlayer.src;
srcUrl = srcUrl.replace('autoplay=1&','');
youtubePlayer.src = srcUrl;