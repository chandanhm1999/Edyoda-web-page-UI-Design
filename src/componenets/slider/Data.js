import React from 'react'
import { CaretDownOutlined } from "@ant-design/icons"
import "./Data.css"

const Data = () => {
    return (
        <div>
            <div class="dta_pro">
                <div class="dropdown">
                    <div>
                        <button class="dropbtn">DS031221
                            <CaretDownOutlined />
                        </button>
                        <div className='program'>Data Scientist Program</div>
                        <div class="dropdown-content">
                            <div className='select_pr'>Select Program</div>
                            <p className='row_1'>ECRD</p>
                            <p className='row_2'>FSR222222</p>
                            <p className='row_3'>DS261121</p>
                            <button className='row_4'>DS031221</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Data
