import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {
  backgroundVideo,
  forberSonsLogo,
  niceicApprovedContractor25YearsImage,
  beforeAfterImageFixed,
  bsLogo,
  logo,
  iPafLogo,
  abrasiveWheelsLogo,
  niceicLogo,
  avettaLogo,
  asbestosAwarnessLogo,
  workingAtHeightLogo,
  setaLogo,
  inspectionLogo
} from './assets/imports';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Customers from './components/Customers';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div className="position-relative">
        <video autoPlay muted loop className="w-100">
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="position-absolute top-50 start-50 translate-middle text-center text-white bg-dark bg-opacity-50 p-3 rounded">
          <img src={forberSonsLogo} className="App-logo mb-3" alt="logo" />
          <div className="intro-text">
            <p className="video-top-line">Forber & Sons LTD</p>
            <p className="video-middle-line">Commercial and Industrial Electrical Installation</p>
            <p className='video-bottom-line'>Based in the North West</p>
          </div>
        </div>
      </div>

      {/* Heading Section */}
      <section className="heading-section py-5">
        <div className="container text-center">
          <h2>Welcome to Forber & Sons</h2>
          <p>Providing exceptional electrical services for over 25 years.</p>
          <div className="wrapper">
            <div className="link_wrapper">
              <a href="#contact">Contact Us</a>
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                  <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="expertise" className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4">
              <div className="expertise-box py-5 shadow-sm rounded">
                <h2 className="expertise-title">NICEIC Electrical Testing & Inspecting</h2>
                <br />
                <p className='expertise-information'>Forber & Sons Ltd has been an approved contractor with the NICEIC for over 25 years.</p>
                <p className='expertise-information'>We carry out fixed installation testing to BS7671:18+A2:2022 IEE (IET) Wiring Regulations standards.</p>
                <p className='expertise-information'>Our electrical engineers hold both City and Guilds 2381/2382 and 2391 electrical qualifications and are fully experienced in the inspection and testing of commercial and industrial premises.</p>
              </div>
            </div>
            <div className="col-md-5 text-center ">
              <img src={niceicApprovedContractor25YearsImage} alt="NICEIC Approved Contractor" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </section>

      <Services />
      <Customers />

      <section id="about-us" className="about-us-section py-5 text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4">
              <h2>About Us</h2>
              <p>Forber Electrical Services was established in 1998 and specialised in Electrical Installations. We became Forber & Sons LTD in 2017.</p>
              <p>The company has built up a large number of clients and works up and down the country on a wide variety of contracts.</p>
              <p>The company’s constant commitment is to complete all projects on time and within budget whilst providing quality workmanship and adhering to the highest standards of health and safety that are now placed on our industry.</p>
            </div>
            <div className="col-md-6">
              <img src={beforeAfterImageFixed} className="img-fluid rounded" alt="About Us" />
            </div>
          </div>
        </div>
      </section>

      <section id="why-choose-us" className="why-choose-us-section py-5 bg-dark text-white text-center">
        <div className="container">
          <h2 className='why-choose-us-title'>Why Choose Us?</h2>
          <p className='why-choose-us-subheading'>Our company offers a variety of services to meet your project's needs, from collaboration meetings all the way to ribbon-cutting and beyond. We believe that every project is unique and can customize our approach to fit your particular project.</p>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card">
                <img src={bsLogo} className="card-img-top" alt="18th Edition" />
                <div className="card-body">
                  <h3 className="card-title">18TH EDITION</h3>
                  <p className="card-text">Our Electricians are 18th edition certified, ensuring compliance with the latest electrical regulations for safe and efficient installations. </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <img src={inspectionLogo} className="card-img-top" alt="Inspection & Testing" />
                <div className="card-body">
                  <h3 className="card-title">INSPECTION & TESTING</h3>
                  <p className="card-text"> We adhere to the rigorous standards set by the NICEIC, utilizing their approved methods for verification and certification.  (Installation 1998) (Equipment 2009)</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <img src={iPafLogo} className="card-img-top" alt="iPaf" />
                <div className="card-body">
                  <h3 className="card-title">iPAF</h3>
                  <p className="card-text">Our Electricians have specialized training and certifications for safe and effective use of powered access equipment.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <img src={abrasiveWheelsLogo} className="card-img-top" alt="Abrasive Wheels" />
                <div className="card-body">
                  <h3 className="card-title">ABRASIVE WHEELS 2020</h3>
                  <p className="card-text">Our Electricians have specialized training and certification for the safe handling and use of abrasive wheels</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <img src={niceicLogo} className="card-img-top" alt="NICEIC" />
                <div className="card-body">
                  <h3 className="card-title">NICEIC CERTIFICATION</h3>
                  <p className="card-text">All our work is fully certified through the NICEIC so you can be rest assured any work is carried out to a high standard.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <img src={avettaLogo} className="card-img-top" alt="Avetta" />
                <div className="card-body">
                  <h3 className="card-title">AVETTA</h3>
                  <p className="card-text">We are certified by Avetta for maintaining stringent safety and quality standards in our operations.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <img src={asbestosAwarnessLogo} className="card-img-top" alt="Asbestos Awareness" />
                <div className="card-body">
                  <h3 className="card-title">ASBESTOS AWARENESS</h3>
                  <p className="card-text">Our Electricans have undergone training to raise awareness and ensure safe handling of asbestos in the workplace.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <img src={workingAtHeightLogo} className="card-img-top" alt="Working At Height" />
                <div className="card-body">
                  <h3 className="card-title">WORKING AT HEIGHT</h3>
                  <p className="card-text">Our Electricans have expert training and solutions for safe working practices at elevated heights.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <img src={setaLogo} className="card-img-top" alt="Certification 6" />
                <div className="card-body">
                  <h3 className="card-title">PAT TESTING</h3>
                  <p className="card-text">Our electricians are qualified to perform PAT testing. (This is offered alongside fire alarm and emergency light testing, not in isolation). </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section py-5 bg-light text-dark">
        <div className="container text-center">
          <h2 className="contact-subheading">Get in Touch</h2>
          <p className="lead">If you have any questions please don't hesitate to contact us.</p>
          <div className="contact-details mt-4">
            <p><a href="mailto:forberelectrical@gmail.com" className="contact-link">forberelectrical@gmail.com</a></p>
            <p>Main: 07770 565936</p>
            <p>Admin: 01744 670127</p>
          </div>
        </div>
      </section>

      <footer className="footer bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>Contact Us</h5>
              <p>If you have any questions please don't hesitate to contact us.</p>
              <br></br>
              <p>forberelectrical@gmail.com</p>
            </div>
            <div className="col-md-4">
              <h5>Phone Numbers</h5>
              <p>Main: 07770 565936</p>
              <p>Admin: 01744 670127</p>
            </div>
            <div className="col-md-4">
              <h5>Our Address</h5>
              <p>Forber & Sons LTD</p>
              <p>St. Helens, Merseyside, UK</p>
            </div>
          </div>
          <div className="text-center mt-3">
            <p>&copy; 2024 Forber & Sons LTD.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;