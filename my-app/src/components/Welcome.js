import React, { Component, Fragment } from 'react';

import image from './homepage-Laptop.jpg';
import { Container, Row, Col } from 'reactstrap';

import './welcomePage.css';
import { Button } from 'reactstrap';

// This is the homepage. This should be the first website - Welcome Component
class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  getBackground = () => {
    return {
      backgroundColor: '#001e4f'
    };
  };
  getborder = () => {
    return {
      position: 'absolute',
      top: '90%',
      left: '10%',
      border: '1px solid',
      borderRadius: '20px',
      borderColor: '#66fcf1',
      height: '100px'
    };
  };
  getTitle = () => {
    return {
      position: 'absolute',
      fontWeight: 'bold',
      top: '10px',
      left: '100px',
      color: '#c00000',
      width: '100%',
      height: '100%',
      textAlign: 'left',
      fontSize: '30px'
    };
  };

  getInfo = () => {
    return {
      position: 'absolute',
      fontWeight: 'bold',
      top: '200px',
      left: '100px',
      color: '#000000',
      width: '100%',
      height: '100%',
      textAlign: 'left',
      fontSize: '15px'
    };
  };

  /*
div#welcomeInfo.welcomeInfo.container {
  position: absolute;
  font-weight: bold;
  font-size: 10px;
  top: 130px;
  left: 100px;
  color: #c00000;
  width: 100%;
  height: 100%;
  text-align: left;
}

div#workflowInfo.workflowInfo.container {
  position: absolute;
  font-weight: bold;
  font-size: 15px;
  top: 200px;
  left: 100px;
  color: #000000;
  width: 100%;
  height: 100%;
  text-align: left;
}

nav {
  z-index: 2;
}

    };
  };*/

  workflowTextStyle = () => {
    return {
      position: 'absolute',
      top: '85%',
      left: '1%',

      textAlign: 'center',
      fontSize: '12px'
    };
  };

  getStyle = () => {
    return {
      position: 'fixed',
      top: '38.5%',
      left: '90%',
      objectFit: 'cover',
      width: '100%',
      height: ' 100%'
    };
  };

  render() {
    return (
      <div id='welcome' className='welcome'>
        <img src={image} className='img-fluid' id='welcomeImage' />

        <Container id='welcomeInfo' className='welcomeInfo'>
          <h3 id='companyName' className='companyName'>
            HoeyTech
          </h3>
        </Container>
        <Container id='workflowInfo' className='workflowInfo'>
          <p>Web Development </p>
          <p>App Development </p>
          <p>IT Consultancy Sessions</p>

          <Button href='/Services'>Learn more</Button>
        </Container>

        <div className='container-fluid' style={this.workflowTextStyle()}>
          <br />
          <Row>
            <Col xs='3'>
              <i className='fas fa-comments fa-3x' />
              <p>Planning - Tell us what you need</p>
            </Col>
            <Col xs='3'>
              <i className='fas fa-pencil-alt fa-3x' />
              <p>Design - How do you want your website to look and function</p>
            </Col>

            <Col xs='3'>
              <i className='fas fa-code fa-3x' />
              <p>Development - Regular updates during and after developments</p>
            </Col>

            <Col xs='3'>
              <i className='fas fa-check-circle fa-3x' />
              <p>Review - Customer Review Sessions throughout development</p>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Welcome;
