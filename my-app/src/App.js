import React from 'react';

import './App.css';

import { Button } from 'reactstrap';

import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

//----------------------Component Imports--------------------------------------
import NavigationComponent from './components/NavigationComponent';
import FooterComponent from './components/FooterComponent';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Welcome from './components/Welcome';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='App'>
        <NavigationComponent />

        <header className='App-header'>
          <Router>
            <Switch>
              <Route exact path='/' component={Welcome} />
              <Route path='/About' component={About} />
              <Route path='/Portfolio' component={Portfolio} />
              <Route path='/Services' component={Services} />
              <Route path='/Contact' component={Contact} />
            </Switch>
          </Router>
        </header>

        <div className='App-footer'>
          <FooterComponent />
        </div>
      </div>
    );
  }
}

export default App;
