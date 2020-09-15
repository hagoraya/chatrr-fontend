import React from 'react'
import { Popup } from 'semantic-ui-react'


import './UserIcon.css'

export default function UserIcon({ name }) {
    var initials = name.match(/\b\w/g) || [];
    initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();

    return (
        <div>
            <Popup content={name} trigger={<div className="avatar-circle">
                <span className="initials">{initials}</span>
            </div>} />
        </div>

    )
}
