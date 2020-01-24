import React from 'react'
import { withTracker } from 'meteor/react-meteor-data' 
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

function AdminUsers(props){
    return(
        <div>
            <h1>gestion des utilisateurs</h1>
            {!props.loading && props.users.map(user => {
            return(
                <div>
                    {user.emails[0].address}
                    <Link to={"/catalog/" + user._id}>
                        <Button>Catalogue</Button>
                    </Link>
                </div>
            )
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