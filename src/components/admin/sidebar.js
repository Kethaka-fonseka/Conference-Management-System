import React from "react";
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from "react-icons/fa";
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'User',
        path:'',
        icon: <IoIcons.IoMdPeople/>,
        cName: 'nav-text',
        subNav: [
            {
                title: 'User Management',
                path: '/admin/user-management',
                icon: <IoIcons.IoIosPaper />,
                cName: 'nav-text',
            },
            {
                title: 'Staff Management',
                path: '/admin/staff-management',
                icon: <IoIcons.IoIosPaper />,
                cName: 'nav-text',
            }
        ]
    },
    {
        title: 'Conference',
        path:'/admin/conferencemanagement',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },

    {
        title: 'Template',
        path:'/admin/templatemanagement',
        icon: <AiIcons.AiFillCodeSandboxSquare/>,
        cName: 'nav-text'    
    },

    {
        title: 'Requests',
        path:'/admin/requestmanagement',
        icon: <FaIcons.FaCartPlus/>,
        cName: 'nav-text'    
    },



    {
        title: 'Support',
        path:'/admin/supportmanagement',
        icon: <FaIcons.FaEnvelopeOpenText/>,
        cName: 'nav-text'    
    },


]