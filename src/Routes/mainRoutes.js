import React from 'react';
import NavBar from "../components/Header/NavBar";
import Vid from "../components/Header/Vid";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../components/Guest Pages/Home/Home";
import About from "../components/Guest Pages/About";
import Contact from "../components/Guest Pages/Contact";
import Login from "../components/Guest Pages/Authentications/Login";
import Signup from "../components/Guest Pages/Authentications/Signup";
import Keynotes from "../components/Guest Pages/KeyNotes/keynotes";
import AdminNav from "../components/admin/AdminNav";
import RequestManagement from "../components/admin/Request Managment/RequestManagement";
import TemplateManagement from "../components/admin/Template Managment/TemplateManagement";
import UserManagement from "../components/admin/User Management/UserManagement";
import ConferenceManagement from "../components/admin/Conference Management/ConferenceManagement";
import AllNav from "../components/admin/AllNav";
import SupportManagment from "../components/admin/Support Management/SupportManagment";


function MainRoutes() {

    return (
        <Router>
            <AllNav/>
            <Vid/>
            <br/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/keynotes" component={Keynotes}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={Signup}/>
                <Route path='/admin/template-management' component={TemplateManagement} />
                <Route path='/admin/request-management' component={RequestManagement} />
                <Route path='/admin/conference-management' component={ConferenceManagement} />
                <Route path='/admin/user-management' component={UserManagement} />
                <Route path='/admin/support-management' component={SupportManagment} />
            </Switch>

        </Router>
    );
}

export default MainRoutes;