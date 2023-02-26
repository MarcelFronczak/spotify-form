import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

const Registration: React.FC = () => {
  return (
    <div>
      <a href="#" className="button_facebook">
        <div>
          <FontAwesomeIcon icon={faFacebook} className='facebook_icon'/>
          <p className='font_l'>Sign up with Facebook</p>
        </div>
      </a>
    </div>
  )
}

export default Registration
