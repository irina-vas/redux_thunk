import React from 'react';
import './App.css';
import Header from './components/Header';
import Posts from './components/Posts';
import Users from './components/Users';
import { BrowserRouter as Router, Route, Routes, Switch} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="wrapper_main">
        <Header />
      </div>
      <Switch>
        <Route exact path="/">HOME</Route>
        <Route exact path="/users" component={ Users }></Route>
        <Route exact path="/posts" component={ Posts }></Route>
      </Switch>
    </Router>
  );
}

export default App;
