import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { arrayOf, string, shape } from 'prop-types';

class NavBar extends Component {
  static displayName = 'NavBar';
  static defaultProps = {
    linkArray: [{ label: 'Label', route: '/route/' }],
    ctaButtonText: '',
    logo: '',
  };
  static propTypes = {
    linkArray: arrayOf(shape({
      label: string.isRequired,
      route: string.isRequired,
    })),
    ctaButtonText: string,
    logo: string,
  };
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  createNavItems = ({ label, path }, key) => (
    <li key={key} className="nav-item">
      <NavLink to={path} className="nav-link">{label}</NavLink>
    </li>
  )
  createCTAButton = cta => (
    <ul className="nav navbar-nav ml-auto justify-content-end">
      <li className="nav-item ">
        <form className=" form-inline ">
          <NavLink to="/">
            <button className="btn btn-md btn-outline-secondary" type="button">{cta}</button>
          </NavLink>
        </form>
      </li>
    </ul>
  )
  render() {
    const {
      logo,
      linkArray,
      ctaButtonText,
    } = this.props;
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-white">
        <Link to="/" className="navbar-brand">
          {logo ? <img className="navbar-brand" src={logo} alt="logo" style={{ height: '40px' }} /> : 'Bootstrap' }
        </Link>
        <button type="button" className="navbar-toggler">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav w-100 justify-content-left mb-sm-0 mb-4">
            {
              linkArray.map((data, key) => this.createNavItems(data, key))
            }
          </ul>
          {
            ctaButtonText && this.createCTAButton(ctaButtonText)
          }
        </div>
      </nav>
    );
  }
}

export default NavBar;
