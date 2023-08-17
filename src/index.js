import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Banking from './activities/banking/Banking';
import Agriculture from './activities/agriculture/Agriculture';
import Production from './activities/production/Production';
import Medical from './activities/medical/Medical';
import Marketing from './activities/marketing/Marketing';
import Trades from './activities/trades/Trades';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    
    <BrowserRouter>

        <Routes>
        
            <Route path='/' element={<App/>}>                
                <Route path="/" element={ <Navigate to="/banking" /> } />
                <Route path='/banking' element={<Banking/>} />
                <Route path='/agriculture' element={<Agriculture/>} />
                <Route path='/production' element={<Production/>} />
                <Route path='/medical' element={<Medical/>} />
                <Route path='/marketing' element={<Marketing/>} />
                <Route path='/trades' element={<Trades/>} />
            </Route>

        </Routes>

    </BrowserRouter>
);