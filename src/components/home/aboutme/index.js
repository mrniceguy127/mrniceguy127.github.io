import React from 'react';
import config from './config.js';

class Body extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: config.body
    };
  }

  render() {
    return (
      <p className="about-me-body lead">
        {this.state.text}
      </p>
    );
  }
};

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: config.header
    };
  }

  render() {
    return (
      <h2 className="about-me-header display-2">
        {this.state.text}
      </h2>
    );
  }
};

class AboutMe extends React.Component {
  render() {
    return(
      <div className="about-me-container">
        <div className="about-me text-light">
          <Header />
          <hr className="my-4 bg-light" />
          <Body />
        </div>
      </div>
    );
  }
};

export default AboutMe;
