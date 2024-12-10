import React from 'react'
import myimg from "../images/photo_2024-12-07_11-45-26.jpg"
const About = () => {
  return (
    <section className='About' id='about'>
         <div className="container">
          <h2 className="about_title">About</h2>
          <div className="about_box">
        <p className="about_text">My name is Mirjalol, I am 20 years old, and I am currently a graduate of the frontend web programming course.I have come this far because of my strong interest in programming.After completing the course, I will continue to study in this field and also need to improve my English skills.Currently, I work as a service worker in a childrens product manufacturing companyMy goal is to learn more about programming and build stronger and more useful websitesIf you are reading this, you are looking at my portfolioYou can see what I've learned about myself and my interests in my portfolioBy the way, I am more interested in football than programming.I'm glad you got to know my portfolio.</p>
        <img src={myimg} alt="" />
      </div>
         </div>
    </section>
  )
}

export default About
