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
                <img   src="./woman.png" alt="" width= '300px' height= '300px' border-radius = "20px"/>
                </div>
                <div className="teachertext">Kavita</div>
                <div className="teachertype">Kavita, a passionate Chakra Instructor, holds a certification in Chakra Healing and Mindfulness, guiding individuals towards holistic well-being. With expertise in balancing energy centers, she empowers her clients on their journey to inner harmony and self-discovery. [Certification Link]</div>
            </div>

            <div className='teacher_2'><img src="/man.png
            " alt="" width= '300px' height= '300px' />
            <div className="teachertext">Kesar</div>
                <div className="teachertype">Kesar, a dedicated Yoga Instructor, brings a wealth of experience to her practice. Certified in Yoga Teaching, she skillfully guides individuals on a transformative journey to physical and mental well-being. Through her expertise, Kesar empowers her students to cultivate strength, flexibility, and inner peace. [Certification Link]</div></div>

            <div className='teacher_3'>
          <img src="./woman.png" alt="" width= '300px' height= '300px' />
          <div className="teachertext">Dhanashree</div>
                <div className="teachertype">
Dhanashree, a dedicated Hatha Yoga Instructor, blends a passion for wellness with extensive training. Certified in Yoga Teaching, she skillfully imparts balance and strength principles. Her classes offer a serene space to enhance flexibility, build resilience, and achieve a harmonious mind-body connection. [Certification Link]</div></div>
        </div>
       

    </div>
  )
}
export default Teacher
