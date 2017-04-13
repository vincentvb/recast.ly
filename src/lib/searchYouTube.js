var searchYouTube = (options, callback) => {
  $.get("https://www.googleapis.com/youtube/v3/search", {
    type: 'video',
    key: options.key,
    q: options.query,
    maxResults: options.max

  }


  )
};

window.searchYouTube = searchYouTube;
