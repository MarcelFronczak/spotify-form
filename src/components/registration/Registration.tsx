import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
import './registration.scss'

const Registration: React.FC = () => {
  return (
    <div>
      <form className='registration_form'>
        <p className="spotify_heading">Spotify</p>
        <h1 className="font_xxl">Sign up for free to start
listening.</h1>
      </form>
      {/* <a href="#" className="button_facebook">
        <div>
          <FontAwesomeIcon icon={faFacebook} className='facebook_icon'/>
          <p className='font_l'>Sign up with Facebook</p>
        </div>
      </a>
      <a href="#" className="button_google">
        <div>
          <FontAwesomeIcon icon={faGoogle} className='google_icon'/>
          <p className='font_l'>Sign up with Google</p>
        </div>
      </a> */}
    </div>
  )
}

export default Registration
