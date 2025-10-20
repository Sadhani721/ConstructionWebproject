import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'

const Contact = () => {
  return (
    <>
    <Header />
      <main>
        <Hero preHeading='Quality.Integrity. Value.'
                  heading='Contact Us' 
                  text='prescision and excellence
                      We excel at transforming visions into reality <br />through outstanding
                      craftsmanship and precise.'/>

                    <section className='section-9 py-5' >
                        <div className='container'>
                    <div className='section-header text-center'>
                      <span></span>
                        <h2>Contact Us</h2>
                        <p>Our dedicated experts are here to help you with any of 
                            your questions,contact us by <br /> filling out the form 
                            below and we will be in touch shortly. </p>
                    </div>
                        </div>
                    
                        <div>
                          <div className='row mt-5'>
                            <div className='col-md-3'>
                                <div className='card shadow border-0 mb-3'>
                                    <div className='card-body p-4'>
                                        <h3>Call Us</h3>
                                        <div> <a href='#'>0554709873</a></div>
                                         <div><a href='#'>0112238976</a></div>
                                          

                                         <h3 className='mt-4'>You Can Write Us</h3>
                                         <div><a href="#">info@example.com</a></div>
                                        <div><a href="#">Solid@example.com</a></div>
                                             

                                         <h3  className='mt-4'>Address</h3>    
                                         <div>No 112, Ward Place <br />
                                            Colombo 7, <br />Sri Lanka.</div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-9'>
                                <div className='card shadow border-0'>
                                   <div className='card-body p-5'>
                                     <form action="">
                                        <div className='row'>
                                            <div className='col-md-6 mb-4'>
                                                 <label htmlFor="" className='form-label'>Name</label>
                                                 <input text="text" className='form-control form-control-lg' placeholder='Enter Name'/>
                                                 </div>
                                             <div className='col-md-6 mb-4'>
                                                <label htmlFor="" className='form-label'>Email</label>
                                                 <input text="text" className='form-control form-control-lg' placeholder='Enter Email'/>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6 mb-4'>
                                                 <label htmlFor="" className='form-label'>Phone</label>
                                                 <input text="text" className='form-control form-control-lg' placeholder='Phone No.'/>
                                                 </div>
                                             <div className='col-md-6 mb-4'>
                                                <label htmlFor="" className='form-label'>Subject</label>
                                                 <input text="text" className='form-control form-control-lg' placeholder='Subject'/>
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="" className='form-label'>Message</label>
                                            <textarea name="" id="" cols="30" rows="5" className='form-control' placeholder='Type Your Message'></textarea>
                                        </div>
                                        <button className='btn btn-primary mt-3'>Submit</button>
                                    </form>
                                   </div>
                                </div>
                            </div>
                          </div>
                        </div>

                    </section>
      </main>
    
    <Footer />
    
    </>
  )
}

export default Contact