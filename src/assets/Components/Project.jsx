import React from 'react'
import tnw from '../images/tnw.png'
import nike from '../images/nike.png'
import totembo from '../images/totembo.png'
import about from '../images/about.png'
import gotrip from '../images/gotrip.png'
import web from '../images/web.png'

const Project = () => {
  return (
    <main className='Project' id='project'>
      <div className="container">
        <h3 className="project_title">Project</h3>
        <div className="project_box">
            <a href="http://mirjalolroazimebtov.github.io/TNW/" target="_blank" rel="noopener noreferrer">
            <img src={tnw} alt="" className="project_img" />
            </a>
            <a href="http://izzatulloh5566.github.io/Nike1930/" target="_blank" rel="noopener noreferrer">
            <img src={nike} alt="" className="project_img" />
            </a>
           <a href="http://mirjalolroazimebtov.github.io/Totembo/" target="_blank" rel="noopener noreferrer">
           <img src={totembo} alt="" className="project_img" />
           </a>
           <a href="http://aboutme3-nine.vercel.app/" target="_blank" rel="noopener noreferrer"> 
           <img src={about} alt="" className="project_img" />
           </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={gotrip} alt="" className="project_img" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={web} alt="" className="project_img" />
            </a>
        </div>
      </div>
    </main>
  )
}

export default Project
