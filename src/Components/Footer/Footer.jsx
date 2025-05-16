import React from 'react'
import DivMain from './StyledFooter/DivMain'
import DivP from './StyledFooter/DivP'
import Img from './StyledFooter/Img'
import instagram from '../../Images/icon-footer/instagram.png'
import linkedin from '../../Images/icon-footer/linkedin.png'
import telegram from '../../Images/icon-footer/telegram.png'
import twitter from '../../Images/icon-footer/twitter.png'
import './Footer.css'

const Footer = () => {
  return (
    <div>
        <DivMain>
            <DivP>
                <h3>راهنمای خرید ازاین سایت</h3>
                <p>ثبت سفارش</p>
                <p>شرایط ارسال سفارش</p>
                <p>شیوه پرداخت</p>
                <p>تخفیف‌های خرید</p>
            </DivP>
            <DivP>
                <h3>خدمات سایت ما.</h3>
                <p>پیگیری سفارش</p>
                <p>پرسش‌های متداول</p>
                <p>بازگرداندن سفارش</p>
                <p>شرایط استفاده</p>
                <p>حریم خصوصی</p>
            </DivP>
            <DivP>
                <h3>021-62999935</h3>
                <p>درباره ما</p>
                <p>تماس با ما</p>
                <p>همکاری در فروش</p>
            </DivP>
            <DivP>
                <h3>سایت ما را در صفحه های مجازی دنبال کنید.</h3>
                <div className='imgs'>
                    <Img src={instagram} alt="" />
                    <Img src={telegram} alt="" />
                    <Img src={twitter} alt="" />
                    <Img src={linkedin} alt="" />
                </div>
            </DivP>
        </DivMain>
    </div>
  )
}

export default Footer