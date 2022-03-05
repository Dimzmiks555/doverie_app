import Link from 'next/link'
import Head from 'next/head'
import useScript from '../../hooks/useScript';
import { YMInitializer } from 'react-yandex-metrika';
export default function Header() {


   

    return (
        <>
        <Head>
            <link
            href="https://fonts.googleapis.com/css?family=Nunito:400,400i,600,700&amp;display=swap"
            rel="stylesheet"
            />
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </Head>
        <YMInitializer accounts={[86750009]} />
        <header className="header-nav menu_style_home_one style2 home3 navbar-scrolltofixed stricky main-menu">
                <div className="container-fluid p0">
                    {/* <!-- Ace Responsive Menu --> */}
                    <nav style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', minWidth: '100%'}}>
                        {/* <!-- Menu Toggle btn--> */}
                        <Link href='/'>
                            <a href="/" className="navbar_brand float-left dn-smd">
                                <img  style={{height: 50}} className="logo1 img-fluid" src="/images/header-logo2.svg" alt="header-logo.png"></img>
                                <img  style={{height: 50}} className="logo2 img-fluid" src="/images/header-logo2.svg" alt="header-logo2.png"></img>
                                <h2 style={{color: '#229922', fontWeight: 'bold', marginLeft: 10}}>Доверие <p style={{color: '#333', fontSize: 10, width: 200}}>АГЕНТСТВО НЕДВИЖИМОСТИ</p></h2>
                            </a>
                        </Link>
                        <div>
                            <h6 style={{marginBottom: 2, color: '#00B060', fontWeight: 600}}>Воронежская обл., г. Лиски</h6>
                            <h4 style={{marginBottom: 0, color: '#444', fontWeight: 600}}><a>Коммунистическая, д. 12а, Рынок</a></h4>
                        </div>
                        <div>
                            <h6 style={{marginBottom: 2, color: '#00B060', fontWeight: 600}}>Режим работы с 10:00 до 18:00</h6>
                            <h4 style={{marginBottom: 0, color: '#444', fontWeight: 600}}><a href='tel:89009306978'>+7 900-930-6978</a></h4>
                        </div>
                        {/* <!-- Responsive Menu Structure-->
                        
                        <!--Note: declare the Menu style in the data-menu-style="horizontal" (options: horizontal, vertical, accordion) --> */}
                        <ul id="respMenu" className="ace-responsive-menu " data-menu-style="horizontal">
                            <li>
                                <Link href='/'><a href="#">Главная</a></Link>
                                {/* <!-- Level Two--> */}
                                
                            </li>
                            
                            <li>
                                <Link href='/about'><a href="#"> О нас</a></Link>
                                
                            </li>
                            <li className="last">
                                <Link href='/contacts'><a href="page-contact.html">Контакты</a></Link>
                            </li>
                            {/* <li className="list-inline-item list_s"><a href="#" className="btn flaticon-user" data-toggle="modal" data-target=".bd-example-modal-lg"> <span className="dn-lg text-thm3">Login/Register</span></a></li>
                            <li className="list-inline-item add_listing home2"><a href="#"><span className="flaticon-plus"></span><span className="dn-lg"> Create Listing</span></a></li> */}
                        </ul>
                    </nav>
                </div>
            </header>
            </>
    )
}
