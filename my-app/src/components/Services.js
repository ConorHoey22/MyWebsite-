import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import devices_xs from './devicexsm.png';
import devices_s from './devicessm.png';
import devices from './devices.png';

const Services = () => {
  // constructor(props) {
  // super(props);
  // }

  var imageXS = {
    position: 'absolute',
    top: '20px',
    left: '-60px',
    width: '450px',
    height: '270px',
    objectFit: 'scaleDown',
    objectPosition:
      '50% 50%' /* even if we dont declare this the image will still be centered */
  };

  var textStyle = {
    position: 'static',
    top: '10%',
    left: '100px',
    fontSize: '15px'
  };

  var workflowTextStyle = {
    position: 'static',
    top: '95%',
    left: '100px',
    fontSize: '15px'
  };

  return (
    <Container className='services' id='services'>
      <div className='container-fluid' style={textStyle}>
        <p>Do you need a website for your business?</p>
        <p>Do you have an app idea?</p>
        <p>Do you need advice on how to improve your website or app?</p>
        <p>Contact us!</p>
      </div>

      <div className='container-fluid' id='workflow' style={workflowTextStyle}>
        <Row>
          <Col>
            <i className='fas fa-comments fa-3x' />
            <p>Plan - Tell us what you need</p>
          </Col>
          <Col>
            <i className='fas fa-pencil-alt fa-3x' />
            <p>Design - How do you want your website to look and function</p>
          </Col>

          <Col>
            <i className='fas fa-code fa-3x' />
            <p>Development - Regular updates after developments</p>
          </Col>

          <Col>
            <i className='fas fa-check-circle fa-3x' />
            <p>Review - Customer Review Sessions throughout development</p>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Services;
