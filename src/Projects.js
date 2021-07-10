import React from 'react'
import "./Projects.css"
import AOS from 'aos';
function Projects() {
    AOS.init()
    return (
        <div className="projects__container" id="Projects">
            <div className="heading__projects">
                Projects
            </div>
            <div className="projects__details" >
                <a href="https://reactquiztriviadb.netlify.app/" target="_blank">
                <div className="each__proj">
                <div className="project__name">
                &#128240; Quiz
                </div>
                <div className="project__desc">
                    A react quiz app , with basic security features.
                </div>
                </div>
                </a>
                <a href="https://xenodochial-newton-518826.netlify.app/" target="_blank">
                <div className="each__proj">
                <div className="project__name">
                &#11088; Random Color Generator
                </div>
                <div className="project__desc">
                    A react quiz app , which generates random colors and gradients.
                </div>
                </div>
                </a>   
            </div>
        </div>
    )
}

export default Projects
