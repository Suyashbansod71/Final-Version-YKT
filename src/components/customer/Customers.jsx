import React from 'react'
import ImageWithText from './ImageWithText';
import { useNavigate } from 'react-router-dom';
import './customers.scss';

export const Customers = () => {
   
   
  const navigate = useNavigate();
  const handleMemberShips = () => {
   try {
    window.location.href = '#top';
     navigate("/membership")
    
   } catch (error) {
      console.error("error")
   }
  }


  return (
    <div className='customer2'> 
    
      <div className="customertext2">Memberships That We Offer</div>
      <div className='member2'>
      <ImageWithText imageUrl="class-yoga19.jpg" text="We have Affordable Membership Plans for you!" />
    </div>
     
<div className="pricing-plans">
  <div className="plan">
    <h3>1-Month Plan</h3>
    <p>Access our yoga classes for a month. Enjoy flexibility with our monthly plan.</p>
    <a href="./membership" target="_blank" rel="noopener noreferrer">Register Now</a>
  </div>

  <div className="plan recommended">
  <div className="ribbon">Recommended</div>
    <h3>3-Months Plan</h3>
    <p>Access a wealth of yoga classes over 3 months. Explore versatility with our quarterly plan.</p>
    <a href="./membership" target="_blank" rel="noopener noreferrer">Register Now</a>
  </div>
  <div className="plan ">

    <h3>6-Months Plan</h3>
    <p>Immerse yourself in yoga sessions for 6 months. Embrace adaptability with our half-year plan.</p>
    <a href="./membership" target="_blank" rel="noopener noreferrer">Register Now</a>
  </div>

  <div className="plan">
    <h3>Yearly Plan</h3>
    <p>Commit to a year of wellness with our yearly plan. Save more and stay dedicated!</p>
    <a href="./membership" target="_blank" rel="noopener noreferrer">Register Now</a>
  </div>




</div>


      </div>




  )
}
