import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Navbar } from './Components/Navbar/Navbar.jsx';
import { Aboutus } from './Pages/About/Aboutus.jsx';
import { CorpProfile } from './Pages/CorpProfile.jsx';
import { Manufacturing } from './Pages/Manufacturing.jsx';
import { Quater } from './Pages/Quater.jsx';
import { Contactus } from './Pages/Contactus.jsx';
import { Footer } from './Components/Footer/Footer.jsx';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
    <Navbar/>
			
			<Routes>
       
        
				<Route path="/" element ={<App />}/>
				<Route path="/about" element ={<Aboutus/>}/>
        <Route path="/profile" element ={<CorpProfile/>}/>
        <Route path="/manufacturing" element ={<Manufacturing/>}/>
        <Route path="/quarter" element ={<Quater/>}/>
        <Route path="/contactus" element ={<Contactus/>}/>
			</Routes>
     
     <Footer/>
			</BrowserRouter>
  </React.StrictMode>,
)
