import './erro.css' 
import React, {useState} from 'react';
import Navigation from '../Utils/navigation';

function Erro(){
    return(      
        <div className='container'>
            <Navigation/> 
            <div className='Content-container-error'>
                <div className='text-error'>ERRO 404 - PÁGINA NÃO ENCONTRADA</div>  
            </div>
        </div>                      
    )
}

export default Erro;