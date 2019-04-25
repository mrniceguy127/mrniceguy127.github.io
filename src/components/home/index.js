import React from 'react';
import Intro from './intro/index.js';
import SocialLinks from './social-links/index.js';
import Section from '../global/section/index.js';
import '../../css/home/index.css';
import ScrollReveal from 'scrollreveal';

class Home extends React.Component {
  componentDidMount() {
    let sr = ScrollReveal();
    sr.reveal('.section');
  }

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
