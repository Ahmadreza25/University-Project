import React from 'react'
import logoir from '../../Images/logo/logo-ir.png'
import logoheader from '../../Images/logo/logo-header.png'
import './Header.css'

const Header = () => {
  return (
    <div>
        <div className='main-div'>
            <header className='header'>
                <div className='div-logo'>
                    <img src={logoheader} alt='logo' className='img-logo'/>
                    <p className='title-logo'>سایت کتاب و مقاله.</p>
                </div>
                <div className='div-logo-main'>
                    <img src={logoir} alt="logo" className='img-logo-ir'/>
                </div>
            </header>
        </div>
    </div>
  )
}

export default Header