import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
  return (
    <footer className='footer w-75'>
        <i>
            <FontAwesomeIcon icon={faInstagram} />
        </i>
    </footer>
  )
}
