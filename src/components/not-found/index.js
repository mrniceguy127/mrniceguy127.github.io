import React from 'react';
import config from './config.js';
import '../../css/not-found/index.css';

class NotFound extends React.Component {
  render() {
    return (
      <div className="error text-center text-light">
        <h1 className="display-1">{config.header}</h1>
        <p className="lead">{config.message}</p>
      </div>
    );
  }
}

export default NotFound;
