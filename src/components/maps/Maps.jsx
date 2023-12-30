import React from 'react'
import "./maps.scss"
const Maps = () => {
  return (
    <div className="map-container">
        Where You Can Find Us..
    <iframe
      title="Yoga with Kavita"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.001788120759!2d77.47548870953007!3d28.56970902090313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ced6a955e8c67%3A0x487f4ce71ab0be00!2sYoga%20with%20Kavita%20Tripathi!5e0!3m2!1sen!2sin!4v1703878550266!5m2!1sen!2sin"
      width="100%"
      height="450"
      style={{ border: "0", borderRadius: "8px" }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
  )
}

export default Maps