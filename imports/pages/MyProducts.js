import React from 'react'
import {Button, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { withTracker } from 'meteor/react-meteor-data'
import Products from '/imports/api/products/products'
import Product from '/imports/components/product'



function MyProducts(props){
    return(
        <Container>
            <h1>Mes produits</h1>
            <Link to="new_product">
                <Button color="green" icon="plus" content="Ajouter Produit" />
            </Link>
            {!props.loading && props.products.map(product => {
            return <Product product={product} />
            })}
        </Container>
    )
}

export default withTracker(() => {
    const products_pub = Meteor.subscribe('products.me')
    const loading = !products_pub.ready()
    const products = Products.find({seller: Meteor.userId()}).fetch()

    return{
        loading,
        products
    }
})(MyProducts)
    