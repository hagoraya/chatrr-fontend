import React, { useState, useEffect } from 'react'
import queryString from 'query-string' //Retrieve data from url 
import io from 'socket.io-client'
import { useHistory } from 'react-router-dom'


import './Chat.css'

import InfoBar from './../InfoBar/InfoBar'
import Input from './../Input/Input'
import Messages from './../Messages/Messages'
import InfoBox from './../InfoBox/InfoBox'


let socket;


//Location props from React which is the url
const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const history = useHistory()
    const ENDPOINT = 'localhost:5000'


    useEffect(() => {
        const { name, room } = queryString.parse(location.search)

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        //Sending {name, room} and callback funtion () to sever
        socket.emit('join', { name, room }, (error) => {
            if (error) {
                alert(error)
                history.push('/')
            }
        });

        //Unmounts component
        return () => {
            socket.emit('disconnect');
            socket.off();
        }

    }, [ENDPOINT, history, location.search]) //Only updates when ENDPOINT or location.search change


    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]); //Add the message to the messages array
        })

        socket.on('roomData', ({ users }) => {
            setUsers(users);
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


    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBox users={users} />
                <InfoBar room={room} />
                <Messages messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
        </div>






    )
}

export default Chat