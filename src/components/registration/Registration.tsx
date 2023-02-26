import React from 'react'
// import CustomSelect from './CustomSelect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import './registration.scss'
import GoogleIcon from '../icons8-google-27.svg'

const Registration: React.FC = () => {
  return (
    <div>
      <form className='registration_form'>
        <p className="spotify_heading">Spotify</p>

        <h1 className="font_xxl">Sign up for free to start listening.</h1>

        <div className="buttons">
          <a href="#" className="button_facebook">
            <div>
              <FontAwesomeIcon icon={faFacebook} className='facebook_icon'/>
              <p className='font_l'>Sign up with Facebook</p>
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
            <label htmlFor="email" className='font_m' >What&#39;s your email?</label>
            <input type="text" id='email' placeholder='Enter your email.' />
          </div>
          <div className="input_box">
            <label htmlFor="email_confirm" className='font_m' >Confirm your email</label>
            <input type="text" id='email_confirm' placeholder='Enter your email again.' />   
          </div>
          <div className="input_box">
            <label htmlFor="create_password" className='font_m' >Create a password</label>
            <input type="text" id='create_password' placeholder='Create a password.' />
          </div>
          <div className="input_box">
            <label htmlFor="name" className='font_m' >What should we call you?</label>
            <input type="text" id='name' placeholder='Enter a profile name.' />
          </div>
          <p className="font_s">This appears on your profile.</p>
        </section>

        <section className="birth_container">
          <p className="font_m">What&#39;s your date of birth</p>
          <div className="birth_content_box">
            {/* <CustomSelect /> */}
            {/* <div className="birth_input_box">
              <label htmlFor=""></label>
              <select id="select_list">
                <option value=""></option>
              </select>
            </div> */}
          </div>
        </section>
      </form>

    </div>
  )
}

export default Registration
