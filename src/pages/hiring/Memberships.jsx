import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import './Memberships.scss'
import { useNavigate } from 'react-router-dom'

const ImageWithDescription = ({ id, src, alt, description }) => (
  <div key={id}>
    <img src={src} alt={alt} />
    <p>{description}</p>
  </div>
);

const Memberships = () => {

  const navigate = useNavigate();
  const handleBuy = ()=> {
    try {
      <a href="https://forms.gle/XPYBtXvA22TXvigV8" target="_blank" rel="noopener noreferrer">
          
        </a>
      
    } catch (error) {
       console.error("error")
    }
  }



 
  const images = [
    {
      id: 1,
   
      src:'class-yoga8.jpg',
      alt: 'Image 1',
     
    },
    {
      id: 2,
    
      src:'class-yoga9.jpg',
      alt: 'Image 2',
   
    },
    {
      id:3,
    
      src:'class-yoga10.jpg',
      alt:'Image 3',
      description:'third image',
    },
    {
      id:4,
     
      src:'class-yoga10.jpg',
      alt:'Image 3',
      description:'third image',
    },
    {
      id:5,
     
      src:'class-yoga10.jpg',
      alt:'Image 3',
      description:'third image',
    },
    {
      id:6,
    
      src:'class-yoga10.jpg',
      alt:'Image 3',
      description:'third image',
    },
    
  ];


  return (
    
    <div>
        <Header/>
        
       <div className='customertext'>Memberships</div>

       <div class="image-grid">
       <div class="image-item">
       <img src = "class-yoga9.jpg" alt = " "></img>
       <div class="info">
       <h4>Yoga For Beginners</h4>
       <p>7:00 AM - 9:00 AM</p>
       <a className="book-button" href="https://forms.gle/XPYBtXvA22TXvigV8" target="_blank" rel="noopener noreferrer">
          Join Now
        </a>
    </div>
  </div>

  <div class="image-item">
  <img  src = "class-yoga8.jpg" alt = " " ></img>
       <div class="info">
       <h4>Yoga For Women</h4>
       <p>9:00 AM - 10:30 AM.</p>
       <a className="book-button" href="https://forms.gle/XPYBtXvA22TXvigV8" target="_blank" rel="noopener noreferrer">
          Join Now
        </a>
    </div>
  </div>

  <div class="image-item">
  <img  src = "./class-yoga11.jpg" alt = " " ></img>
       <div class="info">
       <h4>Asanas In Yoga</h4>
       <p>6:00 AM - 7:00 AM</p>
       <a className="book-button" href="https://forms.gle/XPYBtXvA22TXvigV8" target="_blank" rel="noopener noreferrer">
          Join Now
        </a>
    </div>
  </div>

  <div class="image-item">
  <img  src = "./class-yoga15.jpg" alt = " " ></img>
       <div class="info">
       <h4>Face Yoga</h4>
       <p>10:00 AM - 11:00 AM</p>
       <a className="book-button" href="https://forms.gle/XPYBtXvA22TXvigV8" target="_blank" rel="noopener noreferrer">
          Join Now
        </a>
    </div>
  </div>

  <div class="image-item">
  <img   src = "./class-yoga12.jpg" alt = " " ></img>
       <div class="info">
       <h4>Evening Yoga</h4>
       <p>5:00 PM - 6:00 PM</p>
       <a className="book-button" href="https://forms.gle/XPYBtXvA22TXvigV8" target="_blank" rel="noopener noreferrer">
          Join Now
        </a>
    </div>
  </div>

  <div class="image-item">
  <img src = "./class-yoga13.jpg" alt = " "></img>
       <div class="info">
       <h4>Pranayama</h4>
       <p>7:00 AM - 9:00 AM</p>
       <a className="book-button" href="https://forms.gle/XPYBtXvA22TXvigV8" target="_blank" rel="noopener noreferrer">
          Join Now
        </a>
    </div>
  </div>
  

  <a href="https://wa.me/918953279337" class="M-whatsapp-button" target="_blank">
  <div class="whatsapp-icon-container">
    <i class="fa fa-whatsapp whatsapp-icon" style={{ fontSize: '1.8em', color: '#15eb80' }}></i>
    <img src='./whatsappLogo.png' alt='WhatsApp Logo' ></img>
    <span class="chat-text">Chat with us</span>
  </div>
</a>



</div>


        <Footer/>
        </div>
  )
}

export default Memberships