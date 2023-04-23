import React from 'react'
import "./Dashbord.css"
import img12 from "../../assets/img/Data-Analysis.png"
import img13 from "../../assets/img/Data Wrangling.png"
import img14 from "../../assets/img/logo1.png"

const Dashboard = () => {
  return (
    <div>
      <h2 className="main">Upcoming Certifications</h2>
      <div className='card_1'>
        <div className="photo_1">
          <img src={img12} alt='/' />
        </div>
        <button className='idel_1'>CERTIFICATION | ATTEMPT</button>
        <p className='data_1'>DATA ANALYSIS CERTIFICATION</p>
        <button className='idel_2'>COMPLETED | 21 MAR 2022</button>
        <div className='dat_2'>Exam Structure</div>
        <div className='dat_3'>Round 1</div>
        <div className='dat_4'>Round 2</div>
        <button className='idel_3'>MCQS</button>
        <button className='idel_4'>CODING</button>
        <button className='idel_5'>PROJECT</button>
        <button className='idel_6'>VIEW EXAM DETAILS</button>
      </div>
      <h2 className='main_2'>Continue Learning</h2>
      <h3 className='main_3'>VIEW MODULE DETAILS</h3>
      <div className='card_2'>
        <div className="photo_2">
          <img src={img13} alt='/' />
        </div>
        <p className='data23_1'>DATA WRANGLING & VISUALIZATION</p>
        <div className="photo_3">
          <img src={img14} alt='/' />
        </div>
        <h4 className='main2_4'>Test Instructor</h4>
        <p className='class_1'>Live Sessions</p>
        <p className='class_2'>Assignements</p>
        <p className='class_3'>MCQ Quiz</p>
        <div className='output_tag'>
          <input type="range" value="0"></input>
        </div>
        <div className='output_tag1'>
          <input type="range" value="30"></input>
        </div>
        <div className='output_tag2'>
          <input type="range" value="60"></input>
        </div>
        <div className='vl_1'>
          <div className='vl'></div>
        </div>
        <div className='Today_1'>Todays Plan</div>
        <div className='Today_2'>21 March 2020</div>
        <h4 className='main2_43'>Data Transforming using Pandas - 3</h4>
        <div className='Today_3'>Daily Feedback</div>
        <button className='idel_7'>JOIN LIVE SESSION</button>
        <div className='Today_21'>BEGINS AT 07.30 PM</div>
        <div className='Today_22'>Opens AT 07.30 PM</div>
      </div>
      <div className='card_3'>
        <p className='data23_12'>Progress Overview</p>
        <div className='output_tag_1'>
          <input type="range" value="0"></input>
        </div>
        <div className='output_tag_2'>
          <input type="range" value="0"></input>
        </div>
        <h3 className="view_2">View Detailed Progress</h3>
        <div className='Today_09'>0%</div>
        <div className='Today_08'>0%</div>
        <div className='Today_07'>Overall Grade</div>
        <div className='Today_06'>Attendance</div>
      </div>

    </div>
  )
}

export default Dashboard
