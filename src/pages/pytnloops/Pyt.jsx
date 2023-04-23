import React from 'react'
import "./pyt.css"
import { ExclamationCircleOutlined } from "@ant-design/icons"
import { PlayCircleOutlined } from "@ant-design/icons"
import { VideoCameraOutlined } from "@ant-design/icons"
import { ReconciliationOutlined } from "@ant-design/icons"

const Pyt = () => {
  return (
    <div className='pyt11'>
      <h2 className='python_loops1'>Python Loops</h2>
      <div className='desc_15'>15 December 2021, Wednesday, 07:30 PM</div>
      <div className='feed_1'>Daily Feedbacks</div>
      <div>
        <button className='part_1'>Session Plan</button>
        <div className='icon-pyt'><ExclamationCircleOutlined /></div>

        <button className='part_12'>Pre-watch videos</button>
      <div className='icon-pyt2'><PlayCircleOutlined /></div>

      <button className='part_13'>Session Recordings</button>
      <div className='icon-pyt3'><VideoCameraOutlined /></div>

      <button className='part_14'>References</button>
      <div className='icon-pyt4'><ReconciliationOutlined /></div>
      </div>
      <div className='cards_pyt'>
        <h2 className='card_pyt_id'>Session Plan</h2>
        <div className='live_1'> LIVE session about to start. Please stay tuned.</div>
        <button className='btn_pyt'>Join Live session</button>
        <div className='sub_1'>Sun-Topics</div>
        <div className='sub_12'>1. Sorting and Indexing Dataframe</div>
        <div className='sub_123'>2. Filtering Dataframe</div>
        <div className='sub_1234'>3. Usage of Ioc and iloc functions</div>

        <div className='sub_1235'>Session Details</div>
      </div>
      
    </div>
  )
}

export default Pyt
