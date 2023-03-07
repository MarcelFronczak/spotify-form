import React, { useState, useRef, SyntheticEvent } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import './registration.scss'
import GoogleIcon from '../icons8-google-27.svg'

const Registration: React.FC = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const [confirmEmailError, setConfirmEmailError] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const [selectOpen, setSelectOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("");

  const handleEmailChange = (e: SyntheticEvent) => {
    const userEmail = (e.target as HTMLInputElement).value;
    setEmail(userEmail)
    const regex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm"); //eslint-disable-line
    if (regex.test(userEmail) || userEmail.length === 0) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  }

  const handleEmailConfirmation = (e: SyntheticEvent) => {
    const confirmedEmail = (e.target as HTMLInputElement).value;
    if (confirmedEmail === email || confirmedEmail.length === 0) {
      setConfirmEmailError(false)
    } else {
      setConfirmEmailError(true);
    }
  }

  const handlePasswordChange = (e: SyntheticEvent) => {
    const userPassword = (e.target as HTMLInputElement).value;
    setPassword(userPassword);
    if (userPassword.length >= 6 || userPassword.length === 0) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  }

  const handleSelectClick = () => {
    setSelectOpen(!selectOpen);
  }

  const handleSelectMonth = (value: string) => {
    setSelectedMonth(value);
  }

  const Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]

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

        <h2 className='font_xl'>Sign up with your email address</h2>

        <section className="user_input">
          <div className="input_box">
            <label htmlFor="email" className='font_m' >What&#39;s your email?</label>
            <input className={emailError ? "error" : ''} type="text" id='email' placeholder='Enter your email.' value={email} onInput={handleEmailChange}/>
            <p className={emailError ? 'error_message active' : 'error_message'}>Incorrect e-mail</p>          
          </div>
          <div className="input_box">
            <label htmlFor="email_confirm" className='font_m' >Confirm your email</label>
            <input className={confirmEmailError ? "error" : ''} type="text" id='email_confirm' placeholder='Enter your email again.' onInput={handleEmailConfirmation} />
            <p className={confirmEmailError ? 'error_message active' : 'error_message'}>Please provide same e-mail</p>  
          </div>
          <div className="input_box">
            <label htmlFor="create_password" className='font_m' >Create a password</label>
            <input className={passwordError ? 'error' : ''} type="password" id='create_password' placeholder='Create a password.' onInput={handlePasswordChange} />
            <p className={passwordError ? 'error_message active' : 'error_message'}>Password should be at least 6 characters</p>        
          </div>
          <div className="input_box">
            <label htmlFor="name" className='font_m' >What should we call you?</label>
            <input type="text" id='name' placeholder='Enter a profile name.' />
          </div>
          <p className="font_s">This appears on your profile.</p>
        </section>

        <section className="birth_container">
          <p className="font_m">What&#39;s your date of birth?</p>
          <div className="birth_content_box">
            <div className="birth_month_box">
              <label htmlFor="custom_select" className='font_s' >Month</label>
              <button type='button' className={selectedMonth.length !== 0 ? 'custom_select filled' : 'custom_select'} onClick={handleSelectClick}>
                {selectedMonth.length === 0 ? (<p className="select_placeholder">Month</p>) : (<p>{selectedMonth}</p>)}
                <FontAwesomeIcon icon={faChevronDown} className='arrow_icon'/>
                <ul className={selectOpen ? 'select_list open' : 'select_list'}>
                  {Months.map(month => (
                    <li key={month} value={month} onClick={() => handleSelectMonth(month)}>{month}</li>
                  ))}
                </ul>
              </button>
            </div>
            <div className="birth_day_box">
              <label htmlFor="day" className='font_s' >Day</label>
              <input type="text" id="day" placeholder="DD"/>
            </div>
            <div className='birth_year_box'>
              <label htmlFor="year" className='font_s' >Year</label>
              <input type="text" placeholder='YYY'/>
            </div>
          </div>
        </section>

        <section className="gender_container">
          <label className="font_m">What&#39;s your gender?</label>
          <div className="gender_radio_box">
            <div className='radio_box font_s'>
              <input type="radio" name="radio" id='radio1' />
              <label htmlFor='radio1'>Male</label>
            </div>
            <div className='radio_box font_s'>
              <input type="radio" name="radio" id='radio2' />
              <label htmlFor='radio2'>Female</label>
            </div>
            <div className='radio_box font_s'>
              <input type="radio" name="radio" id='radio3' />
              <label htmlFor='radio3'>Non-binary</label>
            </div>
            <div className='radio_box font_s'>
              <input type="radio" name="radio" id='radio4' />
              <label htmlFor='radio4'>Other</label>
            </div>
            <div className='radio_box font_s'>
              <input type="radio" name="radio" id='radio5' />
              <label htmlFor='radio5'>Prefer not to say</label>
            </div>
          </div>
        </section>

        <label className="marketing_checkbox font_s">Share my registration date with Spotify&#39;s content providers for marketing purposes.
          <input type="checkbox" />
          <span className="geekmark"></span>
        </label>

        <section className="terms_privacy_policy_container">
          <p>By clicking on sing-up. you agree to Spotify&#39;s <a href='#'>Terms and Conditions of Use</a>.</p>
          <p>To learn more about how. Spotify collects, uses, shares and protects your personal data, please see <a href='#'>Spotify&#39;s Privacy Policy</a>.</p>
        </section>

        <button type='submit' className="sign_up_button">Sign up</button>

        <p className="redirect_text">Have an account? <Link to='/spotify-form/login/'>Log in</Link></p>

      </form>

    </div>
  )
}

export default Registration
