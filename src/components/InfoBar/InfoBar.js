import React from 'react'

import './InfoBar.css'
import closeIcon from './../../Assets/icons/closeIcon.png'
import onlineIcon from './../../Assets/icons/onlineIcon.png'


export default function InfoBar({ room }) {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" src={onlineIcon} alt="online icon" />
                <h3 className="room-name">{room}</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/"><img src={closeIcon} alt="close icon" /></a>
            </div>
        </div>
    )
}
