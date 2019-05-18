import React from 'react';

import './App.css';
import { Button } from 'reactstrap';



//----------------------Component Imports--------------------------------------
import NavigationComponent from './components/NavigationComponent';
import FooterComponent from './components/FooterComponent';
import About from './components/views/About';
import Contact from './components/views/Contact';
import Portfolio from './components/views/Portfolio';
import WebDev from './components/views/WebDev';
import Welcome from './components/Welcome';

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


     
     <Router>
     
     <Switch>
         {/* <Route exact path="/" component={} /> */}
         <Route  path="/Welcome" component={Welcome} /> 
          <Route path="/About" component={About} />
         <Route path="/Portfolio"   component={Portfolio} />
         <Route path="/WebDev"  component={WebDev} />
         <Route path="/Contact"  component={Contact} />
         
     </Switch>

    </Router>  

      <header className="App-header">
  





      </header>




      <div className = "App-footer">
        <FooterComponent/>
      </div>

    </div>
 );
}
}

export default App;
