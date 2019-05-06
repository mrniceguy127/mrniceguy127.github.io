import React from 'react';
import Intro from './intro/index.js';
import SocialLinks from './social-links/index.js';
import Section from '../global/section/index.js';
import '../../css/home/index.css';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Intro />
        <div className="home-content">
          <Section component={SocialLinks} />
        </div>
      </div>
    );
  }
};


export default Home;
