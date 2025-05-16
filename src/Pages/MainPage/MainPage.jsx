import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import iconsearch from '../../Images/icons/icon-search.png'
import iconflasf from '../../Images/icons/icon-1.png'
import products from '../../Data/Databook'
import productsTo from '../../Data/Databookto'
import DivMain from './StyledMainPage/DivMain'
import DivBox from './StyledMainPage/DivBox'
import DivMargin from './StyledMainPage/DivMargin'
import DivDisPlay from './StyledMainPage/DivDisPlay'
import DivOpinions from './StyledMainPage/DivOpinions'
import DivItem from './StyledMainPage/DivItem'
import DivTitle from './StyledMainPage/DivTitle'
import Input from './StyledMainPage/Input'
import Img from './StyledMainPage/Img'
import Span from './StyledMainPage/Span'
import PItem from './StyledMainPage/PItem'
import DivLain from './StyledMainPage/DivLain'
import TextArea from './StyledMainPage/TeaxArea'
import P from './StyledMainPage/P'
import imgwon from '../../Images/img-main-page/img-2.png'
import imgto from '../../Images/img-main-page/img-3.png'
import './MainPage.css'
import Button from './StyledMainPage/Button'

const MainPage = () => {
  return (
    <div>
        <Header />
        <DivMain>
          <DivBox justify='space-between'>
              <DivBox 
              width='900px' 
              height='60px' 
              background='#000'
              justify='space-around'
              borderr='20px 0px 0px 20px'
              >
                <Button background='#000' color='#fff' border='none'><p>صفحه اصلی</p></Button>
                <Button background='#000' color='#fff' border='none'><p>کتابخانه من</p></Button>
                <Button background='#000' color='#fff' border='none'><p>ورود / ثبت نام</p></Button>
                <Button background='#000' color='#fff' border='none'><p>تماس باما</p></Button>
                <Button background='#000' color='#fff' border='none'><p>درباره ما</p></Button>
              </DivBox>
              <DivBox 
              width='420px'
              height='45px'
              borderr='50px'
              marginl='100px'
              border='2px solid #707070'
              >
                <DivBox>
                        <Button 
                        width='30px'
                        background='#fff'
                        marginr='20px'
                        border='none'
                        >
                          <Img width='20px' src={iconsearch} alt="" />
                        </Button>
                        <Input 
                        border='none' 
                        width='340px' 
                        height='25px' 
                        marginr='20px'
                        borderr='50px'
                        type='text' 
                        placeholder='جستجو کنید...'
                        />
                </DivBox>
              </DivBox>
            </DivBox>
                <DivBox
                width='100%'
                height='500px'
                >
                  <div className='div_main_item'>
                      <DivBox 
                      width='100%'
                      height='50px' 
                      background='rgba( 0 , 0, 0, 0.3)' 
                      margint='290px' 
                      borderr='0px 0px 10px 10px'
                      >
                          <h3 style={{color:'#fff'}}>
                          «لودویگ ویتگنشتاین» و گونه‌های ادراک
                          </h3>
                          <Button
                            width='100px'
                            background='rgba( 0 , 0, 0, 0.2)'
                            color='deepskyblue'
                            marginr='180px'
                            border='none'
                          >ادامه مقاله <Img width='20px' marginr='10px' src={iconflasf}/>
                          </Button>
                      </DivBox>
                  </div>
                  <div>
                      <div className='div_item-1'>
                          <div className='profile'>
                            <Img src={imgwon} width='100%' borderr='50%'/>
                          </div>
                          <div className='div_title'>
                              <h4>نگاهی به کتاب «خانم دلوی» اثر «ویرجینیا وولف»</h4>
                              <P font='10px'>رمان «خانم دلوی» به شکل عمده از «دیالوگ درونی» و «جریان سیال ذهن» (تکنیکی مدرنیستی که «وولف» یکی از پیشگامان آن بود) شکل گرفته است.</P>
                              <Button 
                                width='100px'
                                background='rgba( 0 , 0, 0, 0.2)'
                                color='rgb(17, 156, 255)'
                                marginr='350px'
                                border='none'
                              >
                              ادامه مقاله <Img width='20px' marginr='10px' src={iconflasf}/>
                              </Button>
                          </div>
                      </div>
                      <div className='div_item-2'>
                          <div className='profile'>
                            <Img src={imgto} width='100%' borderr='50%'/>
                          </div>
                          <div className='div_title'>
                              <h4>حقایقی از زندگی «جیمز بالدوین»</h4>
                              <P font='10px'>با این مطلب همراه شوید تا درباره‌ی یکی مهم‌ترین نویسندگان آمریکایی در قرن بیستم بیشتر بدانیم.</P>
                              <Button
                                width='100px'
                                background='rgba( 0 , 0, 0, 0.2)'
                                color='rgb(17, 156, 255)'
                                marginr='350px'
                                border='none'
                              >
                              ادامه مقاله <Img width='20px' marginr='10px' src={iconflasf}/>
                              </Button>
                          </div>
                      </div>
                  </div>
                </DivBox>
              <DivBox 
              width='100%'
              height='400px'
              justify='space-around'
              margint='50px'
              >
                <div className='item-1'>
                    <button>
                        خواندن مقاله یا کتاب کلیک کنید
                        <Img width='20px' src={iconflasf}/>
                    </button>
                </div>
                <div className='item-2'>
                    <button>
                      برای ثبت و نوشتن مقاله یا کتاب جدید کلیک کنید
                      <img width='20px' src={iconflasf}/>
                    </button>
                </div>          
              </DivBox>
                <div className='main-product'>
                  <h2>جدید ترین ها.</h2>
                  <DivBox justify='center'>     
                      {products.map((item) => (
                        <DivItem>
                          <Img width='200px' src={item.img}/>
                          <DivLain></DivLain>
                          <PItem>برای خواندن کلیک کنید</PItem>
                        </DivItem>
                      ))
                      }
                  </DivBox>
                </div>
                <div className='main-product'>
                  <h2>داغ ترین ها.</h2>
                  <DivBox justify='center'>     
                      {productsTo.map((item) => (
                        <DivItem>
                          <Img width='200px' src={item.img}/>
                          <DivLain></DivLain>
                          <PItem>برای خواندن کلیک کنید</PItem>
                        </DivItem>
                      ))
                      }
                  </DivBox>
              </div>
              <DivOpinions>
                      <DivTitle>
                          <h2>دیدگاهتان را بنویسید</h2>
                          <p>نشانی ایمیل شما منتشر نخواهد شد ,بخش های مورد نیاز علامت گذاری شده اند<Span>*</Span></p>
                      </DivTitle>
                      <DivMargin marginr='30px' margint='70px'>
                        <div>
                            <p>دیدگاه <Span>*</Span></p>
                            <TextArea />
                        </div>
                        <div>
                            <p>نام<Span>*</Span></p>
                            <Input width='1300px' height='30px' margint='20px' type="text" />
                        </div>
                        <div>
                            <p>ایمیل<Span>*</Span></p>
                            <Input width='1300px' height='30px' margint='20px' type="text" />
                        </div>
                        <div>
                            <p>وب سایت</p>
                            <Input width='1300px' height='30px' margint='20px' type="text" />
                        </div>
                    </DivMargin>
                  <DivDisPlay marginr='50px' margint='70px'>
                    <DivBox>
                      <Input width='30px' type='checkbox'/>
                      <p>ذخیره نام و ایمیل و وب سایت من در مرورگر برای زمانی که دباره نظر مینویسم.</p>
                    </DivBox>
                    <Button 
                    width='130px' 
                    height='40px' 
                    justify='center'
                    border='none'
                    background='#0062ff'
                    color='#fff'
                    borderr='7px'
                    margint='20px'
                    >فرستادن دیدگاه
                    </Button>
                  </DivDisPlay>
              </DivOpinions>
              <div>
                  <Footer />
              </div>
        </DivMain>
    </div>
  )
}

export default MainPage