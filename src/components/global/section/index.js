import React from 'react';

class Section extends React.Component {
  render() {
    return (
      <div className="section">
        {React.createElement(this.props.component, {})}
      </div>
    );
  }
}

export default Section;
