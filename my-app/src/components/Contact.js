import React, { Component } from 'react';

import { Table } from 'reactstrap';

import { Container, Row, Col, Button } from 'reactstrap';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  getContainerStyle = () => {
    return {
      fontSize: '17px',
      backgroundColor: '#23222e',
      color: '#66fcf1'
    };
  };

  render() {
    return (
      <div className='contactLinks' style={this.getContainerStyle()}>
        <Container>
          <h4>Follow us!</h4>
          <i class='fab fa-facebook fa-2x' href='' /> Facebook
          &nbsp;&nbsp;&nbsp;&nbsp;
          <i class='fab fa-twitter fa-2x' href='' /> Twitter
          <br />
          <br />
          <i class='fab fa-instagram fa-2x' href='' /> Instagram
          &nbsp;&nbsp;&nbsp;&nbsp;
          <i class='fab fa-linkedin fa-2x' href='' /> Linkedin
          <br />
          <br />
          <br />
          <h4> Need a website or have an app idea?</h4>
          <p> Send us a message on of our social medias or by email!</p>
          <i class='fas fa-envelope fa-2x' /> CHTech@outlook.com
        </Container>
      </div>
    );
  }
}

export default Contact;
