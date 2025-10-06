import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'
import ConstructionImg from '../../assets/images/construction3.jpg';
import ConstructionImg1 from '../../assets/images/construction1212.jpg';
import ConstructionImg2 from '../../assets/images/construction4.jpg';

const Project = () => {
  return (
 <>
        <Header />
    <main>
        <Hero preHeading='Quality.Integrity. Value.'
                  heading='Our Projects' 
                  text='prescision and excellence
                      We excel at transforming visions into reality <br />through outstanding
                      craftsmanship and precise.'/>
    </main>
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
 <Footer />
 </>

  )
}

export default Project