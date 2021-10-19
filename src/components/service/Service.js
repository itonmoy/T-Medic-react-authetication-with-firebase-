import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {

    const {id,name,img,description} =service;

    return (
        <Col sm={12} md={6} lg={4}>
      
        <div className="m-2">
          <Card className="mx-auto pb-2" style={{ width: "21rem",backgroundColor:"lightcyan" }}>
            <Card.Img variant="top" className="img-fluid p-2 width" src={img} />
            <Card.Body className="my-1 py-1">
              <Card.Title>{name}</Card.Title>
            </Card.Body>
            <Card.Body className="my-1 py-1">
            
            </Card.Body>
            <p>{description}</p>
            <Link to={`/booking/${id}`}>
                <button className="btn btn-info">Details</button>
            </Link>
        
          </Card>
        </div>
      
    </Col>
    );
};

export default Service;