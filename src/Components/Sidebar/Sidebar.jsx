import { AttachMoney, BarChart, ChatBubbleOutline, DynamicFeed, LineStyle, MailOutline, PermIdentity, Report, Storefront, Timeline, TrendingUp, WorkOutline } from '@material-ui/icons';
import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom'


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Dashboard
                    </h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItems active">
                         <LineStyle className="sidebarIcon"/>
                         Home   
                        </li>
                        <li className="sidebarListItems">
                         <Timeline className="sidebarIcon"/>
                         Analytics   
                        </li>
                        <li className="sidebarListItems">
                         <TrendingUp className="sidebarIcon"/>
                         Sales   
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Quick Menu
                    </h3>
                    <ul className="sidebarList">
                        <Link to="users">
                            <li className="sidebarListItems ">
                            <PermIdentity className="sidebarIcon"/>
                            Users   
                            </li>
                        </Link>
                        <Link to="products">
                            <li className="sidebarListItems">
                            <Storefront className="sidebarIcon"/>
                            Products   
                            </li>
                        </Link>
                        <li className="sidebarListItems">
                         <AttachMoney className="sidebarIcon"/>
                         Transactions   
                        </li>
                        <li className="sidebarListItems">
                         <BarChart className="sidebarIcon"/>
                         Reports   
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Notifications
                    </h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItems active">
                         <MailOutline className="sidebarIcon"/>
                         Mail   
                        </li>
                        <li className="sidebarListItems">
                         <DynamicFeed className="sidebarIcon"/>
                         Feedback   
                        </li>
                        <li className="sidebarListItems">
                         <ChatBubbleOutline className="sidebarIcon"/>
                         Messages   
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Staff
                    </h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItems active">
                         <WorkOutline className="sidebarIcon"/>
                         Manage   
                        </li>
                        <li className="sidebarListItems">
                         <Timeline className="sidebarIcon"/>
                         Analytics   
                        </li>
                        <li className="sidebarListItems">
                         <Report className="sidebarIcon"/>
                         Reports   
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
