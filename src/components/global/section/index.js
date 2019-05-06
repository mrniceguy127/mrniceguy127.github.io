import React from 'react';
import ScrollReveal from 'scrollreveal';

class Section extends React.Component {
  componentDidMount() {
    let sr = ScrollReveal();
    sr.reveal('.section');
  }

  render() {
    return (
      <div className="section">
        {React.createElement(this.props.component, {})}
      </div>
    );
  }
}

export default Section;
