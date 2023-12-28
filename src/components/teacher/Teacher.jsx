import React from 'react'
import './teacher.scss'
export const Teacher = () => {
  return (
    <div className='teacher'>
        <div className='teachermeet'>
            Meet Our Teachers
        </div>
        <div className='teacherphoto'>

            <div className='teacher_1'>
                <div className="teacherimg">
                <img   src="./kavita.png" alt="" />
                </div>
                <div className="teachertext">Kavita</div>
                <div className="teachertype">Kavita, a passionate Chakra Instructor, holds a certification in Chakra Healing and Mindfulness, guiding individuals towards holistic well-being. With expertise in balancing energy centers, she empowers her clients on their journey to inner harmony and self-discovery. [Certification Link]</div>
            </div>

            <div className='teacher_2'><img src="./kesar.png" alt=""  />
            <div className="teachertext">Kesar</div>
                <div className="teachertype">Prajapati Kesar Gopalbhai – Online yoga instructor from YTT 200 hours based in Gandhinagar, Gujarat. Kesar is a young and dynamic individual globally certified by the Indian Yoga Association. She has strong communication skills and helps yogis attain their fitness goals, being mindful and making them a calmer and happier person overall.[Certification Link]</div></div>

            <div className='teacher_3'>
          <img src="./dhanshree1_img.jpg" alt="" />
          <div className="teachertext">Dhanashree</div>
                <div className="teachertype">
                Dhanshri Salunkhe – Online yoga instructor from YTT 200 hours based in Aurangabad Maharashtra. Dhanshri is a Athletic Coach.Individual globally certified by the Indian Yoga Association. She has strong yoga skills and can help yogis with building their yoga skills.[Certification Link]</div></div>
        </div>
       

    </div>
  )
}
export default Teacher
