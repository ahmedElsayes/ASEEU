import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Notespage from "./Notespage";
import About from "./About";
import Mainform from "./loging_files/Mainform";


function App() {
  return (
    <div>
      <Header />
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Notes editing</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/register">Registeration</Link>
            </li>
          </ul>

          <hr />

          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <Switch>
            <Route exact path="/">
              <Notespage />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/register">
              <Mainform />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;