import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import './App.css'
import Login from './pages/login/login'
import Register from './pages/register/register'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
