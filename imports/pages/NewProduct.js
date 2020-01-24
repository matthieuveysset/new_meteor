import React, { useState } from 'react'
import { Form, Container } from 'semantic-ui-react'

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
                onChange={(e, {value}) => setProduct({name: value, ...product})}
                />
                <Form.Input
                type="number" 
                label="Prix"
                value={product.prix}
                onChange={(e, {value}) => setProduct({price: value, ...product})}
                />
            </Form>
        </Container>
    
    )
}

export default NewProduct