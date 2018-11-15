import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class DashboardNotifications extends Component {
    constructor(props) {
        super(props);
    }
    
    render (){
        const { 
            notificationBox,
            boxBackground,
            titleColor,
            linkColor,
            borderRadius,
            notPadding,
            notBackground,
            notMargin,
            notificationTitle,
            notificationContent1,
            notificationContent2,
            contentColor,
            contentDisplay,
            notificationHover
        } = this.props;
        return (
            <div className="bottomright-box">
                <div className={`profile-notification ${notificationBox}`} style={{background: boxBackground, }}>
                    <div className="main-title" style={{color: titleColor}}><span>Recent Notifications</span><span><Link to="" style={{color: linkColor}}>See all >></Link></span></div>
                    <Link to="/" className="notificationLink">
                        <div className={`notification ${notificationHover}`} style={{
                            borderRadius: borderRadius, 
                            padding: notPadding, 
                            background: notBackground, 
                            margin: notMargin
                            }}>
                            <div className="not-title"><span>{notificationTitle}</span><span className="date">21-08-2018 12:35AM</span></div>
                            <div className="not-content">
                                <div style={{color: contentColor, display: contentDisplay}}>{notificationContent1}</div>
                                <div style={{display: contentDisplay}}>{notificationContent2}</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/" className="notificationLink">
                        <div className={`notification ${notificationHover}`} style={{
                            borderRadius: borderRadius, 
                            padding: notPadding, 
                            background: notBackground, 
                            margin: notMargin
                            }}>
                            <div className="not-title"><span>{notificationTitle}</span><span className="date">21-08-2018 12:35AM</span></div>
                            <div className="not-content">
                                <div style={{color: contentColor, display: contentDisplay}}>{notificationContent1}</div>
                                <div style={{display: contentDisplay}}>{notificationContent2}</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/" className="notificationLink">
                        <div className={`notification ${notificationHover}`} style={{
                            borderRadius: borderRadius, 
                            padding: notPadding, 
                            background: notBackground, 
                            margin: notMargin
                            }}>
                            <div className="not-title"><span>{notificationTitle}</span><span className="date">21-08-2018 12:35AM</span></div>
                            <div className="not-content">
                                <div style={{color: contentColor, display: contentDisplay}}>{notificationContent1}</div>
                                <div style={{display: contentDisplay}}>{notificationContent2}</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/" className="notificationLink">
                        <div className={`notification ${notificationHover}`} style={{
                            borderRadius: borderRadius, 
                            padding: notPadding, 
                            background: notBackground, 
                            margin: notMargin
                            }}>
                            <div className="not-title"><span>{notificationTitle}</span><span className="date">21-08-2018 12:35AM</span></div>
                            <div className="not-content">
                                <div style={{color: contentColor, display: contentDisplay}}>{notificationContent1}</div>
                                <div style={{display: contentDisplay}}>{notificationContent2}</div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
};

export default DashboardNotifications;


