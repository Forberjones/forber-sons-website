import React from 'react';
import services from '../data/services';

const Services = () => (
  <section id="services" className="py-5 bg-light">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 text-center my-4">
          <h2 className='our-services-title'>Our Services</h2>
          <p className="lead">We provide a wide range of electrical services to meet your needs, from maintenance and installations to fault finding and design. Hover over our comprehensive offerings below.</p>
        </div>
      </div>
      <div className="row justify-content-center">
        {services.map((service, index) => (
          <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card service-card">
              <div className="card-image-wrapper">
                <img src={service.image} alt={service.title} className="card-img-top service-image" />
              </div>
              <div className="overlay">
                <h3 className="title">{service.title}</h3>
                <p className="description" dangerouslySetInnerHTML={{ __html: service.description.replace(/\n/g, '<br/>') }}></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;