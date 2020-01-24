import React, { useState } from 'react'
import { Form, Container, Button } from 'semantic-ui-react'


function NewProduct(props){
    const [product, setProduct] = useState({})
    return(
        <Container>
            <h1>Création d'un produit</h1>
            <Form>
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
            </Form>
            
            <Button color="green" icon="plus" content="Créer un produit" />
        </Container>
    
    )
}

export default NewProduct