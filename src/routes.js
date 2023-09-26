import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Erro from './pages/Erro/erro'
import Sobre from './pages/Sobre/sobre'
import Contato from './pages/Contato/contato'

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home/>}/>
                <Route path='*' element={ <Erro/>}/>
                <Route path='/sobre' element={ <Sobre/>}/>
                <Route path='/contato' element={ <Contato/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;