import React from 'react';
import config from './config.js';

class ProjectCard extends React.Component {
  render() {
    let info = this.props.info;
    let projectIcon = info.icon ? <img className="project-icon" src={info.icon} alt={info.title} /> : '';
    let buttons = info.buttons.map(button => {
      let icon = button.icon ? <i className={`project-card-button-icon ${button.iconType} fa-${button.icon}`}></i> : '',
        text = button.text ? <span className="project-card-button-text">{button.text}</span> : '';
      return (
        <a key={button.key} href={button.link} target="_blank" rel="noopener noreferrer" className="project-card-button btn btn-primary">
          {icon}
          {text}
        </a>
      );
    });

    return (
      <div className="project-card-container">
        <div className="project-card card">
          <div className="card-img-top">
            <div className="project-card-icon-container">
              {projectIcon}
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">{info.title}</h5>
            {buttons}
          </div>
        </div>
      </div>
    );
  }
};

class ProjectCards extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projectCards: config.projects
    };
  }

  render() {
    let cards = this.state.projectCards.map(card => <ProjectCard key={card.key} info={card} />);

    return (
      <div className="project-cards">
        {cards}
      </div>
    );
  }
}

class Body extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: config.body
    };
  }

  render() {
    return (
      <p className="projects-list-body lead">
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
      <h2 className="projects-list-header display-2">
        {this.state.text}
      </h2>
    );
  }
};

class ProjectsList extends React.Component {
  render() {
    return(
      <div className="projects-list-container">
        <div className="projects-list text-light">
          <Header />
          <hr className="my-4 bg-light" />
          <Body />
          <ProjectCards />
        </div>
      </div>
    );
  }
};

export default ProjectsList;
