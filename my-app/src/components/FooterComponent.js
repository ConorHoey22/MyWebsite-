import React, {Component} from 'react';
import facebookLogo from './f_logo_RGB-Black_58.png';
import instagramlogo from './instagramlogo.png';
import twitterlogo from './twitterlogo.png';
import linkedinlogo from './linkedinlogo.png';

import { Table } from 'reactstrap';

class FooterComponent extends React.Component
 {
    constructor(props) 
    {
        super(props);

    }


   getContainerStyle  = () => {
      return{
          position: 'fixed-bottom',
          border:'3px solid black',
          backgroundColor: '#ffffff',
          margin: '0px',
        
      
        
      }
  }

  getFBLogoStyle  = () => {
    return{

      position: 'fixed-bottom',
      top: '720px',
      bottom: '500px',
      left: '200px',
      right: '10px',
  
    }
  }

  getTwitterLogoStyle  = () => {
    return{

      position: 'fixed-bottom',
      top: '720px',
      bottom: '500px',
      left: '500px',
      right: '10px',
  
    }
  }
  
  getInstaLogoStyle  = () => {
    return{

      position: 'fixed-bottom',
      top: '720px',
      bottom: '200px',
      left: '700px',
      right: '10px',
  
    }
  }

  
  getlinkedinLogoStyle  = () => {
    return{

      position: 'fixed-bottom',
      top: '720px',
      bottom: '100px',
      left: '300px',
      right: '10px',
  
    }
  }




    render() 
    {
        return (

      <Table style = {this.getContainerStyle()}> 
              
         <th><img src = {facebookLogo} width = "34px" id = "facebookLogo" style = {this.getFBLogoStyle()}></img> </th>
         <th><img src = {twitterlogo} width = "34px" id = "twitterLogo" style = {this.getTwitterLogoStyle()}></img></th>
         <th><img src = {instagramlogo} width = "34px" id = "instagramlogo" style = {this.getInstaLogoStyle()}></img></th>
         <th><img src = {linkedinlogo} width = "50px" id = "linkedinlogo" style = {this.getlinkedinLogoStyle()}></img></th>
                
      </Table>

      );
    }
 
 }

  
export default FooterComponent;