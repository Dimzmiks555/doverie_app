import Link from 'next/link'
import Head from 'next/head'
import useScript from '../../hooks/useScript';

export default function Header() {


   

    return (
        <>
        <Head>
            <link
            href="https://fonts.googleapis.com/css?family=Nunito:400,400i,600,700&amp;display=swap"
            rel="stylesheet"
            />
        </Head>
        <header className="header-nav menu_style_home_one style2 home3 navbar-scrolltofixed stricky main-menu">
                <div className="container-fluid p0">
                    {/* <!-- Ace Responsive Menu --> */}
                    <nav>
                        {/* <!-- Menu Toggle btn--> */}
                        <div className="menu-toggle">
                            <img className="nav_logo_img img-fluid" src="images/header-logo.png" alt="header-logo.png"></img>
                            <button type="button" id="menu-btn">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <Link href='/'>
                            <a href="/" className="navbar_brand float-left dn-smd">
                                <img className="logo1 img-fluid" src="/images/header-logo2.png" alt="header-logo.png"></img>
                                <img className="logo2 img-fluid" src="/images/header-logo2.png" alt="header-logo2.png"></img>
                                <span>Доверие</span>
                            </a>
                        </Link>
                        {/* <!-- Responsive Menu Structure-->
                        <!--Note: declare the Menu style in the data-menu-style="horizontal" (options: horizontal, vertical, accordion) --> */}
                        <ul id="respMenu" className="ace-responsive-menu text-right" data-menu-style="horizontal">
                            <li>
                                <a href="#">Главная</a>
                                {/* <!-- Level Two--> */}
                                
                            </li>
                            <li>
                                <a href="#"> Каталог</a>
                                {/* <!-- Level Two--> */}
                                <ul>
                                    <li>
                                        <a href="#">Купить</a>
                                        {/* <!-- Level Three--> */}
                                        <ul>
                                            <li><a href="page-listing-grid-v1.html">Дом</a></li>
                                            <li><a href="page-listing-grid-v2.html">Квартиру</a></li>
                                            <li><a href="page-listing-grid-v2.html">Дачу</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Снять</a>
                                        {/* <!-- Level Three--> */}
                                        <ul>
                                            <li><a href="page-listing-list.html">Квартиру</a></li>
                                        </ul>
                                    </li>
                                    
                                </ul>
                            </li>
                            <li>
                                <a href="#"> О нас</a>
                                
                            </li>
                            <li>
                                <a href="#"> Галерея</a>
                                
                            </li>
                            <li className="last">
                                <a href="page-contact.html">Контакты</a>
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
