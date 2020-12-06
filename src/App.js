import React from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom'
import Education from './Education';
import Experience from './Experience';
import Contact from './Contact';


function App() {
  return (
    <div id="container">

      <header>
        <div className="name">HeeZJee.</div>
        <div className="quoteoftheday">Shinzou Wo Sasageyo</div>
      </header>

      <article>

        <div className="quote">
          <h1>A Entrepreneur, who can develop Web and Mobile Appilcation and solve your problem.</h1>
        </div>

        <div className="quoteby">
          <h4>Hafeez Ghanchi</h4>
        </div>

      </article>

      <footer>

        <div className="skills">
          <h6>Menu</h6>
          <ul>

            <li><Link to='/'>Education</Link></li>
            <li><Link to='/experience'>Professional Experience</Link></li>
            <li><Link to='contact'>Contact</Link></li>
          </ul>
        </div>
        <Switch>
          <Route exact path='/' component={Education} />
          <Route exact path='/experience' component={Experience} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </footer>
    </div>
  );
}

export default App;


