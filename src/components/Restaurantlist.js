import React, { useState, useEffect } from 'react'
import  Restaurantcard  from "./Restaurantcard";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RestaurantListAction } from '../actions/restaurantListAction';
import { useDispatch, useSelector } from 'react-redux';

function Restaurantlist() {
    // create state to hold all restaurant

    const dispatch=useDispatch()
    const result=useSelector(state=>state.restaurantReducer)
    const {restaurantList}=result
    
    useEffect(() => {
        //getRestaurant()
        dispatch(RestaurantListAction())
    }, [])

    return (
        <Row>
            {
              restaurantList.map(item=>(
                <Col sm={12} md={6} lg={4} xl={3} ><Restaurantcard restaurant={item}/></Col>
              ))  
            }
        </Row>
    )
}

export default Restaurantlist