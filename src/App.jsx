import { useState } from 'react'
import { BrowserRouter ,Routes,Route,} from 'react-router-dom';
import './App.css'
import Carte from './assets/Carte';

function App() {
 return (
    
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<Carte/>} />
   </Routes>
  </BrowserRouter> 
 )
}

export default App
