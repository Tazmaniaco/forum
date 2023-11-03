import './forgotpassword.css'
import desktopImage from '../../../../../public/images/desktop.svg'
import { Icon } from '@iconify/react'
import passwordVisible from '../utils/passwordVisible'
import { useState } from 'react'

interface Forgot {
  clickForgot: () => void
}

function ForgotPassword({ clickForgot }: Forgot) {
  const { changeEye, eyeStyle, passwordType } = passwordVisible()
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')

  return (
    <>
      <div className='ForgotPassword'>
        <div className='background'>
          <section className='container'>
            <img className='desktop-image' src={desktopImage} />
            <h3 className='title-1'>Change your password.</h3>
            <div className='container-inputs'>
              <Icon icon='charm:person' className='icon' />
              <input
                type='text'
                className='inputs'
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className='container-inputs'>
              <Icon icon='charm:mail' className='icon' />
              <input
                type='email'
                className='inputs'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='container-inputs'>
              <Icon icon='charm:shield-keyhole' className='icon' />
              <input
                type={passwordType}
                className='inputs'
                placeholder='New password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Icon
                icon={eyeStyle}
                onClick={changeEye}
                className='icon icon-password'
              />
            </div>
            <div className='container-inputs'>
              <Icon icon='charm:shield-keyhole' className='icon' />
              <input
                type={passwordType}
                className='inputs'
                placeholder='Confirm new password'
              />
            </div>
            <button
              className='button-process'
              disabled={password.length <= 6 || email === '' || username === ''}
            >
              Confirm
            </button>
            <p onClick={clickForgot} className='login-form'>
              Back!
            </p>
          </section>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword
