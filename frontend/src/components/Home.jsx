import React from 'react';


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
im



export const Home = () => {
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
            <a className='btn btn-primary large'>Contact Now</a>
          <a className='btn btn-secondary ms-2 large'>View Projects</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/*About us section*/}
  <About/>
  
            {/* Our services */}
                
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
                <section className='section-3 bg-light py-5'>
                                      <div className='container py-5'>
                                        <div className='section-header text-center'>
                                          <span>our projects</span>
                                            <h2>Discover our diverse range of projects.</h2>
                                            <p>We offer a diverse array of construction services, 
                                              spanning residential, commercial and industrial projects.</p>
                                        </div>
                                        <div className='row pt-4'>
                                          <div className='col-md-4 col-lg-4'>
                                            <div className='item'>
                                            <div className='service-image'>
                                              <img src={ConstructionImg } alt='' className='w-100'></img>
                                            </div>
                                        <div className='service-body'>
                                        <div className='service-title'>
                                          <h3>Transportation</h3>
                                        </div>
                                        <div className='service-content'>
                                          <p>SA major new international gateway requiring extensive site preparation, terminal design-build, and complex airfield pavement construction.</p>
                                        </div>
                                        <a href='#' className='btn btn-primary small'>Read More</a>
                                      </div>
                                      </div>
                                    </div>
                                        <div className='col-md-4 col-lg-4'>
                                            <div className='item'>
                                            <div className='service-image'>
                                              <img src={ConstructionImg1} alt='' className='w-100'></img>
                                            </div>
                                        <div className='service-body'>
                                        <div className='service-title'>
                                          <h3>Railway Projects</h3>
                                        </div>
                                        <div className='service-content'>
                                          <p>High-Speed Rail project involving extensive tunneling, viaduct construction, and complex track-laying to connect major cities.</p>
                                        </div>
                                        <a href='#' className='btn btn-primary small'>Read More</a>
                                      </div>
                                      </div>
                                    </div>
                                        <div className='col-md-4 col-lg-4'>
                                            <div className='item'>
                                            <div className='service-image'>
                                              <img src={ConstructionImg2} alt='' className='w-100'></img>
                                            </div>
                                        <div className='service-body'>
                                        <div className='service-title'>
                                          <h3>Aviation Projects</h3>
                                        </div>
                                        <div className='service-content'>
                                          <p>A complete overhaul of a major airport terminal while maintaining full operations, showcasing complex phasing and public-facing construction.</p>
                                        </div>
                                        <a href='#' className='btn btn-primary small'>Read More</a>
                                      </div>
                                      </div>
                                    </div>
                                    </div>
                                    </div>
                    
                                      </section>
                  <section className='section-5 py-5'>
                    <div className='container'>
                      <div className='section-header text-center'>
                        <span>Testimonials</span>
                        <h2>What people are saying about us</h2>
                        <p>We offer a diverse array of construction services, 
                          spanning residential, commercial and industrial projects.</p>
                      </div>
                      <div className="swiper-container mt-5">
                        <Swiper
                          modules={[Pagination]}
                          spaceBetween={30}
                          slidesPerView={1}
                          breakpoints={{
                            640: {
                              slidesPerView: 2,
                              spaceBetween: 20,
                            },
                            768: {
                              slidesPerView: 2,
                              spaceBetween: 30,
                            },
                            1024: {
                              slidesPerView: 3,
                              spaceBetween: 30,
                            },
                          }}
                          pagination={{ 
                            clickable: true,
                            dynamicBullets: true 
                          }}
                          className="testimonials-swiper"
                        >
                          <SwiperSlide>
                            <div className='card shadow border-0'>
                              <div className='card-body p-5'>
                                <div className='rating'>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                  </svg>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                  </svg>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                  </svg>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                  </svg>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                  </svg>
                                </div>
                                <div className='content pt-4 pb-2'>
                                  <p>Choosing Solidbase was a strategic decision that yielded a strong Return on Investment. They built a facility that perfectly supports our long-term growth and success. The project was completed on time and under budget—a rare accomplishment. I was most impressed by their leadership's integrity and foresight. We now consider Solidbase not just a contractor, but a trusted, essential partner for all future developments.</p>
                                </div>
                                <hr />
                                <div className='d-flex meta'>
                                  <div>
                                    <img src={AvatarImg} alt="" width={50} />
                                  </div>
                                  <div className='ps-3'>
                                    <div className='name'>John Doe</div>
                                    <div>CEO</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                          
                          <SwiperSlide>
                            <div className='card shadow border-0'>
                              <div className='card-body p-5'>
                                <div className='rating'>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                  </svg>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                  </svg>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                  </svg>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                  </svg>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                  </svg>
                                </div>
                                <div className='content pt-4 pb-2'>
                                  <p>Working with Solidbase made the entire construction process surprisingly easy. Their clear communication and professional approach were top-tier. They kept us informed with timely updates, and their on-site team was courteous and meticulously organized. This significantly minimized disruption to our core business operations. They are a highly competent firm that delivers on its promises
                                     with absolute reliability and respect for the client's needs.</p>
                                </div>
                                <hr />
                                <div className='d-flex meta'>
                                  <div>
                                    <img src={AvatarImg1} alt="" width={50} />
                                  </div>
                                  <div className='ps-3'>
                                    <div className='name'>Jane Smith</div>
                                    <div>Manager</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                          
                          <SwiperSlide>
                            <div className='card shadow border-0'>
                              <div className='card-body p-5'>
                                <div className='rating'>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                  </svg>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                  </svg>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                  </svg>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                  </svg>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                  </svg>
                                </div>
                                <div className='content pt-4 pb-2'>
                                  <p>The team at Solidbase demonstrated unmatched technical expertise. Every phase of the build, from foundation to finish, adhered to the highest standards of quality and specification. Their proactive approach to complex technical issues was seamless and efficient. The final structure is robust, compliant, and clearly built for longevity. I confidently recommend them to any organization prioritizing engineering integrity and technical excellence.</p>
                                </div>
                                <hr />
                                <div className='d-flex meta'>
                                  <div>
                                    <img src={AvatarImg2} alt="" width={50} />
                                  </div>
                                  <div className='ps-3'>
                                    <div className='name'>Mike Johnson</div>
                                    <div>Director</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                          
                          <SwiperSlide>
                            <div className='card shadow border-0'>
                              <div className='card-body p-5'>
                                <div className='rating'>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                  </svg>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                  </svg>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                  </svg>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                  </svg>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                  </svg>
                                </div>
                                <div className='content pt-4 pb-2'>
                                  <p>Solidbase's operational efficiency was second 
                                    to none on the ground. They proved exceptional at
                                     hitting all critical milestones and flawlessly coordinating a complex array of subcontractors. The on-site Project Manager was an invaluable asset, driving tasks to completion safely and precisely. If you require a construction partner who guarantees a high-quality build that is delivered on 
                                    time and strictly to schedule, Solidbase is the definitive choice.</p>
                                </div>
                                <hr />
                                <div className='d-flex meta'>
                                  <div>
                                    <img src={AvatarImg} alt="" width={50} />
                                  </div>
                                  <div className='ps-3'>
                                    <div className='name'>Sarah Wilson</div>
                                    <div>Project Lead</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        </Swiper>
                      </div>
                    </div>
                  </section>
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
                                <a href='#' className='title'>Dummy Blog Title</a>
                              </div>
                              <a href='#' className='btn btn-primary small'>Read More</a>
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
                                <a href='#' className='title'>Dummy Blog Title</a>
                              </div>
                              <a href='#' className='btn btn-primary small'>Read More</a>
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
                                <a href='#' className='title'>Dummy Blog Title</a>
                              </div>
                              <a href='#' className='btn btn-primary small'>Read More</a>
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