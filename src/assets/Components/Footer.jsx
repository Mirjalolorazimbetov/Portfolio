import React from 'react'
import gmail from '../images/gmail.png'
import insta from '../images/instagram.png'
import telegram from '../images/teelgram.png'
import telefon from '../images/phone.png'

const Footer = () => {
  return (
    <footer className='contact' id='contact'>
        <div className="container">
            <h3 className="contact_title">Contact</h3>
                <ul className="contact_list">
                    <li><a href="mailto:mirjalolorazimbetov@gmail.com" className="contact_link"><img src={gmail} alt="" /></a></li>
                    <li><a href="https://www.instagram.com/mirjalolorazimbetov_/" className="contact_link"><img src={insta} alt="" /></a></li>
                    <li><a href="https://t.me/Ranaldinyoo" className="contact_link"><img src={telegram} alt="" /></a></li>
                    <li><a href="tel:+998913001868" className="contact_link"><img src={telefon} alt="" /></a></li>
                </ul>
            </div>
        
      
    </footer>
  )
}

export default Footer
