import React, {useState} from 'react';
import {Link} from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import {Button, Nav, Navbar} from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';
import {SidebarData} from "./sidebar";
import '../../stylesheets/AdminNavBar.css';
import NavBar from "../Header/NavBar";

function AdminNav() {

    const [sideBar,setSideBar] = useState(false)

    const showSideBar = () => setSideBar(!sideBar)

    return (
        <>

               <Navbar className={"nav-bar"} sticky="top" variant="dark">
                   <MenuIcon className="mr-sm-2"   fontSize={"large"} style={{color:"white"}} onClick={showSideBar}/>{' '}
                   <Navbar.Brand href="/">ICAF ADMIN PANEL</Navbar.Brand>
                    {/*<Nav.Link to="#" className="menu-bars">*/}
                    {/*    <FaIcons.FaBars onClick={showSideBar}/>*/}
                    {/*</Nav.Link>*/}
                   <Nav className={"mr-auto"}>

                   </Nav>
                    <Button className="mr-sm-2" variant={"outline-light btn-1"}  href="/">Log Out</Button>{' '}

               </Navbar>

                <Nav className={sideBar ? 'nav-menu active' : 'nav-menu'}>



                    <ul className='nav-menu-items' onClick={showSideBar}>
                        {SidebarData.map((item, index)=>{
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </Nav>

        </>
    );
}

export default AdminNav;