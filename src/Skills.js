import React from "react";
import "./Skills.css";
function Skills() {
  return (
    <div className='skills__container' id='Skills'>
      <div className='Skills__heading'>Skills</div>
      <div className='skills'>
        <div className='each__skill'>
          <img src='HTML5_logo_and_wordmark.svg' height='100px' width='100px' />
        </div>

        <div className='each__skill'>
          <img src='CSS3_logo_and_wordmark.svg' height='100px' width='100px' />
        </div>

        <div className='each__skill'>
          <img src='javascript-js-seeklogo.com.svg' height='100px' width='100px' />
        </div>

        <div className='each__skill'>
          <img src="React-icon.svg" height='100px' width='100px' />
        </div>

        <div className='each__skill'>
          <img src='elasticsearch.svg' height='140px' width='140px' />
        </div>

        <div className='each__skill'>
          <img src='python.svg' height='100px' width='150px' />
        </div>
        <div className='each__skill'>
          <img src='django.svg' height='100px' width='100px' />
        </div>
        <div className='each__skill'>
          <img src='mysql.png' height='100px' width='100px' />
        </div>
        <div className='each__skill'>
          <img src='git.png' height='100px' width='150px' />
        </div>
      </div>
    </div>
  );
}

export default Skills;
