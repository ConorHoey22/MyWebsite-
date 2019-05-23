import React, {Component} from 'react';


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
   
 
          // margin: '0px',

          fontsize: '1px',
          backgroundColor: '#ffffff',
        
      
        
      }
  }

  getFBLogoStyle  = () => {
    return{

      position: 'absolute',
      top: '650px',
      bottom: '200px',
      left: '550px',
      right: '10px',
  
    }
  }

  getTwitterLogoStyle  = () => {
    return{

  
      position: 'absolute',
      top: '650px',
      bottom: '200px',
      left: '610px',
      right: '10px',
  
    }
  }
  
  getInstaLogoStyle  = () => {
    return{


      position: 'fixed-bottom',
      top: '545px',
      bottom: '900px',
      left: '700px',
      right: '10px',
  
    }
  }

  
  getlinkedinLogoStyle  = () => {
    return{

      position: 'fixed-bottom',
      top: '559px',
      bottom: '200px',
      left: '800px',
      right: '10px',
    }
  }




    render() 
    {
        return (
<div className = "footer" style = {this.getContainerStyle()}>

     <div className = "contactLinks">

     <Table>
  <thead>
    <tr>
      <th class = "text-left">Follow us!</th>
      <th class = "text-right">Contact us!</th>
    </tr>
  </thead>

  <tbody>
    <tr>

      <td class = "text-left"><i class="fab fa-facebook fa-2x" href =""></i> Facebook   &nbsp;&nbsp;&nbsp;&nbsp;    
      <i class="fab fa-twitter fa-2x" href =""></i> Twitter   
      <br></br> 
      <br></br>
      <i class="fab fa-instagram fa-2x" href =""></i> Instagram &nbsp;&nbsp;&nbsp;&nbsp;   
      <i class="fab fa-linkedin fa-2x" href =""> </i> Linkedin

        
      </td>
      <td class = "text-right">Need a website or have an app idea? 
      <br></br> 
      <br></br>
      Send us a message one of our social medias or by email!
      <br></br> 
      <br></br>
      <i class="fas fa-envelope fa-2x"></i> CHTech@outlook.com</td>
    </tr>

  </tbody>
</Table>

    </div>

      <div className = "footerContent" style = {this.getContainerStyle()}>
{/* MAY NEED  UPDATE THESE DETIALs , rights etc , need to research */}
          <p>© 2019 CH Technology - All Rights Reserved </p>

          <p>Made By ***, registered as a company in the United Kingdom, company registration number ******</p>     
      </div>

  </div>


      );
    }
 
 }

  
export default FooterComponent;