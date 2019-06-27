import React, { Component } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class NavigationComponent extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  getStyle = () => {
    return {
      color: '#66fcf1'
    };
  };

  getColor = () => {
    return {
      backgroundColor: 'white'
    };
  };

  render() {
    return (
      <div className='NavBar'>
        <Navbar color='dark' light expand='md' style={this.getStyle()}>
          <NavbarBrand href='/' style={this.getStyle()}>
            HoeyTech
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} style={this.getColor()} />

          <Collapse isOpen={this.state.isOpen} navbar style={this.getStyle()}>
            <Nav className='ml-auto' navbar style={this.getStyle()}>
              <NavItem>
                <NavLink href='/' style={this.getStyle()}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/About' style={this.getStyle()}>
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/Portfolio' style={this.getStyle()}>
                  Portfolio
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/Services' style={this.getStyle()}>
                  Services
                </NavLink>
              </NavItem>
              <NavItem />
              <NavItem>
                <NavLink href='/Contact' style={this.getStyle()}>
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavigationComponent;
