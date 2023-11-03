import './nav.css'
import desktopImage from '../../../../../public/images/desktop.svg'
import { Icon } from '@iconify/react'
import { useState } from 'react'
import passwordVisible from '../utils/passwordVisible'

// Tive que criar uma interface para tipar o forgotPassword, afim de trocar o componente sem trocar de página.


interface NavProps {
  clickForgot: () => void;
  clickRegister: () => void;
}

function Nav({ clickForgot, clickRegister }: NavProps) {
  const [emailUser, setEmailUser] = useState('')
  const [password, setPassword] = useState('')

  const { changeEye, eyeStyle, passwordType } = passwordVisible()

  return (
    <>
      <div className='Nav'>
        <div className='background'>
          <section className='container'>
            <img className='desktop-image' src={desktopImage} />
            <h3 className='title-1'>Welcome back!</h3>
            <div className='container-inputs'>
              <Icon icon='charm:person' className='icon' />
              <input
                type='email'
                value={emailUser}
                onChange={(e) => setEmailUser(e.target.value)}
                className='email-username-login inputs'
                placeholder='Username or Email'
              />
            </div>
            <div className='container-inputs'>
              <Icon icon='charm:shield-keyhole' className='icon' />
              <input
                type={passwordType}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='password-login inputs'
                placeholder='Password'
              />
              <Icon
                icon={eyeStyle}
                onClick={changeEye}
                className='icon icon-password'
                />
            </div>
            <p onClick={clickForgot} className='forgot-password'>Forgot your <strong>password</strong>?</p>
            <button
              className='login-button button-process'
              disabled={emailUser === '' || password.length <= 8}
            >
              Login
            </button>
            <p onClick={clickRegister} className='register-password'>Not have an account yet?<strong> Register</strong>!</p>
          </section>
        </div>
      </div>
    </>
  )
}
export default Nav
