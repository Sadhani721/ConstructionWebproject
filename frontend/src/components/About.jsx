import React from 'react'
import Header from './common/Header'
import Footer from './common/Footer'
import {default as AboutNew } from './common/About'
import MemberImg from '../assets/images/team1.jpg'
import MemberImg1 from '../assets/images/team01.jpg'
import MemberImg2 from '../assets/images/team2.webp'
import MemberImg3 from '../assets/images/team3.webp'

import Hero from './common/Hero'
import ShowTestimonial from './common/ShowTestimonial'
import Team from './common/Team'

const About = () => {
  return (
    <>
                <Header />
                <main>
                 <Hero preHeading='Quality.Integrity. Value.'
                  heading='About Us' 
                  text='prescision and excellence
                      We excel at transforming visions into reality <br />through outstanding
                      craftsmanship and precise.'/>
              <AboutNew/>
              {/* Our Team */}
         <Team />

              <ShowTestimonial />

              
                </main>
    <Footer/>
    </>
    
  )
}

export default About