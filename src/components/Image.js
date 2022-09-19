import React, { useRef } from 'react';
import goose from '../images/goose.png';
import './Image.css';

const Image = () => {
   const imageRef = useRef();
   const imgStyle = {
      height: '200px',
      width: '200px',
      position: 'absolute',
      top: `${Math.floor((Math.random())* (window.innerHeight ))}px`,
      left: `${Math.floor((Math.random())* (window.innerWidth ))}px`,
      transform: `rotate(${Math.floor(Math.random() * 360)}deg)`,
      objectFit: 'contain'
   }

   return (
     <img src={goose} ref={imageRef} style={imgStyle} alt="" />
   )
}

export default Image
