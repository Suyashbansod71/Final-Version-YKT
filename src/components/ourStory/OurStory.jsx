// import React from 'react'
// import "./ourstory.scss"
// const OurStory = () => {

//   return (
//     <div className='story'>
//         <img  className="storybg "src ="./storybg.png" alt =""  />

//       <div className="storytitle">Our Story</div>
//       <div className="storytext">
//         <div className="story1">Our humble discovery of Yoga began in 2011 while living in the bustling streets of New York City. Despite the initial challenges and sweating profusely in a packed hot class, yoga touched our souls. However, life had its own plans, and a knee injury while surfing tested our determination. But with the unwavering support and encouragement of friends we crossed paths with, we found our way back to the practice, discovering patience, healing and acceptance along the way.
//         Since then, yoga has become the guiding light through life's trials and triumphs—a constant companion during injuries, emotional hardships, and joyous moments. We are forever grateful for the transformative journey it has bestowed upon us.

//         We invite you to join our vibrant community, where you can move freely and live fully in the present moment. Tranquil Tree Yoga is more than a studio; it is a sanctuary where you can nourish your mind, body, and spirit. Come and experience the unparalleled blend of tranquility and invigoration that awaits you within our doors. Embrace the beauty of San Diego's yoga scene and its ocean, and let us be your sanctuary of serenity.</div>
      
//        </div>
      
      
//       <div className="storying"> <img src ="./storyimg.png" alt ="" /></div>
//       <div className="storyvector"><img src ="./storyvector.png" alt=""/></div>
//     </div>
//   )
// }

// export default OurStory

import React from 'react'
import './ourstory.scss'


const OurStory = () => {
  return (
    <div className='story'>
      <img  className="story_bg "src ="./storybg.png" alt =""  />
      <div className="story_content">
      <div className="story_title">OurStory</div>
      <div className="story_paragraphs">
      <p className="story_paragraph">
      At shivayog – yoga with Kavita Tripathi, we offer a wide range of online yoga sessions tailored to 
      meet the unique needs and goals of individuals of all ages and body types. Our experienced instructors 
      provide personalized guidance based on specific ailments such as getting relief from PCoS, PCoD, thyroid 
      & hormonal problems, joint pain, BP, diabetes, difficulty in conceiving, mental stress, anxiety, depression, 
      etc. as well as fitness objectives such as weight loss, waist loss, inch loss, fat loss, etc., ensuring each 
      practice is safe, effective, and enjoyable. Whether you're a beginner or an experienced yogi, we offer virtual, 
      offline as well as personalised classes that focus on stress relief, flexibility, mindfulness, physical and mental health, and self-care. Join us today
       and experience the transformative power of yoga from where you are.


        </p>
        <p className="story_paragraph">
         
        Kavita Tripathi – A visionary coming from an army background is a disciplinarian. In her past life, she was an educator and used to teach at Army Public School in Pune. 
        Kavita returned to India after staying in the United Kingdom for several years, and founded shivayog – Yoga with Kavita Tripathi – the way of life after 
        understanding the healthcare system in India and the challenges being faced by the people in maintaining general wellbeing & mindfulness. Kavita then decided 
        to bring it upon herself to be the agent of transformative change at an international scale. 
        </p>
       
        </div>
        </div>
        <img className="storyvector" src ="./storyvector.png" alt=""/>
       <img className="storying" src ="./storyimg.png" alt ="" />
     
    
    </div>
   
  )
}

export default OurStory