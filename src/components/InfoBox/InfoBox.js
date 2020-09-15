import React from 'react'

import UserIcon from './UserIcon/UserIcon'

import './InfoBox.css'

export default function InfoBox({ users }) {
    console.log(users)
    return (
        <div className="infoBox">
            {
                users
                    ? (
                        <div >
                            <div className="online-users">{
                                users.map(({ name }) => (
                                    <div className="icon" key={name}>
                                        <UserIcon name={name} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                    : null
            }
        </div>
    )
}
