import React, {Component} from 'react';
import './welcomePage.css';




import { Button } from 'reactstrap';

import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect, 
} from 'react-router-dom'


//----------------------Component Imports--------------------------------------

import Contact from './Contact';
import Portfolio from './Portfolio';
import WebDev from './WebDev';
import Welcome from './Welcome';

class About extends React.Component
{
  constructor(props) {
    super(props);
  

  }
  render() {
  return (

    <div className = "AboutContainer">
      <h3> About Me </h3>

      <div className = "Name">
        <p>Conor Hoey</p>
      </div>

      <div className = "Location">
        <h3> Location </h3>
          <p>Warrenpoint, County Down , Northern Ireland </p>
      </div>

      <div className = "Education">
        <h3> Education </h3>
          <p> Foundation Degree in Computing and Network Systems ( Southern Regional College , Newry )</p>
          <p></p>
          <p> Bachelor of Science Honours - Computing Science </p>
          <p> Graduated from Ulster University in 2019 </p> 
      </div>

      <div className = "Experience">
        <h3> Check out below my experience with programming and some of my personal projects!</h3>
        <Button href = ""> <i class="fab fa-github fa-2x"></i> My GitHub </Button>
        <br></br>
        <br></br>
        <Button component = {Portfolio}>What I am currently working on!</Button>
        <br></br>
        <br></br>
        <Button component = {WebDev}>Do you require a website or an app?</Button>

      </div>


    </div>
 );
}
}

export default About;
