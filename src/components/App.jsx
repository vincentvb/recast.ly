class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

      currentVideo: this.props.videos === undefined ? window.exampleVideoData[0] : this.props.videos[0],
      videoList: this.props.videos === undefined ? window.exampleVideoData : this.props.videos
    }
     this.changeCurrentVideo = this.changeCurrentVideo.bind(this)
  }


  changeCurrentVideo(props) {
    this.setState({currentVideo: props})
  }
  render() {
    return(
      <div>
        <Nav />
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
