import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from './common/Header';
import Footer from './common/Footer';
import ServiceImg from '../assets/images/construction1.jpg';
import ConstructionImg from '../assets/images/construction2.jpg';
import BlogImg from '../assets/images/construction3.jpg';
import Icon1 from '../assets/images/icon-1.svg';
import Icon2 from '../assets/images/icon-2.svg';
import Icon3 from '../assets/images/icon-3.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import AvatarImg from '../assets/images/author-2.jpg';
import AvatarImg1 from '../assets/images/pexels-pixabay-220453.jpg';
import AvatarImg2 from '../assets/images/team1.jpg';
import {Pagination} from 'swiper/modules';
import About from './common/About';
import ConstructionImg1 from '../assets/images/construction1212.jpg';
import ConstructionImg2 from '../assets/images/construction4.jpg';
import { apiUrl, token } from './common/http';
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
          <h1>Crafting dreams with <br/> prescision and excellence</h1>
          <p>We excel at transforming visions into reality through outstanding
           craftsmanship and precise <br/> attention to detail.with years of experiance and 
           a dedication to quality. </p>
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
                         <h3>Cutting-Edge
                         Solutions</h3>

                      </div>
                          <p>
                            Small actions create big impact.It all begins and ends with each
                            each employee committing to safer work practices daily,ensuring they returnhome safely.
                          </p>
                    </div>
                    </div>

                    <div className='col-md-4'>
                        <div className='card shadow border-0 p-4'>
                         <div className='card-icon'>
                          <img src={Icon2} alt="" />
                         </div>
                         <div className='card-title mt-3'>
                         <h3>Cutting-Edge
                         Solutions</h3>

                      </div>
                          <p>
                            Small actions create big impact.It all begins and ends with each
                            each employee committing to safer work practices daily,ensuring they returnhome safely.
                          </p>
                    </div>
                    </div>

                    <div className='col-md-4'>
                        <div className='card shadow border-0 p-4'>
                         <div className='card-icon'>
                          <img src={Icon3} alt="" />
                         </div>
                         <div className='card-title mt-3'>
                         <h3>Cutting-Edge
                         Solutions</h3>

                      </div>
                          <p>
                            Small actions create big impact.It all begins and ends with each
                            each employee committing to safer work practices daily,ensuring they returnhome safely.
                          </p>
                    </div>
                    </div>
                   </div>
                   </div>
                </section>

            {/* Our Projects*/}
              <LatestProjects />

                  <ShowTestimonial/>
                  <section className='section-6 bg-light py-5'>
                           <div className='container'>
                        <div className='section-header text-center'>
                        <span>Blog & News</span>
                        <h2>Articles and Blog Posts</h2>
                        <p>We offer a diverse array of construction services, 
                          spanning residential, commercial and industrial projects.</p>
                      </div>
                      <div className='row pt-3'>
                         <div className='col-md-4'>
                          <div className='card border-0'>
                            <div className='card-img-top'>
                           <img src={BlogImg} alt="" className='w-100' />
                            </div>
                            <div className='card-body p-4'>
                              <div className='mb-3'>
                                <Link to='/blogs' className='title'>Dummy Blog Title</Link>
                              </div>
                              <Link to='/blogs' className='btn btn-primary small'>Read More</Link>
                            </div>

                          </div>
                         </div>
                             <div className='col-md-4'>
                          <div className='card border-0'>
                            <div className='card-img-top'>
                           <img src={BlogImg} alt="" className='w-100' />
                            </div>
                            <div className='card-body p-4'>
                              <div className='mb-3'>
                                <Link to='/blogs' className='title'>Dummy Blog Title</Link>
                              </div>
                              <Link to='/blogs' className='btn btn-primary small'>Read More</Link>
                            </div>

                          </div>
                         </div>
                             <div className='col-md-4'>
                          <div className='card border-0'>
                            <div className='card-img-top'>
                           <img src={BlogImg} alt="" className='w-100' />
                            </div>
                            <div className='card-body p-4'>
                              <div className='mb-3'>
                                <Link to='/blogs' className='title'>Dummy Blog Title</Link>
                              </div>
                              <Link to='/blogs' className='btn btn-primary small'>Read More</Link>
                            </div>

                          </div>
                         </div>

                      </div>
                      </div>
                  </section>
                      </main>

                      <Footer/>

</>

      

       
    )
}

export default Home