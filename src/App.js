import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './screens/Home';
import Projects from './screens/Projects';
import About from './screens/About';
import styles from './assets/mystyle.module.css';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function App() {
  return (
    <Router>
      <div className={styles.main}>
        <div className={styles.circle1} />
        <div className={styles.circle2} />
        <div className={styles.glass}>
        <div className={styles.navbar}>          
        <div className={styles.logo}><Link className={styles.link} to="/">AD Enerji Mühendislik </Link></div>
          <ul >
            <li >
              <Link  className={styles.link}to="/dashboard">Projeler</Link>
            </li>
            <li >
              <Link className={styles.link} to="/about">Hakkımızda</Link>
            </li>
            <li >
              <Link className={styles.link} to="/">Ana Sayfa</Link>
            </li>
          </ul>
        </div>

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Projects />
          </Route>
        </Switch>
        </div>
        
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.


