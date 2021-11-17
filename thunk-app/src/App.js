import React from 'react';
import './App.css';
import Header from './components/Header';
import Posts from './components/Posts';
import Users from './components/Users';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import User from './components/User';
import PostOfUser from './components/PostOfUser';



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
        <Route exact path="/users/:id" component={ User }></Route>
        <Route exact path="/posts/:id" component={ PostOfUser }></Route>
      </Switch>

    </Router>
  );
}

export default App;
