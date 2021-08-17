import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import React from 'react';
import "./Topbar.css";
import avatar from '../../image/avatar1.png';

function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <div className="logo">AdminPanel</div>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <div className="topIconBag">2</div>
                    </div>
                    <div className="topbarIconContainer">
                        <Language/>
                        <div className="topIconBag">2</div>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings/>
                    </div>
                    <img src={avatar} alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}

export default Topbar;
