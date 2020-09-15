import React from 'react'

import './InfoBar.css'
import closeIcon from './../../Assets/icons/closeIcon.png'
import onlineIcon from './../../Assets/icons/onlineIcon.png'


export default function InfoBar({ room }) {
    return (
        <div className="infobar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" src={onlineIcon} alt="Online"></img>
                <h3>{room}</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/"><img src={closeIcon} alt="Close"></img></a>
            </div>
        </div>
    )
}
