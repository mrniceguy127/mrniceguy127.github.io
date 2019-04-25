import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './routes.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          {routes}
        </Router>
      </div>
    );
  }
}

export default App;
