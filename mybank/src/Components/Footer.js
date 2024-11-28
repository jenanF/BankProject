import React from 'react'
import '../style.css'
import logo from '../images/banklogonav.jpg'

const Footer = () => {
    return (
        <footer className='footter'>
            <div className='footer'>
                <div>
                    <img height={200} src={logo}></img>
                </div>

                <div className='footer-items-div'>
                    <p className='footer-items'>About</p>
                    <p className='footer-items'>Privacy Policy</p>
                    <p className='footer-items'>Licensing</p>
                    <p className='footer-items'>Contact</p>
                </div>
            </div>
            <div className='cite'>
                <cite>2024 CODED . All Rights Reserved</cite>
            </div>
        </footer>
    )
}

export default Footer
