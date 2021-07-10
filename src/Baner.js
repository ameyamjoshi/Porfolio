import React from "react";
import "./Baner.css";
import AOS from 'aos';
function Baner() {
  AOS.init();
  return (
    <div className='baner__container'>
      <div className="baner__content">
        <div className='baner__text'>
            <div className="text__heading">
            <h1>I'm Ameya Joshi.</h1>
            </div>
            <div className="text__desc">
            I'm a software engineer. This website is my digital garden — a compendium of the things I've learned and created.
            </div>
            <div className="gituhb__button">
           <a href="https://github.com/ameyamjoshi" target="_blank"><i class="fa fa-github" style={{ marginRight:"1em",color:"#343A40",fontSize:"36px"}}></i></a> 
           <a href="https://www.linkedin.com/in/ameya-joshi19/" target="_blank"><i class="fa fa-linkedin-square" style={{ color:"#343A40",fontSize:"36px"}}></i></a>
            </div>
        </div>
        <div  className='baner__image'  >
          <img src='https://avatars.githubusercontent.com/u/52293882?v=4' alt='image' height="300px" width="300px"/>
        </div>
      </div>
    </div>
  );
}

export default Baner;
