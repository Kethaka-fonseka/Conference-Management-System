import React from "react";
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from "react-icons/fa";
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'User',
        path:'/user-management',
        icon: <IoIcons.IoMdPeople/>,
        cName: 'nav-text'
    },
    {
        title: 'Conference',
        path:'/admin/conference-management',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },

    {
        title: 'Template',
        path:'/admin/template-management',
        icon: <AiIcons.AiFillCodeSandboxSquare/>,
        cName: 'nav-text'    
    },

    {
        title: 'Requests',
        path:'/admin/request-management',
        icon: <FaIcons.FaCartPlus/>,
        cName: 'nav-text'    
    },



    {
        title: 'Support',
        path:'admin/support-management',
        icon: <FaIcons.FaEnvelopeOpenText/>,
        cName: 'nav-text'    
    },


]