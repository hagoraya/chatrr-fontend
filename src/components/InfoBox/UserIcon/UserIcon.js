import React from 'react'

import './UserIcon.css'

export default function UserIcon({ name }) {
    var initials = name.match(/\b\w/g) || [];
    initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();

    return (
        <div className="avatar-circle">
            <span className="initials">{initials}</span>
        </div>
    )
}
