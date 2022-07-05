import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap'
import LoadComments from './LoadComments.js'

const DishDetail = (props) => {
    return (
        <div>
            <Card>
                <CardImg src = {props.dish.image} alt = {props.dish.name} />
                    <CardBody style = {{ textAlign: 'left' }}>
                        <CardTitle><h5>{props.dish.name}</h5></CardTitle>
                        <CardText>
                            <p>{props.dish.description}</p>
                            <p>{props.dish.price}/-</p>

                            </CardText>
                            <hr />
                            <LoadComments comments={props.dish.comments} />
                    </CardBody>
            </Card>

        </div>
    )
}

export default DishDetail