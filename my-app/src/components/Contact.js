import React, { Component } from 'react';

import { Table } from 'reactstrap';

import { Container, Row, Col, Button } from 'reactstrap';

const Contact = () => {
  // constructor(props) {
  // super(props);
  // }

  var getContainerStyle = {
    fontSize: '17px',
    backgroundColor: '#23222e',
    color: '#66fcf1'
  };

  return (
    <div className='contactLinks' style={getContainerStyle}>
      <Container>
        <h4>Follow us!</h4>
        <i className='fab fa-facebook fa-2x' href='' /> Facebook
        &nbsp;&nbsp;&nbsp;&nbsp;
        <i className='fab fa-twitter fa-2x' href='' /> Twitter
        <br />
        <br />
        <i className='fab fa-instagram fa-2x' href='' /> Instagram
        &nbsp;&nbsp;&nbsp;&nbsp;
        <i className='fab fa-linkedin fa-2x' href='' /> Linkedin
        <br />
        <br />
        <br />
        <h4> Need a website or have an app idea?</h4>
        <p> Send us a message on of our social medias or by email!</p>
        <i className='fas fa-envelope fa-2x' /> hoeytech@outlook.com
      </Container>
    </div>
  );
};

export default Contact;
