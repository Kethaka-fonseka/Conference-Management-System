import React from 'react';
import NavBar from "../components/Header/NavBar";
import Vid from "../components/Header/Vid";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../components/Guest Pages/Home/Home";
import About from "../components/Guest Pages/About";
import Contact from "../components/Guest Pages/Contact";
import Login from "../components/Guest Pages/Authentications/Login";
import Signup from "../components/Guest Pages/Authentications/Signup";

function MainRoutes() {
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
                <Route path="/signup" component={Signup}/>
            </Switch>

        </Router>
    );
}

export default MainRoutes;