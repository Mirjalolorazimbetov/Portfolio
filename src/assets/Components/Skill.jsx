import React from 'react'
import html from "../images/HTML5_logo_and_wordmark.svg.png";
import css from "../images/CSS3_logo_and_wordmark.svg.png";
import git from "../images/github-icon-2048x1998-0dhiqkqi.png";
import figma from "../images/Figma-logo.svg.png";
import js from "../images/javascrip.png";
import react from "../images/react-original-wordmark-icon-840x1024-vhmauxp6.png";

const Skill = () => {
  return (
    <>
      <div className="skill" id='skill'>
        <div className="container">
            <h3 className="skill_title">Skills</h3>
            <div className="skill_box">
                <img src={html} alt="" className="skill_logo" />
                <img src={css} alt="" className="skill_logo" />
                <img src={git} alt="" className="skill_logo" />
                <img src={figma} alt="" className="skill_logo" />
                <img src={js} alt="" className="skill_logo" />
                <img src={react} alt="" className="skill_logo" />
            </div>
        </div>
      </div>
    </>
  )
}

export default Skill
