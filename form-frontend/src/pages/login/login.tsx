import './login.css'
import { useState } from 'react'
import Nav from './components/nav/nav'
import ForgotPassword from './components/forgotpassword/forgotpassword'
import Register from '../register/register'

function Login() {
  const [showForgot, setShowForgot] = useState(false)
  const [showRegister, setShowRegister] = useState(false)

  const toggleForgot = () => {
    setShowForgot(!showForgot)
  }
  const toggleRegister = () => {
    setShowRegister(!showRegister)
  }

  return (
    <>
      {showForgot ? (
        <ForgotPassword clickForgot={toggleForgot}/>
      ) : showRegister ? (
        <Register />
      ) : (
        <>
          <Nav clickForgot={toggleForgot} clickRegister={toggleRegister} />
        </>
      )}
      <div className='image-dynamic'></div>
    </>
  )
}
export default Login