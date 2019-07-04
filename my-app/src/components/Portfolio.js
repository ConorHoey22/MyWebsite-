import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import './portfolio.css';

const Portfolio = () => {
  // constructor(props) {
  // super(props);
  // }

  var getContainer = {
    border: '1px solid',
    borderRadius: '20px',
    borderColor: '#66fcf1',
    backgroundColor: '#23222e',
    height: '580px',
    display: 'inline-block',
    textAlign: 'left'
  };
  var getList = {
    display: 'inline-block',
    textAlign: 'left',
    width: '100%'
  };

  var getButtonStyle = {
    width: '150px',
    height: '55px',
    position: 'fixed-bottom',
    left: '60px',
    bottom: '10px',
    color: '#66fcf1',
    backgroundColor: 'transparent',
    border: '1px solid',
    borderRadius: '50px',
    borderColor: '#66fcf1'
  };

  //Background of Div
  var getStyle = {
    backgroundColor: 'white'
  };

  return (
    <div className='PortfolioContainer' id='PortfolioContainer'>
      <div className='Websites' id='Websites'>
        <Container className='container' id='container'>
          <Row className='row' id='row'>
            <Col className='col' id='col' style={getContainer}>
              <br />

              <i className='fab fa-spotify fa-2x' />

              <p>Spotify API Advanced Searching</p>

              <p>
                Allows the users to find a random artist or band based on what
                music genre they select.
              </p>
              <p>
                Users are able to search for an artist or band based on music
                genre and the music characteristics , {/* Spellings??*/}
                e.g. liveness and instrumental instrumentalness.
              </p>
              <p>
                This was one of the additional features within my final year in
                university assignment.
              </p>
              <p>Created with HTML , CSS , PHP and Laravel</p>
              <p>Status : Completed </p>
              <p>Date : December 2018</p>
              <Button
                id='Github'
                style={getButtonStyle}
                href='https://github.com/ConorHoey22/UniProject'
                target='_blank'
              >
                <i className='fab fa-github fa-2x' /> GitHub
              </Button>

              <br />
              <br />
            </Col>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Col style={getContainer}>
              <br />
              <i className='fas fa-music fa-2x' />
              <p> Music Social Media</p>
              <p>
                This was created for my final year project, however it is being
                redesigned and new additional features are being added.
              </p>
              <ui style={getList}>
                <li>User Registration System</li>
                <li>User Login System</li>
                <li> Custom Recommendation System</li>
                <li>User Profile pages</li>
                <li>Create Posts</li>
                <li>Following system </li>
                <li>Spotify Recommendation System</li>
              </ui>
              <br />
              <br />
              <p>Created with : HTML , CSS , PHP , MySQL and Laravel</p>
              <p>Status : Completed </p>
              <p>Date: April 2019 </p>
              <Button
                id='Github1'
                style={getButtonStyle}
                href='https://github.com/ConorHoey22/UniProject'
                target='_blank'
              >
                <i className='fab fa-github fa-2x' /> GitHub
              </Button>
              <br />
              <br />
            </Col>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Col style={getContainer}>
              <br />
              <i className='fas fa-users fa-2x' />
              <p> Restful API using Node.Js, MySQL and React.js</p>
              <ui style={getList}>
                <li>User Registration System</li>
                <li>User Login System</li>
                <li>User Profile pages</li>
                <li>Create Posts</li>
                <li>Following system </li>
              </ui>
              <br />
              <br />
              <p>Created with HTML , CSS , JSX , Node.js and React.js</p>
              <p>Status: Inprogress</p>

              <Button
                id='Github2'
                style={getButtonStyle}
                href='https://github.com/ConorHoey22/React-Node-MySQL'
                target='_blank'
              >
                <i className='fab fa-github fa-2x' /> GitHub
              </Button>
              <br />
              <br />
            </Col>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Col style={getContainer}>
              <br />
              <i className='fas fa-user-friends fa-2x' />
              <p> Restful API using Node.Js, MongoDB with AWS and React.js</p>
              {/* <img> IMAGE </img> */}
              <ui>
                <li>NoSQL Database</li>
                <li>Amazon Web Services (AWS)</li>
                <li>User Registration System</li>
                <li>User Login System</li>
                <li>User Profile System</li>
              </ui>
              <br />
              <p>Created with HTML , CSS , JSX , Node.js and React.js</p>
              <p>Status: Inprogress</p>
              <Button
                id='Github3'
                style={getButtonStyle}
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
};

export default Portfolio;
