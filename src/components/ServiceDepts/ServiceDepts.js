import React from "react";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Service from "../service/Service";

import './ServiceDept.css'

const ServiceDepts = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      
        <div className="mt-2">
                <Row>
                    {services.map((service) => (
                    <Service key={service.id} service={service}></Service>
                    ))}
                </Row>
        </div>
           
        
    </div>
  );
};

export default ServiceDepts;
