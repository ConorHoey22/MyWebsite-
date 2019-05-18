import React, {Component , Fragment} from 'react';

import image from './homepage-Laptop.jpg';

import { Button } from 'reactstrap';
class Welcome extends React.Component
{
  constructor(props) {
    super(props);
  

  }




getBackground  = () => {
    return{
        backgroundColor: '#001e4f'
    }
}


getContainerStyle  = () => {
    return{
        display: 'flex',
    
    }
}

getTextStyle  = () => {
    return{
        
     color:'#ffffff'
    }
}

getImageText = () => {
  return {
    display: 'fixed-center',
    top: '100px',
    right:'100px',   
    color: '#FF0000',
    width: '100%',
    height: '100%',
    }


}  

getImageStyle = () => {
  return {
    
    width: '100%',
    height: '100%',
  
    }


}  


  render() {
  return (
    <div className = "image" style = {this.getContainerStyle()}>

   


       
<img src = {image} width = "1350px" height = "650px" style = {this.getImageStyle()}></img>
 
    
    <div className="centered" style = {this.getImageText()}>
      <h3>CH Technology</h3>
      <p>Web development, Graphic Design and other IT services</p>
      <Button>Learn more</Button>
    </div>

</div>






 );
}
}

export default Welcome;
