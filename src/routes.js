import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Erro from './pages/Erro/erro'
import Sobre from './pages/Sobre/sobre'

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home/>}/>
                <Route path='*' element={ <Erro/>}/>
                <Route path='/sobre' element={ <Sobre/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;