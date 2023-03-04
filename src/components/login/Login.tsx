import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faApple } from '@fortawesome/free-brands-svg-icons'
import GoogleIcon from '../icons8-google-27.svg'
import './login.scss'

const Login: React.FC = () => {

  return (
    <div className='wrap'>
      <form className='login_form'>
        <p className="spotify_heading">Spotify</p>

        <h4 className="font_l">Please sign in to Spotify to continue.</h4>

        <div className="buttons">
          <a href="#" className="button_facebook">
            <div>
              <FontAwesomeIcon icon={faFacebook} className='facebook_icon'/>
              <p className='font_l'>Sign up with Facebook</p>
            </div>
          </a>
          <a href="#" className="button_apple">
            <div>
              <FontAwesomeIcon icon={faApple} className='apple_icon'/>
              <p className='font_l'>Sign up with Apple</p>
            </div>
          </a>
          <a href="#" className="button_google">
            <div>
              <img src={GoogleIcon} alt="" />
              <p className='font_l'>Sign up with Google</p>
            </div>
          </a>
        </div>

        <div className="separation">
          <hr className="line"></hr>  
          <p className='font_l_regular'>or</p>
          <hr className="line"></hr>
        </div>

        <h2 className='font_xl'>Sign up with you email address</h2>

        <section className="user_input">
          <div className="input_box">
            <label htmlFor="email_login" className='font_m'>Email address or username</label>
            <input type="text" id='email_login' placeholder='Email address or username' />   
          </div>
          <div className="input_box">
            <label htmlFor="password_login" className='font_m' >Password</label>
            <input type="text" id='password_login' placeholder='Password' />
          </div>
          <a href='#' className="font_s">Do not you remember your password?</a>
        </section>

        <section className="sign_in_container">
          <label className="remember_me_checkbox font_s">Remember me
            <input type="checkbox" />
            <span className="geekmark"></span>
          </label>
          <button type='submit' className="sign_up_button">Sign up</button>
        </section>

        <div className="separator"></div>
        <p className="font_xl">You don&#39;t have account yet?</p>
        <Link to='/spotify-form/' className="sign_up_button_redirect">Sign up for spotify</Link>
        <p className="non_visible">nnnnnnnnnnnnnnnn nnnnnnnnnnnnnnnnnnnn nnnnnnnnnnnnnnnnn</p>   
      </form>

    </div>
  )
}

export default Login