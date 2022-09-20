import React from 'react';
import goose from '../images/goose.png';
import gooseStyle from './gooseStyle.css';

const Image = () => {
   function onloadFunction() {

      //Then get the width and height of the screen. if the container is not the screen
      //The the Id of the container element.
      var screenWidth = window.innerWidth;
      var screenHeight = window.innerHeight;

      //Now generate a random top and left position for the image on page load
      var imgLeft = Math.floor(Math.random() * (screenWidth - 50));
      var imgTop= Math.floor(Math.random() * (screenHeight - 50));
      document.getElementById("goop").style.cssText += '--x-position:' + imgLeft + 'px; --y-position:' + imgTop + 'px;';
      document.getElementById("goop").style.cssText += '--deg:' + Math.floor(Math.random() * 360)+'deg';
   }
   return (
      <div className = "container">
         <img className="images"  onLoad={onloadFunction} src={goose} id="goop" alt="goosey"></img>
      </div>
   )
}

export default Image
