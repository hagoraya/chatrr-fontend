import React, { useState, useEffect } from 'react'
import queryString from 'query-string' //Retrieve data from url 
import io from 'socket.io-client'

import './index.css'


let socket;


//Location props from React which is the url
const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const ENDPOINT = 'localhost:5000'


    useEffect(() => {
        const { name, room } = queryString.parse(location.search)

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        socket.emit('join', { name, room })

    }, [ENDPOINT, location.search]) //Only updates when ENDPOINT or location.search change


    return (
        <h1>Chat</h1>
    )
}

export default Chat