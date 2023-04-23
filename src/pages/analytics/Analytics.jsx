import React from 'react'
import Video from '../../assets/edyodha.mp4'
import "./Analytics.css"

const Analytics = () => {
  return (
    <div>
      <h2 className='inst_video1'>INSTRUCTOR</h2>
      <video className='main_video' autoPlay loop muted id='video' width={500} height={500}>
        <source src={Video} type='video/mp4' />
      </video>
    </div>
  )
}

export default Analytics
