import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function RestOp({operate}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(operate);
  return (
    <>
      <Button variant="dark" onClick={handleShow}>
      operating hours
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>operating hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
      <ListGroup.Item variant="primary">Sunday : {operate.Sunday}</ListGroup.Item>
      <ListGroup.Item variant="secondary">Monday : {operate.Monday}</ListGroup.Item>
      <ListGroup.Item variant="success">Tuesday : {operate.Tuesday}</ListGroup.Item>
      <ListGroup.Item variant="danger">Wednesday : {operate.Wednesday}</ListGroup.Item>
      <ListGroup.Item variant="warning">Thursday : {operate.Thursday}</ListGroup.Item>
      <ListGroup.Item variant="info">Friday : {operate.Friday}</ListGroup.Item>
      <ListGroup.Item variant="light">Saturday : {operate.Saturday}</ListGroup.Item>
    </ListGroup>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default RestOp
