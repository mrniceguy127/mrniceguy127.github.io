import React from 'react';
import ReactPlayer from 'react-player';
import {
  BrowserView,
  isMobile
} from "react-device-detect";
import config from './config.js';

class VideoPlayer extends React.Component {
  render() {
    return (
      <ReactPlayer className={`intro-video ${this.props.off ? 'intro-video-off' : ''}`} volume={0} width="100%" height="100%" poster={ this.props.video.fallbackImage } muted={this.props.muted} autoPlay={this.props.autoPlay} playing={this.props.playing} url={ this.props.video.url } onEnded={this.props.onEnded} />
    );
  }
};
class VideoPlaylist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: config.videos,
      currentVideo: 0
    };
  }

  handleEnd() {
    let newVideo = 0;

    if (this.state.currentVideo + 1 !== this.state.videos.length) newVideo = this.state.currentVideo + 1;

    this.setState(Object.assign(this.state, { currentVideo: newVideo }));
  }

  render() {
    let videosPlayers = this.state.videos.map((video, i) => {
        return i === this.state.currentVideo ? (
          <VideoPlayer key={'intro-video-' + i} video={video} autoPlay playing muted onEnded={ () => this.handleEnd() } />
        ) : (
          <VideoPlayer key={'intro-video-' + i} off video={video} playing={false} muted onEnded={ () => this.handleEnd() } />
        );
      });

    return (
      <div className="intro-playlist">
        <BrowserView>
          {videosPlayers}
        </BrowserView>
      </div>
    );
  }
};

class RadialGradient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: props.color,
      opacity: props.opacity
    };
  }

  render() {
    return (
      <div className="intro-radial-gradient"></div>
    );
  }
};

class Text extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: {
        main: props.text.main,
        secondary: props.text.secondary,
        copyright: props.text.copyright
      }
    }
  }

  render() {
    return (
      <div className="intro-text">
        <h1 className="display-2">{this.state.text.main}</h1>
        <h4 className="display-4">{this.state.text.secondary}</h4>
        <span className="copyight">
          <span className="copyight-non-link">{this.state.text.copyright.own ? "" : "I do not own the videos shown. The videos are owned by "}</span>
          <a className="copyight-link" href={this.state.text.copyright.url} target="_blank" rel="noopener noreferrer">{this.state.text.copyright.own ? "" : `${this.state.text.copyright.name}.`}</a>
        </span>
      </div>
    );
  }
};

class CanvasAnimation extends React.Component {
  componentDidMount() {
    let canvas = document.getElementsByClassName('canvas-animation')[0];
    let ctx = canvas.getContext('2d');

    let lines = [];
    let numLines = 7;
    let possibleColors = [
      'rgb(31,31,31)',
      'rgb(15,15,15)',
      'rgb(31, 31, 200)',
      'rgb(31, 31, 100)',
      'rgb(31, 31, 63)',
      'rgb(113, 150, 200)'
    ];

    let i;
    let lastColor = null;
    for (i = 0; i < 8; i++) {
      let colorIndex = Math.floor(Math.random() * possibleColors.length);
      if (colorIndex === lastColor) {
        if (possibleColors.length !== 1) {
          if (colorIndex === possibleColors.length - 1) {
            colorIndex--;
          } else {
            colorIndex++;
          }
        }
      }

      lastColor = colorIndex;

      lines.push({
        width: 600/numLines,
        height: 800,
        color: possibleColors[colorIndex]
      });
    }

    let drawLine = (lineIndex) => {
      if (lineIndex < lines.length/2) {
        let j = 0;
        let interval = setInterval(() => {
          if (j-1 !== 800/16) {
            ctx.fillStyle = lines[lineIndex].color;
            ctx.fillRect(0, lineIndex*lines[lineIndex].width, j*16, lines[lineIndex].width);
            ctx.fillStyle = lines[(lines.length-2)-lineIndex].color;
            ctx.fillRect(0, (((lines.length-2)-lineIndex))*lines[lineIndex].width, j*16, lines[lineIndex].width);
            j++;
          } else {
            clearInterval(interval);
            drawLine(lineIndex + 1);
          }
        }, 1);
      }
    }

    drawLine(0);
  }

  render() {
    return (
      <div className="canvas-animation-container">
        <canvas className="canvas-animation" width="800" height="600"></canvas>
      </div>
    );
  }
};

class Intro extends React.Component {
  render() {
    let media = config.videos.length ? <VideoPlaylist /> : <CanvasAnimation />;
    let gradient = config.videos.length ? <RadialGradient opacity={config.gradient.opacity} color={config.gradient.color} /> : "";
    return (
      <div className="intro-container">
        <div className={`intro ${isMobile ? 'mobile' : ''}`}>
          { media }
          { gradient }
          <Text text={config.header.text} color={config.header.color} />
        </div>
      </div>
    );
  }
}

export default Intro;
