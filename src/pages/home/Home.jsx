import React, {useState} from 'react'
import "./home.scss"
import Footer from '../../components/footer/Footer'
import ClassType from '../../components/classType/ClassType'
import Philosophy from '../../components/philosophy/Philosophy'
import Book from '../../components/book/Book'
import OurStory from '../../components/ourStory/OurStory'
import {Teacher}  from '../../components/teacher/Teacher'
import {Customers}  from '../../components/customer/Customers'
import Header from '../../components/header/Header'
import Blog from '../../components/blogs/Blog'
import CustomerTestimonials from '../../components/customerTestimonials/CustomerTestimonials'
import Carousel1 from './Carousel1'

//  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Home = () => {
  
  const [activeTab, setActiveTab] = useState('home');
  
  return (
    
    <div className='home'>
      
   <Header activeTab={activeTab}/>
 <Carousel1/>


     <ClassType/>
      <Philosophy/>
      <Book/>
      <OurStory/>
      <Teacher/>
      <Customers/>
      <CustomerTestimonials/>
      <Blog/>
      <a href="https://wa.me/918953279337" class="whatsapp-button" target="_blank">
  <div class="whatsapp-icon-container">
    {/* <i class="fa fa-whatsapp whatsapp-icon" style={{ fontSize: '1.8em', color: '#15eb80' }}></i> */}
    <img src='./whatsappLogo.png' alt='WhatsApp Logo' ></img>
    <span class="chat-text">Chat with us</span>
  </div>
</a>
      <Footer/>
    </div>
    
  )
}

export default Home
