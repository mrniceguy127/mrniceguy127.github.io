import React from 'react';
import ProjectsList from './projects-list';
import Section from '../global/section';
import '../../css/projects/index.css';
import ScrollReveal from 'scrollreveal';

class Projects extends React.Component {
  componentDidMount() {
    let sr = ScrollReveal();
    sr.reveal('.section');
  }
  
  render() {
    return (
      <div className="home">
        <div className="projects-content">
          <Section component={ProjectsList} />
        </div>
      </div>
    );
  }
};

export default Projects;
