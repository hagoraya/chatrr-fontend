import React, { useState, useEffect } from 'react'
import queryString from 'query-string' //Retrieve data from url 
import io from 'socket.io-client'

import './Chat.css'

import InfoBar from './../InfoBar/InfoBar'

let socket;


//Location props from React which is the url
const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const ENDPOINT = 'localhost:5000'


    useEffect(() => {
        const { name, room } = queryString.parse(location.search)

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        //Sending {name, room} and callback funtion () to sever
        socket.emit('join', { name, room }, () => {

        });

        //Unmounts component
        return () => {
            socket.emit('disconnect');
            socket.off();
        }

    }, [ENDPOINT, location.search]) //Only updates when ENDPOINT or location.search change


    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]); //Add the message to the messages array
        })
    }, [messages])

    //Function of sending messages
    const sendMessage = (event) => {
        event.preventDefault()

        if (message) {
            socket.emit('sendMessage', message, () => {
                setMessage('');
            })
        }
    }

    console.log(message, messages);

    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room} />
                <input value={message} onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null} />
            </div>
        </div>
    )
}

export default Chat