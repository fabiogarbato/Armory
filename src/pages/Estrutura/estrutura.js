import Menubar from '../Menubar/menubar'
import 'bootstrap/dist/css/bootstrap.min.css';
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
import humanoide1 from '../../images/humanoide1.jpeg'
import humanoide2 from '../../images/humanoide2.jpeg'
import humanoide3 from '../../images/humanoide3.jpeg'
import humanoide4 from '../../images/humanoide4.jpeg'
import estrutura from '../../images/estrutura.jpeg'
import { useState, useEffect } from 'react';
import { Container, Row, Col, Carousel, Image } from 'react-bootstrap';
import './estrutura.css';

const images = [imagem1, imagem2, imagem3, imagem4, imagem5, imagem6, imagem7, imagem8, imagem9, imagem10, imagem11, imagem12, imagem13, imagem15, imagem16, imagem17, imagem18, imagem19, imagem20, imagem21, imagem22];

function Estrutura() {
  return (
    <div style={{ maxHeight: '100vh', overflow: 'auto' }}>
      <Menubar />
      <Container>
        <Row className='mb-3'>
            <Col md={6}>
                <Image src={humanoide1} alt="Imagem 2" className="img-fluid imagem-custom" />
            </Col>
            <Col md={6}>
                <div className='text-name-img'>Realismo</div>
            </Col>
        </Row>

        <Row className='mb-3'>
            <Col md={6}>
                <div className='text-name-img'>Visibilidade mais assertiva</div>
            </Col>
            <Col md={6}>
                <Image src={humanoide2} alt="Imagem 2" className="img-fluid imagem-custom" />
            </Col>
        </Row>

        <Row className='mb-3'>
            <Col md={6}>
                <Image src={humanoide3} alt="Imagem 2" className="img-fluid imagem-custom" />
            </Col>
            <Col md={6}>
                <div className='text-name-img'>Noção de profundidade</div>
            </Col>
        </Row>

        <Row className='mb-3'>
            <Col md={6}>
                <div className='text-name-img'>Melhor enquadramento nas áreas predefinido</div>
            </Col>
            <Col md={6}>
                <Image src={humanoide4} alt="Imagem 2" className="img-fluid imagem-custom" />
            </Col>
        </Row>

        <Row className='mb-3'>
            <Col md={6}>
                <Image src={estrutura} alt="Imagem 2" className="img-fluid imagem-custom" />
            </Col>
            <Col md={6}>
                <div className='text-name-img'>Visualização mais ampla na cadência de tiro</div>
            </Col>
        </Row>

        <Row>
            <Col>
                <div className='fabricante-text'>Fabricantes</div>
            </Col>
        </Row>

        {/* <Carousel interval={3000} pause={false}>
            {images.map((image, index) => (
            <Carousel.Item key={index}>
                <img
                className="d-block w-100"
                src={image}
                alt={`Slide ${index}`}
                />
            </Carousel.Item>
            ))}
        </Carousel> */}
    </Container>
    </div>
  );
}


export default Estrutura;
