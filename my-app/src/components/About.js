import React, { Component } from 'react';
import './welcomePage.css';

import { Container, Row, Col, Button } from 'reactstrap';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

//----------------------Component Imports--------------------------------------

import Contact from './Contact';
import Portfolio from './Portfolio';
import WebDev from './Services';
import Welcome from './Welcome';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  getContainer = () => {
    return {
      border: '1px solid',
      borderRadius: '10px',
      borderColor: '#66fcf1',
      backgroundColor: '#23222e',
      height: '520px'
    };
  };

  getButtonStyle = () => {
    return {
      width: '150px',
      height: '80px',
      display: 'inline-block',

      color: '#66fcf1',
      backgroundColor: 'transparent',
      border: '1px solid',
      borderRadius: '30px',
      borderColor: '#66fcf1'
    };
  };

  //Background of Div
  getStyle = () => {
    return {
      backgroundColor: 'white'
    };
  };

  render() {
    return (
      <div className='PortfolioContainer'>
        <div className='Websites'>
          <Container>
            <h3> About Me </h3>
            <p>Conor Hoey</p>
            <h3> Education </h3>
            <p>
              Foundation Degree in Computing and Network Systems ( Southern
              Regional College , Newry )
            </p>
            <p>
              {' '}
              Bachelor of Science Honours in Computing Science ( Ulster
              University , Jordanstown ){' '}
            </p>
            <Button href='' style={this.getButtonStyle()}>
              <i class='fab fa-github fa-2x' /> My GitHub
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button href='/Portfolio' style={this.getButtonStyle()}>
              What I am currently working on.
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button href='/Services' style={this.getButtonStyle()}>
              Do you require a website or an app?
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
          </Container>
        </div>
      </div>
    );
  }
}

export default About;
