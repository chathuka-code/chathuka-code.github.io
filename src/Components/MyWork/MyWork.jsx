import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_Data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import project1 from '../../assets/project_1.jpg'
import project2 from '../../assets/project_2.jpg'
import project3 from '../../assets/project_3.jpg'
import project4 from '../../assets/project_4.jpg'


const MyWork = () => {
    return (
      <div id='work' className='mywork'>
        <div className="mywork-title">
          <h1>My Latest Work</h1>
          <img src={theme_pattern} alt="theme_pattern" />
        </div>
        <div className="mywork-container">
          <div className="mywork-item">
            <img src={project1} alt="project1" />
            <div className="mywork-label">University 2nd year software project</div>
          </div>
          <div className="mywork-item">
            <img src={project2} alt="project2" />
            <div className="mywork-label">Coca-cola work permit app (ongoing project)</div>
          </div>
          <div className="mywork-item">
            <img src={project3} alt="project3" />
            <div className="mywork-label">University 1st year hardware project</div>
          </div>
          <div className="mywork-item">
            <img src={project4} alt="project4" />
            <div className="mywork-label">Personal portfolio website</div>
          </div>
        </div>
      </div>
    );
  }
  

export default MyWork