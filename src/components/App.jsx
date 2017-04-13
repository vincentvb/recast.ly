class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

      currentVideo: window.exampleVideoData[0],
      videoList: window.exampleVideoData 
    }
    this.changeCurrentVideo = this.changeCurrentVideo.bind(this)
    this.retrieveData = this.retrieveData.bind(this)

  }

  changeSearchData (query) {
    var options = {
      key: window.YOUTUBE_API_KEY,
      q: query
    }
    this.props.searchYouTube(options, this.retrieveData)
  }

  componentDidMount () {
    var options = {
      key: window.YOUTUBE_API_KEY,
      q: 'puppies'
    }
    this.props.searchYouTube(options, this.retrieveData)
  }

  retrieveData(data) {
    this.setState({
      currentVideo: data.items[0],
      videoList: data.items
      })
    console.log(data.items)
  }
  changeCurrentVideo(props) {
    this.setState({currentVideo: props})
  }
  render() {
    return(
      <div>
        <Nav changeSearchData={this.changeSearchData.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList} changeVideo={this.changeCurrentVideo}/>
        </div>
      </div>
    )
  }
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
