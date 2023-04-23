import React from 'react'
import "./Datatypes.css"
import { CalendarOutlined } from "@ant-design/icons"
import { ClockCircleOutlined } from "@ant-design/icons"

const Datatypes = () => {
  return (
    <div className='datatypes_1'>
      <h2 className='data_type_12'>Quiz_1: Data Types</h2>
      <div className='desc_16'>16 December 2021, Thursday</div>
      <div className='Quiz_12'>Quiz Details</div>
      <div className='data_type_card'>
        <div className='que_10'>10</div>
        <div className='que_11'>Questions</div>
        <div className='que_101'>-</div>
        <div className='que_111'>Duration</div>
        <div className='que_1012'>125</div>
        <div className='que_1112'>Total Score</div>
        <div className='line_1'>|</div>
        <div className='start_0'>Start :</div>
        <div className='start_01'><CalendarOutlined /></div>
        <div className='start_02'>16 Dec 2021</div>
        <div className='start_03'>07:30 PM</div>
        <div className='start_04'><ClockCircleOutlined /></div>


        <div className='start_09'>Due :</div>
        <div className='start_019'><CalendarOutlined /></div>
        <div className='start_029'>19 Dec 2021</div>
        <div className='start_039'>11:50 PM</div>
        <div className='start_049'><ClockCircleOutlined /></div>
      </div>
    </div>
  )
}

export default Datatypes
