import React from 'react';
import AboutImg from '../../assets/images/about-us.jpg';

const About = () => {
  return (
    <section className='section-2 py-5'>
        <div className='container py-5'>
          <div className='row'>
            <div className='col-md-6'>
              <img src={AboutImg} className='w-100'/>
            </div>
            <div className='col-md-6'>
              <span>about us</span>
              <h2>Crafting structure that a last a lifetime</h2>
              <p>Building enduring structures requires a comprehensive approach that combines 
              advanced materials, resilient designs, regular maintenance, and sustainable 
              practices. By learning from the past and integrating modern technology, we ensure 
              lasting strength and timeless quality in every project we undertake.</p>
              <p>Designing structures that stand the test of time involves a perfect balance of 
                cutting-edge materials, durable architecture, consistent upkeep, and innovative 
                eco-friendly solutions. Our expertise blends historical insights with modern 
                engineering excellence to create buildings that truly endure.</p>
    
    
            </div>
            
          </div>
        </div>
      </section>
  )
}

export default About