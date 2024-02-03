import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/home/Home'
import Bio from './components/Bio/Bio'


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/bio' element= {<Bio/>}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
