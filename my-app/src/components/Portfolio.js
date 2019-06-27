import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import './portfolio.css';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
  }

  getContainer = () => {
    return {
      border: '1px solid',
      borderRadius: '20px',
      borderColor: '#66fcf1',
      backgroundColor: '#23222e',
      height: '580px'
    };
  };

  getButtonStyle = () => {
    return {
      width: '150px',
      height: '55px',

      // display: 'inline',
      position: 'fixed-bottom',
      left: '60px',
      bottom: '10px',
      color: '#66fcf1',
      backgroundColor: 'transparent',
      border: '1px solid',
      borderRadius: '50px',
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
      <div className='PortfolioContainer' id='PortfolioContainer'>
        <div className='Websites' id='Websites'>
          <Container className='container' id='container'>
            <Row className='row' id='row'>
              <Col className='col' id='col' style={this.getContainer()}>
                <br />
                {/* <img> IMAGE </img> */}
                <i className='fab fa-spotify fa-2x' />
                <p>Spotify API Advanced Searching</p>

                <p>
                  Allows the users to find a random artist or band based on what
                  music genre they select.
                </p>
                <p>
                  It also allowed users to search for an artist or band based on
                  what music genre and the music characteristics ,{' '}
                  {/* Spellings??*/}
                  e.g. liveness and instrumental instrumentalness.
                </p>
                <p>
                  This was one of the additional features within my final year
                  in university assignment.
                </p>
                <p>Created with HTML , CSS , PHP and Laravel</p>
                <p>Status : Completed </p>
                <p>Date : December 2018</p>
                <Button
                  id='Github'
                  style={this.getButtonStyle()}
                  href='https://github.com/ConorHoey22/UniProject'
                  target='_blank'
                >
                  <i className='fab fa-github fa-2x' /> GitHub
                </Button>

                <br />
                <br />
              </Col>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Col style={this.getContainer()}>
                <br />
                <i className='fas fa-music fa-2x' />
                <p> Music Social Media</p>

                <p>
                  This was created for my final year project, however it is
                  being redesigned and new additional features are being added.
                </p>
                <p>
                  This allowed users to sign up , login , view user profiles ,
                  create a blog and follow users and also access the Spotify API
                </p>
                <p>Created with : HTML , CSS , PHP , MySQL and Laravel</p>
                <p>Status : Completed </p>
                <p>Date: April 2019 </p>
                <Button
                  id='Github1'
                  style={this.getButtonStyle()}
                  href='https://github.com/ConorHoey22/UniProject'
                  target='_blank'
                >
                  <i className='fab fa-github fa-2x' /> GitHub
                </Button>
                <br />
                <br />
              </Col>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Col style={this.getContainer()}>
                <br />
                <i className='fas fa-users fa-2x' />
                <p> Restful API using Node.Js, MySQL and React.js</p>
                {/* <img> IMAGE </img> */}

                <p>
                  This allowed users to sign up , login , view user profile ,
                  create a blog and follow users
                </p>
                <p>Created with HTML , CSS , JSX , Node.js and React.js</p>
                <p>Status: Inprogress</p>

                <Button
                  id='Github2'
                  style={this.getButtonStyle()}
                  href='https://github.com/ConorHoey22/React-Node-MySQL'
                  target='_blank'
                >
                  <i className='fab fa-github fa-2x' /> GitHub
                </Button>
                <br />
                <br />
              </Col>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Col style={this.getContainer()}>
                <br />
                <i className='fas fa-user-friends fa-2x' />
                <p> Restful API using Node.Js, MongoDB with AWS and React.js</p>
                {/* <img> IMAGE </img> */}
                <p>NoSQL Database</p>
                <p>
                  This allowed users to sign up , login , view user profile ,
                  create a blog and follow users
                </p>
                <p>Created with HTML , CSS , JSX , Node.js and React.js</p>
                <p>Status: Inprogress</p>
                <Button
                  id='Github3'
                  style={this.getButtonStyle()}
                  href='https://github.com/ConorHoey22/NodeProject'
                  target='_blank'
                >
                  <i className='fab fa-github fa-2x' /> GitHub
                </Button>{' '}
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      // small containers will hold logo design , maybe screenshots or websites and user click on the image,it then goes full screen / image viewer
    );
  }
}

export default Portfolio;
