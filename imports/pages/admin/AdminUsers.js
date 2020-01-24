import React from 'react'
import { withTracker } from 'meteor/react-meteor-data' 


function AdminUsers(props){
    return(
        <div>
            <h1>gestion des utilisateurs</h1>
            {!props.loading && props.users.map(user => {
            return <p>{user.emails[0].address}</p>
            })}
        </div>

    
    )
}

export default withTracker(() => {
    // souscription a la publication pour pouvoir acceder aux données 
    const users_pub = Meteor.subscribe('users.all')

    const loading = !users_pub.ready()
    const users = Meteor.users.find().fetch()
    return{
        loading,
        users
    }
})(AdminUsers)