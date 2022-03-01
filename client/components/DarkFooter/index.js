import Link from 'next/link'

import Script from 'next/script'

export default function DarkFooter() {
    return (
        <>
        <section className="footer_one">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 pr0 pl0">
                        <div className="footer_about_widget">
                            <h4>О сайте</h4>
                            <p>Мы переосмысливаем, как вы покупаете, продаете и сдаете в аренду. Теперь вам легче попасть в то место, которое вы любите. Так что давайте сделаем это вместе</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                        <div className="footer_qlink_widget">
                            <h4>Информация</h4>
                            <ul className="list-unstyled">
                                <Link href="/about"><li><a href="#">О нас</a></li></Link>
                                <li><a href="#">Правила & Условия</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                        <div className="footer_contact_widget">
                            <h4>Контакты</h4>
                            <ul className="list-unstyled">
                                <li><a href="#"><span className="__cf_email__" data-cfemail="cfa6a1a9a08fa9a6a1aba7a0babcaae1aca0a2">anodaday@yandex.ru</span></a></li>
                                <li><a href="#">город Лиски, ул. Коммунистическая,</a></li>
                                <li><a href="#">д. 12а, Рынок.</a></li>
                                <li><a href="#">+7 900-930-6978</a></li>
                                <li><a href="#">+7 952-548-5722</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                        <div className="footer_social_widget" style={{display: 'flex', marginBottom: 2}}>
                            
                        <img  style={{height: 50, marginRight: 10}} className="logo1 img-fluid" src="/images/header-logo2.svg" alt="header-logo.png"></img>
                        <h2 style={{color: '#fff', fontWeight: 'bold', marginTop: 0}}>Доверие
                        <p style={{color: '#fff', fontSize: 10}}>АГЕНТСТВО НЕДВИЖИМОСТИ</p></h2>
                            {/* <h4>Подписаться</h4>
                            <form className="footer_mailchimp_form">
                                <div className="form-row align-items-center">
                                    <div className="col-auto">
                                        <input type="email" className="form-control mb-2" id="inlineFormInput" placeholder="Ваш email"></input>
                                    </div>
                                    <div className="col-auto">
                                        <button type="submit" className="btn btn-primary mb-2"><i className="fa fa-angle-right"></i></button>
                                    </div>
                                </div>
                            </form> */}
                        </div>
                    </div>
                    
                    
                    {/* <img  style={{height: 50}} className="logo2 img-fluid" src="/images/header-logo2.svg" alt="header-logo2.png"></img> */}
                </div>
            </div>
        </section>

        <section className="footer_middle_area pt40 pb40">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-xl-6">
                        <div className="footer_menu_widget">
                            <ul>
                                <li className="list-inline-item"><Link href='/'><a href="#">Главная</a></Link></li>
                                <li className="list-inline-item"><Link href='/about'><a href="#">О нас</a></Link></li>
                                <li className="list-inline-item"><Link href='/contacts'><a href="#">Контакты</a></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-6">
                        <div className="copyright-widget text-right">
                            <p>© 2020 Доверие - агентство недвижимости в городе Лиски</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    <Script type="text/javascript" src='https://callkeeper.ru/w/?3f65fa81'></Script>
        </>
    )
}