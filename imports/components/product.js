import React, { Fragment } from 'react'
import { Card, Button } from 'semantic-ui-react'

function Product({product, ...props}){
    return(
        <Card header={product.name}
        description={product.description}
        meta={product.price}
        image={product.image_url}
        extra={
            <Fragment>
                <Button>Acheter</Button>
                {product.seller == Meteor.userId() &&
                    <Button color="red">Supprimer</Button>
                }
            </Fragment>
        }
        />
        
    )
}

export default Product  