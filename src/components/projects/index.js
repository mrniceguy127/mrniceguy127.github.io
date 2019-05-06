import React from 'react';
import ProjectsList from './projects-list';
import Section from '../global/section';
import '../../css/projects/index.css';

class Projects extends React.Component {
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
