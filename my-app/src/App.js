import React from 'react';
import logoy from './homepage-Laptop.jpg';
import './App.css';
import { Button } from 'reactstrap';



//----------------------Component Imports--------------------------------------
import NavigationComponent from './components/NavigationComponent';


//-----------------------Router Imports----------------------------------------
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  IndexRoute ,
  Redirect, 

} from 'react-router-dom'


class App extends React.Component
{
  constructor(props) {
    super(props);
  

  }
  render() {
  return (
    <div className="App">
     <NavigationComponent/>
      <header className="App-header">
      <div className = "image">

        <p>
          CH Technology Solutions
        </p>

       </div>
        
          
  <div class="container">
    <div class = "row">
      <div class="col-sm">
      Services
      </div>
  </div>
    <div class="row">
      <div class="col-sm">
      <a className= "webServices">
            Web Development
            </a>
            <br></br>
            <Button>Click Here</Button>
      </div>
    <div class="col-sm">
    <a className= "GraphicContainer">
        Graphic Design
        </a>
        <br></br>
        <Button>Click here</Button>
    </div>
  
  </div>
</div>






      </header>
    </div>
 );
}
}

export default App;
