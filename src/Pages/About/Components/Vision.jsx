import React from 'react'
import './Vision.css'
import chick2 from '../../../assets/chick2.jpg'

export const Vision = () => {
  return (
    <div className='vision'>
      <div className="vision-text">
        <h3>Our Vision</h3>
        <p>Our vision is to lead the way in advancing poultry nutrition and health through innovative feed supplements and nutraceuticals. We aspire to be a trusted partner for poultry farmers worldwide, empowering them with science-backed solutions that enhance the well-being, performance, and profitability of their flocks. By pioneering new products and sustainable practices, we aim to contribute to a healthier and more efficient poultry industry, ensuring a sustainable future for generations to come.</p>
      </div>
      <div className="vision-pic">
        <img src={chick2} alt="" />
      </div>
    </div>
  )
}
