import React from 'react'
import ReactDOM from 'react-dom'
import App from '/imports/routers/App'

console.log('client : Meteor est lancé')

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
