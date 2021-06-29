import React from 'react';
import NavBar from "./components/Header/NavBar";

import {BrowserRouter as Router, Switch, Route}from 'react-router-dom'
//importing guest pages
import About from "./components/Guest Pages/About";
import Contact from "./components/Guest Pages/Contact";
import Home from "./components/Guest Pages/Home/Home";
import Vid from "./components/Header/Vid";
import Login from "./components/Guest Pages/Authentications/Login";

function App() {
    return (
     <Router>
         <NavBar/>
         <Vid/>
         <br/>
         <Switch>
             <Route path="/" exact component={Home}/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
             <Route path="/login" component={Login}/>
         </Switch>

     </Router>
    );


}

export default App;
