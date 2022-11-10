import React from 'react';
import "./styles.css"

const VideoBg = () => {
  return (
    <video autoPlay loop muted className="bg-video">
        <source src="../img/video/background.mp4" type='video/mp4' />
    </video>
  )
}

export default VideoBg