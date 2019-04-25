import React from 'react';
import { Route, Switch } from 'react-router';
import { Nav } from './components/global';
import Home from './components/home';
import Projects from './components/projects';
import NotFound from './components/not-found';

class Content extends React.Component {
  render() {
    return (
      <div>
        {React.createElement(this.props.mainComponent, {})}
        <Nav currentPage={this.props.currentPage}/>
      </div>
    );
  }
};

export default (
  <div>
    <Switch>
      <Route exact path="/" render={() => <Content mainComponent={Home} currentPage='/' />} />
      <Route exact path="/projects" render={() => <Content mainComponent={Projects} currentPage='/' />} />
      <Route render={() => <Content mainComponent={NotFound} currentPage='' />} status={404}/>
    </Switch>
  </div>
);
