import React from "react";
import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data.slice(0,6)));
    }, [])

  return (
    <div id="service">
      <h2 className="text-success">Service Departments</h2>

      <Row>
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </Row>
    </div>
  );
};

export default Services;
