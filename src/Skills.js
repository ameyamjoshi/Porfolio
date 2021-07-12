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

        {/* <div className='each__skill'>
          <img src='HTML5_logo_and_wordmark.svg' height='100px' width='100px' />
        </div>

        <div className='each__skill'>
          <img src='HTML5_logo_and_wordmark.svg' height='100px' width='100px' />
        </div> */}
      </div>
    </div>
  );
}

export default Skills;
