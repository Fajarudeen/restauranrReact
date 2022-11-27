import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";

function Restaurantcard({ restaurant }) {
    console.log(restaurant);
    return (
        <Link style={{textDecoration:"none",color:"white"}} to={`view-restaurant/${restaurant.id}`}>
            <Card className="mb-3">
                <Card.Img variant="top" className="p-2" src={restaurant.photograph} />
                <Card.Body>
                    <Card.Title>{restaurant.name}</Card.Title>
                    <Card.Text>
                        {restaurant.neighborhood}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default Restaurantcard;
