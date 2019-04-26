import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import routes from './routes.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router basename={ process.env.PUBLIC_URL }>
          {routes}
        </Router>
      </div>
    );
  }
}

export default App;
