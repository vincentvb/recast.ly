class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

      currentVideo: this.props.videos === undefined ? window.exampleVideoData[0] || this.props.videos[0],
      videoList: this.props.videos === undefined ? window.exampleVideoData[0] || this.props.videos[0]
    }
    console.log(this.state.currentVideo)
  }


  changeCurrentVideo(newVideo) {
    this.setState({currentVideo: newVideo})
  }
  render() {
    return(
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} state={this.state}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList} state={this.state}/>
        </div>
      </div>
    )
  }
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
