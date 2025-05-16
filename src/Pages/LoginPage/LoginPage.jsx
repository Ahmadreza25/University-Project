import React from 'react'
import Header from '../../Components/Header/Header'
import { Link } from 'react-router-dom'
import './LoginPage.css'

const LoginPage = () => {
  return (
    <div>
      <Header />
      <div className='div-main'>
        <div className='nav-button'>
            <div className='div-title-list'>
              <h3>سامانه کتاب</h3>
            </div>
            <div className='div-btns'>
              <button>سوالات متداول</button>
              <button>تماس باما</button>
              <button>راهنما</button>
            </div>
        </div>
        <div className='div-center'>
            <div className='div-login'>
              <div className='main-login'>
                  <h2>ورود</h2>
                  <div>
                    <p>نام*</p>
                    <input />
                  </div>
                  <div>
                    <p>نام خانوادگی*</p>
                    <input />
                  </div>
                  <Link to='/main'>
                    <button>ورود</button>
                  </Link>
              </div>
            </div>
            <div className='div-registration'>
                <div className='main-registration'>
                  <h2>ثبت نام</h2>
                  <div>
                    <p>نام*</p>
                    <input />
                  </div>
                  <div>
                    <p>نام خانوادگی*</p>
                    <input />
                  </div>
                  <div>
                    <p>کدملی</p>
                    <input />
                  </div>
                  <Link to='/main'>
                    <button>ثبت نام</button>
                  </Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage