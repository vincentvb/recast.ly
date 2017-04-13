var searchYouTube = ({key, q, max=5}, callback) => {
  console.log('q', q);
  $.get("https://www.googleapis.com/youtube/v3/search", {
    part: 'snippet, id',
    type: 'video',
    key: key,
    q: q,
    maxResults: max,
    videoEmbeddable: 'true'
	})
	.done(function(data) {
    callback(data);
  })
};

window.searchYouTube = searchYouTube;
