import React from 'react'
import "./About.css"
import { PlayCircleOutlined } from "@ant-design/icons"
import { QuestionCircleOutlined } from "@ant-design/icons"
import { CodepenCircleOutlined } from "@ant-design/icons"

const About = () => {
  return (
    <>
      <div className='card_01'>
        <div>
          <div className='play'><PlayCircleOutlined /></div>
          <a href='/pyt' className='main_19'>Python Loops</a>
        </div>
        <div>
          <div className='play_19'><QuestionCircleOutlined /></div>
          <a href='/datatypes' className='main_29'>Quiz: Data Types</a>
        </div>
        <div>
          <div className='play_29'><CodepenCircleOutlined /></div>
          <a href='/operatorloops' className='main_39'>Assignement-1:</a>
          <div className='play_39'>Operators | Loops</div>
        </div>

      </div>
    </>
  )
}

export default About
