import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from './common/Header';
import Footer from './common/Footer';
import Icon1 from '../assets/images/icon-1.svg';
import Icon2 from '../assets/images/icon-2.svg';
import Icon3 from '../assets/images/icon-3.svg';
import About from './common/About';
import { apiUrl } from './common/http';
import LatestServices from './common/LatestServices';
import LatestProjects from './common/LatestProjects';
import ShowTestimonial from './common/ShowTestimonial';




const Home = () => {
  const[services, setServices] = React.useState([]);

 const fetchLatestServices= async ()=>{
  const res = await fetch(apiUrl + 'get-latest-services?limit=4', {
              method: 'GET'
          });
          
          const result = await res.json();
          console.log(result);
          setServices(result.data);
 }
 useEffect(()=>{
   fetchLatestServices();
 },[]);

    return(

<>
<Header/>

<main>
  {/*  Hero section  */}
  <section className='section-1'>
    <div className='hero d-flex align-items-center'>
      <div className='container-fluid'>
        <div className='text-center'>
          <span>Welcome Amazing Constructions</span>
          <h1>Building visions with <br/> precision and excellence</h1>
          <p>We specialize in turning ideas into enduring structures through expert 
craftsmanship and meticulous  <br/> attention to detail. With years of experience and 
an unwavering commitment to excellence.</p>
          <div className='mt-4'>
            <Link to='/contact' className='btn btn-primary large'>Contact Now</Link>
          <Link to='/projects' className='btn btn-secondary ms-2 large'>View Projects</Link>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/*About us section*/}
  <About/>
  
            {/* Our services */}
            <LatestServices/>
                
            {/*Why choose us */}
                <section className='section-4 py-5'>
                  <div className='container'>
                     <div className='section-header text-center'>
                      <span>Why Choose Us</span>
                        <h2>Discover our wide varity of projects.</h2>
                        <p>Created in close partnership with our clients and collaborators, 
                          this approach merges industry expertise,<br/>
                          decades of experiance, innovation, and flexibility to consistently deliver
                          execellence.
                          </p>
                    </div> 
                    <div className='row pt-4'>
                      <div className='col-md-4'>
                        <div className='card shadow border-0 p-4'>
                         <div className='card-icon'>
                          <img src={Icon1} alt="" />
                         </div>
                         <div className='card-title mt-3'>
                         <h3>Commitment to Quality</h3>

                      </div>
                          <p>
                            Small details ensure big impact. It all begins with choosing superior materials and ends with each worker committing to precise craftsmanship, delivering a lasting structure.
                          </p>
                    </div>
                    </div>

                    <div className='col-md-4'>
                        <div className='card shadow border-0 p-4'>
                         <div className='card-icon'>
                          <img src={Icon2} alt="" />
                         </div>
                         <div className='card-title mt-3'>
                         <h3>Proven Reliability</h3>

                      </div>
                          <p>
                            Small actions create big impact. It all begins with dedicated project planning and ends with our team committing to on-time, on-budget delivery, ensuring project success.
                          </p>
                    </div>
                    </div>

                    <div className='col-md-4'>
                        <div className='card shadow border-0 p-4'>
                         <div className='card-icon'>
                          <img src={Icon3} alt="" />
                         </div>
                         <div className='card-title mt-3'>
                         <h3>Focus on Safety</h3>

                      </div>
                          <p>
                            Small actions create big impact. It all begins with rigorous site training and ends with each employee committing to safer work practices daily, ensuring they return home safely.
                          </p>
                    </div>
                    </div>
                   </div>
                   </div>
                </section>

            {/* Our Projects*/}
              <LatestProjects />

                  <ShowTestimonial/>
                      </main>

                      <Footer/>

</>

      

       
    )
}

export default Home