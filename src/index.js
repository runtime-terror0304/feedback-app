import React from 'react'
import ReactDom from 'react-dom'
// this is the global CSS file for the app.
import './index.css'
import App from './App'

ReactDom.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>, 
    document.getElementById('root')
)