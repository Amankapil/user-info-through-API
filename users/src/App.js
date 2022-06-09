import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

import Home from "./pages/Home";
import Post from "./pages/Post";
const App = () => {
  return (
    // <Router>
    //   <Switch>
    //     <Route exact path="/">
    //       <Home />
    //     </Route>
    //     <Route path="/Post/:email/:">
    //       <Post />
    //     </Route>
    //   </Switch>
    // </Router>
    <Router>
      <Switch>
        <div className="container border mt-4">

        <Route exact path="/" component={Home} />
        <Route path="/post/:gender/" component={Post} />
        </div>
        {/* <Post/> */}
      </Switch>
    </Router>
  );
};

export default App;
