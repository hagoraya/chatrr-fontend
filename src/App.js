import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css'


import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'



const App = () => {
    return (
        <Router>
            <Route path="/" exact component={Join}></Route>
            <Route path="/chat" component={Chat}></Route>
        </Router>
    )
}

export default App;