import React from 'react';
import config from './config.js';

class NavLink extends React.Component {
  render() {
    return (
        <li className="nav-item">
          <a className={`nav-link text-light ${this.props.active ? 'active' : ''}`} href={this.props.link.href}>{this.props.link.name}</a>
        </li>
    );
  }
};

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      links: config.links,
      bgColor: config.bgColor,
      textColor: config.textColor,
      height: config.height,
      width: config.width,
      linkFontSize: config.linkFontSize,
      isTop: true
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY === 0;
      if (isTop !== this.state.isTop) {
          this.setState({ isTop })
      }
    });
  }

  render() {
    let links = this.state.links,
      navLinks = links.map((link, i) => {
        return <NavLink active={this.props.currentPage === link.href} link={link} key={'main-nav-link-' + i} />;
      });

    return (
      <nav className={`main-nav navbar navbar-expand-lg navbar-dark fixed-top ${this.state.isTop ? '' : 'scrolled'}`}>
        <button className="navbar-toggler text-light" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            {navLinks}
          </ul>
        </div>
      </nav>
    );
  }
};

export default Nav;
