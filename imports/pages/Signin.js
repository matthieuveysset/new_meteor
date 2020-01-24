import React, {useState} from 'react'
import { Form, Button, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { withTracker } from 'meteor/react-meteor-data' 

function Signin(props){
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const signin = () => {
        Meteor.loginWithPassword(email, password)
    }
    const logout = () => {
        setPassword('')
        Meteor.logout()
    }

    return(
        <Container>
            <h1>Connectez vous</h1>
            {!props.current_user ?
            <Form onSubmit ={signin} >
                <Form.Input value={email} onChange={(e, {value}) => setEmail(value)} required type="email" placeholder="ex: toto@yopmail.fr"/>
                <Form.Input onChange={(e, {value}) => setPassword(value)} required type="password" placeholder="mot de passe"/>
                <Button disabled={!email || !password} color="blue">Me connecter</Button>
                <Link to="/signup">
                   <Button size="mini">Créer un compte</Button>
                </Link>
            </Form>
        :
        <div>
            <p>Vous etes deja connectés avec l'adresse {props.current_user.emails[0].address} </p>
            <Button onClick={logout} color="red">Se deconnecter</Button>
        </div>
            
        }
    
        </Container>
    )
}

export default withTracker(() =>{
    const current_user = Meteor.user()
    return{
        current_user
    }
})(Signin)