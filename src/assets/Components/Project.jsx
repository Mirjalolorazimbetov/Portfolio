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
            <img src={tnw} alt="" className="project_img" />
            <img src={nike} alt="" className="project_img" />
            <img src={totembo} alt="" className="project_img" />
            <img src={about} alt="" className="project_img" />
            <img src={gotrip} alt="" className="project_img" />
            <img src={web} alt="" className="project_img" />
        </div>
      </div>
    </main>
  )
}

export default Project
