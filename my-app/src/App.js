import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          CH Technology Solutions
        </p>

       
        
        
<div class="container">
  <div class="row">
    <div class="col-sm">
    <a className= "webServiceTitle">
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

export default App;
