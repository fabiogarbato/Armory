import './estrutura.css';
import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import imagem1 from '../../images/fabricantes/BERETTA.png'
import imagem2 from '../../images/fabricantes/Bersa.png'
import imagem3 from '../../images/fabricantes/boito.png'
import imagem4 from '../../images/fabricantes/Caracal.png'
import imagem5 from '../../images/fabricantes/Colt.png'
import imagem6 from '../../images/fabricantes/FN.gif'
import imagem7 from '../../images/fabricantes/Girsan.jpg'
import imagem8 from '../../images/fabricantes/Glock.jpg'
import imagem9 from '../../images/fabricantes/glock-old.jpg'
import imagem10 from '../../images/fabricantes/GRAND-POWER-Logo-2012..jpg'
import imagem11 from '../../images/fabricantes/HATSAN.jpg'
import imagem12 from '../../images/fabricantes/HECKER & KOCH.png'
import imagem13 from '../../images/fabricantes/Imbel.jpg'
import imagem15 from '../../images/fabricantes/Mossberg.jpg'
import imagem16 from '../../images/fabricantes/REMINGTON.jpg'
import imagem17 from '../../images/fabricantes/RUGER.png'
import imagem18 from '../../images/fabricantes/SAVAGE.png'
import imagem19 from '../../images/fabricantes/SIG-logo.png'
import imagem20 from '../../images/fabricantes/SPRINGFIELD.jpeg'
import imagem21 from '../../images/fabricantes/SW.png'
import imagem22 from '../../images/fabricantes/Taurus.jpg'
import Navigation from '../Utils/navigation';

import { useState, useEffect } from 'react';
import {motion, useAnimation } from 'framer-motion'

const images = [imagem1, imagem2, imagem3, imagem4, imagem5, imagem6, imagem7, imagem8, imagem9, imagem10, imagem11, imagem12, imagem13, imagem15, imagem16, imagem17, imagem18, imagem19, imagem20, imagem21, imagem22]

function Estrutura() {

  const carrossel = useRef();
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth)
  }, [])

  return (
    <div className='container'>
      <Navigation/> 
      <div className='container_body'>
        <div className='row-1'>
            <div className='img1'></div>
            <div className='text-container'>
                <div className='text-name-img1'>Realismo</div>
            </div>
        </div>              
        <div className='row-2'>
            <div className='text-container'>
                <div className='text-name-img2'>Visibilidade mais assertiva</div>
            </div>
            <div className='img2'></div>            
        </div>      
        <div className='row-3'>
            <div className='img3'></div>
            <div className='text-container'>
                <div className='text-name-img3'>Noção de profundidade</div>
            </div>
        </div>    
        <div className='row-4'>
            <div className='text-container'>
                <div className='text-name-img4'>Melhor enquadramento nas áreas predefinido</div>
            </div>
            <div className='img4'></div>            
        </div>                     
        <div className='row-5'>
            <div className='img5'></div>
            <div className='text-container'>
                <div className='text-name-img5'>Visualização mais ampla na cadência de tiro</div>
            </div>
        </div> 
        <div className='fabricante-container'>
                <div className='fabricante-text'>Fabricantes</div>
        </div> 
        <div className="carrossel-container">            
            <motion.div ref={carrossel} className='carrossel-img' whileTap={{ cursor: "grabbing"}}>
                <motion.div
                className='inner'                
                drag="x"
                dragConstraints={{ right: 0, left: -width}}
                initial={{ x: 100 }}
                animate={{ x: 0}}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}                
                >

                    {images.map(image => (
                        <motion.div className='item' key={image}>
                            <img src={image} alt="Text alt"/>
                        </motion.div>
                    ))}

                </motion.div>

            </motion.div>
        </div>                     
      </div>         
    </div>
  );
}

export default Estrutura;
