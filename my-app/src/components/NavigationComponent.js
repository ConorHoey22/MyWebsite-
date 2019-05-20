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


 
    getStyle  = () => {
          return{
            background: 'white',
            color: '#000000',
            

           // overflow: 'hidden',
         //   backgroundcolor: '#f1f1f1',
          // padding: '90px 10px', /* Large padding which will shrink on scroll (using JS) */
          // transition: '0.4s', /* Adds a transition effect when the padding is decreased */
            position: 'fixed', /* Sticky/fixed navbar */
            width: '100%',
            //top: '0', /* At the top */
             //zindex: '99'
          }
        }
      



    render() 
    {
        return (

          <div className="NavBar">
             
              <Navbar color="light" light expand="md" style = {this.getStyle()}>
           
              <NavbarBrand href="/">CH Technology</NavbarBrand>  
              <NavbarToggler onClick={this.toggle} />
              
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                
                  <NavItem>
                    <NavLink href="/About" >About</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/Portfolio" >Portfolio</NavLink>
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