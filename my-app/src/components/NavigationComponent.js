import React, {Component} from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';



class NavigationComponent extends React.Component
 {
    constructor(props) 
    {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
    }
    
    toggle() 
        {
          this.setState({
            isOpen: !this.state.isOpen
          });
        }

    render() 
    {
        return (

          <div className="NavBar">
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/">CH Technology Solutions</NavbarBrand>  
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="/Home">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/About">About</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/Portfolio">Portfolio</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/WebDevelopment">Web Development</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/GraphicDesign">Graphic Design</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/Contact">Contact</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
        </div>

 
      );
    }
  }

  
export default NavigationComponent;