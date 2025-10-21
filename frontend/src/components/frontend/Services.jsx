import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'
import ServiceImg from '../../assets/images/construction1.jpg';
import { apiUrl, fileUrl } from '../common/http';


const Services = () => {
  const [services, setServices] = useState([]);
    
    const fetchAllServices = async () => {
      try {
        const res = await fetch(apiUrl+ "get-services", {
          method: "GET"
        });
        const result = await res.json();
        console.log('API Response:', result);
        console.log('Services data:', result.data);
        console.log('File URL:', fileUrl);
        setServices(result.data);
      } catch (error) {
        console.error('Error fetching services:', error);
        // Set some dummy data for testing
        setServices([
          {
            id: 1,
            title: "Civil Construction",
            short_desc: "Professional civil construction services for residential and commercial projects.",
            image: "dummy.jpg"
          }
        ]);
      }
    };
  
   useEffect(() => {
      fetchAllServices();
    }, []);
  

  return (
   <>
    <Header />
    <Hero preHeading='Quality.Integrity. Value.'
                  heading='Services' 
                  text='We excel at transforming visions into reality <br />through outstanding
                      craftsmanship and precise.'/>
                      

                        <section className='section-3 bg-light py-5'>
                                          <div className='container py-5'>
                                            <div className='section-header text-center'>
                                              <span>our services</span>
                                                <h2>Our construction services</h2>
                                                <p>We offer a diverse array of construction services, 
                                                  spanning residential, commercial and industrial projects.</p>
                                            </div>
                                          <div className='row pt-4'>
                                           {services &&
            services.map((service) => {
              return (
                <div key={service.id} className="col-md-4 col-lg-4">
                  <div className="item">
                    <div className="service-image">
                      <img 
                        src={`${fileUrl}uploads/services/small/${service.image}`} 
                        alt={service.title}
                        className="w-100"
                        onError={(e) => {
                          e.target.src = ServiceImg; // Fallback to default image
                        }}
                      />
                    </div>
                    <div className="service-body">
                      <div className="service-title">
                        <h3>{service.title}</h3>
                      </div>
                      <div className="service-content">
                        <p>{service.short_desc}</p>
                      </div>
                      <Link to={`/service/${service.id}`} className="btn btn-primary small">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          }
                                 
                                      </div>
                                      </div>
                        
                                        </section>
    <Footer/>
   </>
  )
}

export default Services