import React, {Component , Fragment} from 'react';

import image from './homepage-Laptop.jpg';

import './welcomePage.css';

// bugs
//Content goes on to the Nav bar on scroll should be underneath it 

import { Button } from 'reactstrap';

// This is the homepage. This should be the first website - Welcome Component
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

getBorderStyle  = () => {
    return{
        
     
    }
}

getImageText = () => {
  return {
   position: 'absolute',
    top: '100px',
    left:'140px',   
    color: '#000000',
    width: '30%',
    height: '60%',
 
  }


}  

getImageStyle = () => {
  return {
    
    width: '100%',
    height: '95%',
  
    }

  }


  render() {
  return (

     <div className = "welcomeImage"  id = "welcome" style = {this.getContainerStyle()}>
       <img src = {image}   style = {this.getImageStyle()}></img>
      
          <div className="text" style = {this.getImageText()}>
    
               <h3 id = "companyName">CH Technology</h3>
               {/* Include Logo here better text image */}
               <h4>Web Development</h4>
               <p>Design, Development, Testing</p>
               <p>You are involved in each phase!</p>
              
               <p>Constant Communication / Regular Updates</p>
               <p> Customer Review Sessions </p>
        
               <Button>Learn more</Button>

         </div>

     </div>
 );
}
}

export default Welcome;
