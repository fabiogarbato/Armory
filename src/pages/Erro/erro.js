import './erro.css' 
import Menubar from '../Menubar/menubar'
import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Erro(){
    return(      
        <div>
            <Menubar />
            <Container fluid style={{ position: 'relative', height: '60vh', display: 'flex', justifyContent: 'center' }}>
                <Row className="align-items-center">
                    <Col className='error-text'>ERRO - 404 PAGINA NÃO ENCONTRADA</Col>
                </Row>
            </Container>
        </div>                
    )
}

export default Erro;