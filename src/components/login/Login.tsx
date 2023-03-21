import React, {useState, SyntheticEvent} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faApple } from '@fortawesome/free-brands-svg-icons'
import GoogleIcon from '../icons8-google-27.svg'
import './login.scss'
import {UserAuth} from "@/context/AuthContext";

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { signIn } = UserAuth();

  const handleEmailChange = (e: SyntheticEvent) => {
    setEmail((e.target as HTMLInputElement).value)
  }

  const handlePasswordChange = (e: SyntheticEvent) => {
    setPassword((e.target as HTMLInputElement).value)
  }

  const handleSubmit = async (e: SyntheticEvent) => {
      e.preventDefault();
      setError('')
      try {
        await signIn(email, password);
        navigate('/spotify-form/account');
      } catch (e: any) {
        setError(e.message);
        alert(e.message);
      }
  }

  return (
    <div className='wrap'>
      <form className='login_form' onSubmit={handleSubmit}>
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

        <section className="user_input">
          <div className="input_box">
            <label htmlFor="email_login" className='font_m'>Email address or username</label>
            <input type="text" id='email_login' placeholder='Email address or username' value={email} onInput={handleEmailChange}/>   
          </div>
          <div className="input_box">
            <label htmlFor="password_login" className='font_m' >Password</label>
            <input type="password" id='password_login' placeholder='Password' value={password} onInput={handlePasswordChange}/>
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