import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "./header.scss"
const Header = () => {
    const [color, setColor] = useState(false);
    const [activeTab, setActiveTab] = useState('home');

  const changeColor = () => {
    if(window.scrollY >= 90) {
      setColor(true)
    }else{
      setColor(false)
    }
  }
  const navigate = useNavigate();
  const handleHome = ()=> {
    try {
      setActiveTab('home');
      window.location.href = '#top';
      navigate('/')
    } catch (error) {
      alert('error')
    }
  }

  const ClassTypes = ()=> {
    try {
      setActiveTab('classes');
      window.location.href = '#top';
      navigate('/classestype')
    } catch (error) {
      alert('error')
    }
  }
  const Memberships = ()=> {
    try {
      setActiveTab('memberships');
      window.location.href = '#top';
      navigate('/membership')
    } catch (error) {
      alert('error')
    }
  }
  const ContactUs = ()=> {
    try {
      setActiveTab('contact');
      window.location.href = '#top';
      navigate('/contactUs')
    } catch (error) {
      alert('error')
    }
  }


  window.addEventListener('scroll', changeColor)
  return (
    <nav className={color ?'headermain header-bg' : 'headermain'}>
        <div className='headerComp'>
            <div className='headerlogo' onClick={handleHome}>
            <img src="./main-logo.svg" alt="" height='100px' width= '120px'/>
            {/* <div className='Title'>ShivaYog
            </div> */}
            </div>
            
            
            <div className = "headerstruct" >
                <div onClick={handleHome} className={activeTab === 'home' ? 'check active' : 'check'}>
                Home
                </div>
              
                <div onClick={ClassTypes} className={activeTab === 'classes' ? 'check active' : 'check'}>
               
                Classes Types
                </div>
                <div onClick={Memberships} className={activeTab === 'memberships' ? 'check active' : 'check'}>
                Memberships
              
                </div>
                <div onClick={ContactUs} className={activeTab === 'contact' ? 'check active' : 'check'}>
                Contact Us
               
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Header