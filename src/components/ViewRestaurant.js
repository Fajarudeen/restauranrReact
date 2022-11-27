import React,{useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Image} from 'react-bootstrap';
import RestOp from "./RestOp";
import RestReviews from "./RestReviews";
import { useDispatch, useSelector } from 'react-redux';


function ViewRestaurant() {
    const params = useParams()
    console.log(params.id);

    const [allRestaurants, setRestaurant] = useState([])

    // function to call api to get all restaurant.json
    const getRestaurant = async () => {
        await fetch('/db.json')
            .then((data) => {
                data.json()
                    .then((result) => {
                        setRestaurant(result.restaurants)
                    })
            })
    }
    useEffect(() => {
      // getRestaurant()
  },[])
  const result=useSelector(state=>state.restaurantReducer)
  const {restaurantList}=result


  const viewRest=restaurantList.find(item=>item.id==params.id)
  console.log(viewRest);


  return (
    <>
    {
      viewRest?(
        <Row className='p-3'>
      <Col lg={3}>
      <Image src={viewRest.photograph} fluid/>
      </Col>
      <Col>
        <p>Id: {viewRest.id}</p>
        <h1>{viewRest.name}</h1>
        <h5>{viewRest.cuisine_type}</h5>
        <h6>{viewRest.neighborhood}</h6>
        <h6>{viewRest.address}</h6>
        <RestOp operate={viewRest.operating_hours}/>
        <br></br>
        <RestReviews reviews={viewRest.reviews}/>
      </Col>
    </Row>
      ):'null'
    }
    </>
  )
}

export default ViewRestaurant
