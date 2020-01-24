import React, { useState } from 'react'
import { Form, Container, Button } from 'semantic-ui-react'


function NewProduct(props){
    const [product, setProduct] = useState({})

    const create_product = () =>{
        Meteor.call('products.create', product, (err, data) => {
            if(err){
                alert(err.message)
            }else{
                alert('Produit créé')
                console.log(data)
            }
        })
    }

    return(
        <Container>
            <h1>Création d'un produit</h1>
            <Form onSubmit={create_product}>
                <Form.Input
                type="text" 
                label="Nom du produit"
                value={product.name}
                onChange={(e, {value}) => setProduct({ ...product, name: value})}
                />
                <Form.Input
                type="number" 
                label="Prix"
                value={product.prix}
                onChange={(e, {value}) => setProduct({ ...product, price: value})}
                />
                <Button color="green" icon="plus" content="Créer un produit" />
            </Form>
            
        </Container>
    
    )
}

export default NewProduct