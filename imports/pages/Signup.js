import React, {useState} from 'react'
import { Form, Button, Container } from 'semantic-ui-react'
import { Accounts } from 'meteor/accounts-base'
import { Link } from 'react-router-dom'

function Signup(props){
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const signup = () => {

        Accounts.createUser({email, password}, (err) => {
            if(err){
                alert("err.message")
            }else{
                console.log('Utilisateur créé !!!')
            }
        })
    }

    return(
        <Container>
            <h1>Inscrivez vous !</h1>
            <Form onSubmit ={signup} >
                <Form.Input value={email} onChange={(e, {value}) => setEmail(value)} required type="email" placeholder="ex: toto@yopmail.fr"/>
                <Form.Input onChange={(e, {value}) => setPassword(value)} required type="password" placeholder="mot de passe"/>
                <Button disabled={!email || !password} color="blue">M'inscrire</Button>
                <Link to="/signin">
                   <Button size="mini">J'ai deja un compte</Button>
                </Link>
            </Form>
        </Container>
    
    )
}

export default Signup