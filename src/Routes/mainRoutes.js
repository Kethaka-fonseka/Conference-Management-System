import React from 'react';
import NavBar from "../components/Header/NavBar";
import Vid from "../components/Header/Vid";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../components/Guest Pages/Home/Home";
import About from "../components/Guest Pages/About";
import Contact from "../components/Guest Pages/Contact";
import Login from "../components/Guest Pages/Authentications/Login";
import Signup from "../components/Guest Pages/Authentications/Login";
import Keynotes from "../components/Guest Pages/KeyNotes/keynotes";
import AdminNav from "../components/admin/AdminNav";
import RequestManagement from "../components/admin/Request Managment/RequestManagement";
import TemplateManagement from "../components/admin/Template Managment/TemplateManagement";
import ConferenceManagement from "../components/admin/Conference Management/ConferenceManagement";
import AllNav from "../components/admin/AllNav";
import SupportManagment from "../components/admin/Support Management/SupportManagment";

import StaffManagement from "../components/admin/User Management/Staff/Management";
import AddStaffMembers from "../components/admin/User Management/Staff/AddUsers";
import EditStaffMembers from "../components/admin/User Management/Staff/EditUsers";
import DeleteStaffMembers from "../components/admin/User Management/Staff/DeleteUsers";
import ContactStaffMembers from "../components/admin/User Management/Staff/Contact";

import UserManagement from "../components/admin/User Management/User/Management";
import DeleteUsers from "../components/admin/User Management/User/DeleteUsers";
import ContactUsers from "../components/admin/User Management/User/Contact";



function MainRoutes() {

    return (
        <Router>
            <AllNav/>
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
                <Route path='/admin/support-management' component={SupportManagment} />



                <Route path='/admin/staff-management' component={StaffManagement} />
                <Route path='/admin/staffmanagement/addmembers' component={AddStaffMembers} />
                <Route path='/admin/staff-management/editmembers/:id' component={EditStaffMembers} />
                <Route path='/admin/staff-management/deletemembers/:id' component={DeleteStaffMembers} />
                <Route path='/admin/staff-management/contactstaff/:id' component={ContactStaffMembers} />

                <Route path='/admin/user-management' component={UserManagement} />
                <Route path='/admin/user-management/deletemembers/:id' component={DeleteUsers} />
                <Route path='/admin/user-management/editmembers/:id' component={ContactUsers} />


            </Switch>
        </Router>

        
    );
}

export default MainRoutes;