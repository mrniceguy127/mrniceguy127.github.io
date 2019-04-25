import React from 'react';
import config from './config.js';

class SocialCard extends React.Component {
  render() {
    let info = this.props.info;

    return (
      <div className="social-card-container">
        <div className="social-card card">
          <div className="card-img-top">
            <div className="social-card-icon-container">
              <i className={`fab fa-${info.icon} fa-7x`}></i>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">{info.name}</h5>
            <p className="card-text">{info.username}</p>
            <a target="_blank" rel="noopener noreferrer" href={info.link} className="btn btn-primary text-light">Go!</a>
          </div>
        </div>
      </div>
    );
  }
};

class Body extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: config.body
    };
  }

  render() {


    return (
      <div className="where-i-am-body">
        <p className="where-i-am-body-text lead">
          {this.state.text}
        </p>
      </div>
    );
  }
};

class SocialCards extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      socialCards: config.socialCards
    };
  }

  render() {
    let cards = this.state.socialCards.map(card => <SocialCard key={card.key} info={card} />);

    return (
      <div className="social-cards">
        {cards}
      </div>
    );
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: config.header
    };
  }

  render() {
    return (
      <h2 className="where-i-am-header display-2">
        {this.state.text}
      </h2>
    );
  }
};

class SocialLinks extends React.Component {
  render() {
    return(
      <div className="where-i-am-container">
        <div className="where-i-am text-light">
          <Header />
          <hr className="my-4 bg-light" />
          <Body />
          <SocialCards />
        </div>
      </div>
    );
  }
};

export default SocialLinks;
