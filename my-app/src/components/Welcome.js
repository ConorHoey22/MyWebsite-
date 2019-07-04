import React, { Component, Fragment } from 'react';

import image from './homepage-Laptop.jpg';
import { Container, Row, Col } from 'reactstrap';

import './welcomePage.css';
import { Button } from 'reactstrap';

// This is the homepage. This should be the first website - Welcome Component
const Welcome = () => {
  // constructor(props) {
  // super(props);
  // }

  var getBackground = {
    backgroundColor: '#001e4f'
  };

  var getButtonStyle = {
    backgroundColor: '#23222e',
    color: '#66fcf1'
  };

  var workflowTextStyle = {
    position: 'absolute',
    top: '60%',
    left: '1%',
    width: '50%',
    textAlign: 'center',
    fontSize: '12px'
  };

  var getStyle = {
    position: 'absolute',
    top: '1%',
    left: '0%',
    width: '100%'
  };

  return (
    <div id='welcome' className='welcome'>
      <img src={image} className='img-fluid' id='welcomeImage' />

      <Container id='welcomeInfo' className='welcomeInfo'>
        <h3 id='companyName' className='companyName'>
          HoeyTech
        </h3>
      </Container>
      <Container id='workflowInfo' className='workflowInfo'>
        <p> Web Development </p>
        <p> App Development</p>
        <p> IT Consultant Services</p>

        <Button style={getButtonStyle} href='/Services'>
          Learn more
        </Button>
      </Container>

      <div className='container-fluid' id='container-fluid'>
        <Row id='row'>
          <Col xs='3'>
            <div id='workflow'>
              <Button className='serviceBtn' href='/Services'>
                <br />
                <i className='fas fa-comments fa-2x' />
                <br />
                Plan
              </Button>
            </div>
          </Col>

          <Col xs='3'>
            <div id='workflow'>
              <Button className='serviceBtn' href='/Services'>
                <br />
                <i className='fas fa-pencil-alt fa-2x' />
                <br />
                Design
              </Button>
            </div>
          </Col>

          <Col xs='3'>
            <div id='workflow'>
              <Button className='serviceBtn' href='/Services'>
                <br />
                <i className='fas fa-code fa-2x' />
                <br />
                Development
              </Button>
            </div>
          </Col>

          <Col xs='3'>
            <div id='workflow'>
              <Button className='serviceBtn' href='/Services'>
                <br />
                <i className='fas fa-check-circle fa-2x' />
                <br />
                Review
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Welcome;
