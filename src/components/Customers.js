import React from 'react';
import customers from '../data/customers';

const Customers = () => (
  <section id="customers" className="customers-section py-5">
    <div className="container text-center">
      <h2 className='customers-title'>Our Customers</h2>
      <p>We are privileged to have collaborated with numerous esteemed companies, showcasing our dedication to delivering exceptional service and fostering lasting partnerships.</p>
      <div className="scrolling-logos">
        <div className="logos-wrapper">
          {customers.map((customer, index) => (
            <div key={index} className="logo-container">
              <img src={customer.img} className="customer-logo" alt={customer.title} />
            </div>
          ))}
          {customers.map((customer, index) => (
            <div key={index} className="logo-container">
              <img src={customer.img} className="customer-logo" alt={customer.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Customers;