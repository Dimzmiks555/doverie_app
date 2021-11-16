import { useRouter } from 'next/router';
import { useEffect } from 'react';
import CategoriesWidget from '../../components/CategoriesWidget/index.js';
import DarkFooter from '../../components/DarkFooter/index.js';
import Footer from '../../components/Footer/index.js';
import Header from '../../components/Header/index.js';
import PopularVariantsWidget from '../../components/PopularVariantsWidget/index.js';
import RecentVariantsWidget from '../../components/RecentVariantsWidget/index.js';
import useScript from '../../hooks/useScript.js';

export default function CatalogVariant({ data }) {

    const router = useRouter();

    useEffect(() => {
        console.log('fail')
      if (typeof window != 'undefined') {
          document.body.classList.remove('maxw1600')
          document.body.classList.remove('m0a')
      }
    }, [])
    
    useScript('/js/jquery-3.3.1.js');
    useScript('/js/jquery-migrate-3.0.0.min.js');
    useScript('/js/popper.min.js');
    useScript('/js/bootstrap.min.js');
    useScript('/js/jquery.mmenu.all.js');
    useScript('/js/ace-responsive-menu.js');
    useScript('/js/bootstrap-select.min.js');
    useScript('/js/isotop.js');
    useScript('/js/snackbar.min.js');
    useScript('/js/simplebar.js');
    useScript('/js/parallax.js');
    useScript('/js/slider.js');
    useScript('/js/wow.min.js');
    useScript('/js/jquery.counterup.js');
    useScript('/js/timepicker.js');
    useScript('/js/jquery-scrolltofixed-min.js');
    useScript('/js/script.js');


    return (
        <>
        <Header/>

        <section className="listing-title-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="listing_sidebar dn db-991">
                            <div className="sidebar_content_details style3">
                                <div className="sidebar_listing_list style2 mobile_sytle_sidebar mb0">
                                    <div className="sidebar_advanced_search_widget">
                                        <h4 className="mb25">Advanced Search <a className="filter_closed_btn float-right" href="#"><small>Hide Filter</small> <span className="flaticon-close"></span></a></h4>
                                        <ul className="sasw_list style2 mb0">
                                            <li className="search_area">
                                                <div className="htmlForm-group">
                                                    <input type="text" className="htmlForm-control" id="exampleInputName1" placeholder="keyword"></input>
                                                    <label htmlFor="exampleInputEmail"><span className="flaticon-magnifying-glass"></span></label>
                                                </div>
                                            </li>
                                            <li className="search_area">
                                                <div className="htmlForm-group">
                                                    <input type="text" className="htmlForm-control" id="exampleInputEmail" placeholder="Location"></input>
                                                    <label htmlFor="exampleInputEmail"><span className="flaticon-maps-and-flags"></span></label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="search_option_two">
                                                    <div className="candidate_revew_select">
                                                        <select className="selectpicker w100 show-tick">
                                                            <option>Status</option>
                                                            <option>Apartment</option>
                                                            <option>Bungalow</option>
                                                            <option>Condo</option>
                                                            <option>House</option>
                                                            <option>Land</option>
                                                            <option>Single Family</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="search_option_two">
                                                    <div className="candidate_revew_select">
                                                        <select className="selectpicker w100 show-tick">
                                                            <option>Property Type</option>
                                                            <option>Apartment</option>
                                                            <option>Bungalow</option>
                                                            <option>Condo</option>
                                                            <option>House</option>
                                                            <option>Land</option>
                                                            <option>Single Family</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="small_dropdown2">
                                                    <div id="prncgs" className="btn dd_btn">
                                                        <span>Price</span>
                                                        <label htmlFor="exampleInputEmail2"><span className="fa fa-angle-down"></span></label>
                                                    </div>
                                                    <div className="dd_content2">
                                                        <div className="pricing_acontent">
                                                            <input type="text" className="amount" placeholder="$52,239"></input>
                                                            <input type="text" className="amount2" placeholder="$985,14"></input>
                                                            <div className="slider-range"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="search_option_two">
                                                    <div className="candidate_revew_select">
                                                        <select className="selectpicker w100 show-tick">
                                                            <option>Bathrooms</option>
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                            <option>5</option>
                                                            <option>6</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="search_option_two">
                                                    <div className="candidate_revew_select">
                                                        <select className="selectpicker w100 show-tick">
                                                            <option>Bedrooms</option>
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                            <option>5</option>
                                                            <option>6</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="search_option_two">
                                                    <div className="candidate_revew_select">
                                                        <select className="selectpicker w100 show-tick">
                                                            <option>Garages</option>
                                                            <option>Yes</option>
                                                            <option>No</option>
                                                            <option>Others</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="search_option_two">
                                                    <div className="candidate_revew_select">
                                                        <select className="selectpicker w100 show-tick">
                                                            <option>Year built</option>
                                                            <option>2013</option>
                                                            <option>2014</option>
                                                            <option>2015</option>
                                                            <option>2016</option>
                                                            <option>2017</option>
                                                            <option>2018</option>
                                                            <option>2019</option>
                                                            <option>2020</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="min_area style2 list-inline-item">
                                                <div className="htmlForm-group">
                                                    <input type="text" className="htmlForm-control" id="exampleInputName2" placeholder="Min Area"></input>
                                                </div>
                                            </li>
                                            <li className="max_area list-inline-item">
                                                <div className="htmlForm-group">
                                                    <input type="text" className="htmlForm-control" id="exampleInputName3" placeholder="Max Area"></input>
                                                </div>
                                            </li>
                                            <li>
                                                <div id="accordion" className="panel-group">
                                                    <div className="panel">
                                                        <div className="panel-heading">
                                                            <h4 className="panel-title">
                                                                <a href="#panelBodyRating" className="accordion-toggle link" data-toggle="collapse" data-parent="#accordion"><i className="flaticon-more"></i> Advanced features</a>
                                                            </h4>
                                                        </div>
                                                        <div id="panelBodyRating" className="panel-collapse collapse">
                                                            <div className="panel-body row">
                                                                <div className="col-lg-12">
                                                                    <ul className="ui_kit_checkbox selectable-list float-left fn-400">
                                                                        <li>
                                                                            <div className="custom-control custom-checkbox">
                                                                                <input type="checkbox" className="custom-control-input" id="customCheck1"></input>
                                                                                <label className="custom-control-label" htmlFor="customCheck1">Air Conditioning</label>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="custom-control custom-checkbox">
                                                                                <input type="checkbox" className="custom-control-input" id="customCheck4"></input>
                                                                                <label className="custom-control-label" htmlFor="customCheck4">Barbeque</label>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="custom-control custom-checkbox">
                                                                                <input type="checkbox" className="custom-control-input" id="customCheck10"></input>
                                                                                <label className="custom-control-label" htmlFor="customCheck10">Gym</label>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="custom-control custom-checkbox">
                                                                                <input type="checkbox" className="custom-control-input" id="customCheck5"></input>
                                                                                <label className="custom-control-label" htmlFor="customCheck5">Microwave</label>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="custom-control custom-checkbox">
                                                                                <input type="checkbox" className="custom-control-input" id="customCheck6"></input>
                                                                                <label className="custom-control-label" htmlFor="customCheck6">TV Cable</label>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="custom-control custom-checkbox">
                                                                                <input type="checkbox" className="custom-control-input" id="customCheck2"></input>
                                                                                <label className="custom-control-label" htmlFor="customCheck2">Lawn</label>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="custom-control custom-checkbox">
                                                                                <input type="checkbox" className="custom-control-input" id="customCheck11"></input>
                                                                                <label className="custom-control-label" htmlFor="customCheck11">Refrigerator</label>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="custom-control custom-checkbox">
                                                                                <input type="checkbox" className="custom-control-input" id="customCheck3"></input>
                                                                                <label className="custom-control-label" htmlFor="customCheck3">Swimming Pool</label>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                    <ul className="ui_kit_checkbox selectable-list float-right fn-400">
                                                                        <li>
                                                                            <div className="custom-control custom-checkbox">
                                                                                <input type="checkbox" className="custom-control-input" id="customCheck12"></input>
                                                                                <label className="custom-control-label" htmlFor="customCheck12">WiFi</label>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="custom-control custom-checkbox">
                                                                                <input type="checkbox" className="custom-control-input" id="customCheck14"></input>
                                                                                <label className="custom-control-label" htmlFor="customCheck14">Sauna</label>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="custom-control custom-checkbox">
                                                                                <input type="checkbox" className="custom-control-input" id="customCheck7"></input>
                                                                                <label className="custom-control-label" htmlFor="customCheck7">Dryer</label>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="custom-control custom-checkbox">
                                                                                <input type="checkbox" className="custom-control-input" id="customCheck9"></input>
                                                                                <label className="custom-control-label" htmlFor="customCheck9">Washer</label>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="custom-control custom-checkbox">
                                                                                <input type="checkbox" className="custom-control-input" id="customCheck13"></input>
                                                                                <label className="custom-control-label" htmlFor="customCheck13">Laundry</label>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="custom-control custom-checkbox">
                                                                                <input type="checkbox" className="custom-control-input" id="customCheck8"></input>
                                                                                <label className="custom-control-label" htmlFor="customCheck8">Outdoor Shower</label>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="custom-control custom-checkbox">
                                                                                <input type="checkbox" className="custom-control-input" id="customCheck15"></input>
                                                                                <label className="custom-control-label" htmlFor="customCheck15">Window Coverings</label>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="search_option_button">
                                                    <button type="submit" className="btn btn-block btn-thm">Search</button>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb30">
                    <div className="col-lg-7 col-xl-8">
                        <div className="single_property_title mt30-767">
                            <h2>{data.rooms}-комнатная квартира</h2>
                            <p>{data?.street} улица, {data?.city} </p>
                        </div>
                        <div className="dn db-991">
                            <div id="main2">
                                <span id="open2" className="flaticon-filter-results-button filter_open_btn style3"> Show Filter</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-xl-4">
                        <div className="single_property_social_share">
                            <div className="price float-left fn-400">
                                <h2>{data.price?.toLocaleString()} ₽</h2>
                            </div>
                            <div className="spss style2 mt20 text-right tal-400">
                                <button type="button" style={{background: '#00B060', color: '#fff', minWidth: 160}} className="btn dbxshad btn-lg btn-thm circle">Позвонить</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-7 col-lg-8">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="spls_style_two mb30-520">
                                    <a className="popup-img" href="images/property/1.jpg"><img className="img-fluid w100"  src="/images/property/1.jpg" alt="1.jpg"></img></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-5 col-lg-4">
                        <div className="row">
                            <div className="col-sm-6 col-lg-6">
                                <div className="spls_style_two mb30">
                                    <a className="popup-img" href="/images/property/2.jpg"><img className="img-fluid w100"  src="/images/property/2.jpg" alt="2.jpg"></img></a>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-6">
                                <div className="spls_style_two mb30">
                                    <a className="popup-img" href="/images/property/3.jpg"><img className="img-fluid w100"  src="/images/property/3.jpg" alt="3.jpg"></img></a>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-6">
                                <div className="spls_style_two mb30">
                                    <a className="popup-img" href="/images/property/4.jpg"><img className="img-fluid w100"  src="/images/property/4.jpg" alt="4.jpg"></img></a>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-6">
                                <div className="spls_style_two mb30">
                                    <a className="popup-img" href="/images/property/5.jpg"><img className="img-fluid w100"  src="/images/property/5.jpg" alt="5.jpg"></img></a>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-6">
                                <div className="spls_style_two mb30">
                                    <a className="popup-img" href="/images/property/6.jpg"><img className="img-fluid w100"  src="/images/property/6.jpg" alt="6.jpg"></img></a>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-6">
                                <div className="spls_style_two mb30">
                                    <a className="popup-img" href="/images/property/7.jpg"><img className="img-fluid w100"  src="/images/property/7.jpg" alt="7.jpg"></img></a>
                                    <div className="overlay popup-img">
                                        <h3 className="title">+20</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="our-agent-single bgc-f7 pb30-991">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-8">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="listing_single_description">
                                    <div className="lsd_list">
                                        <ul className="mb0">
                                            <li className="list-inline-item"><a href="#">{data.type}</a></li>
                                            <li className="list-inline-item"><a href="#">Комнат: {data.rooms}</a></li>
                                            <li className="list-inline-item"><a href="#">Площадь: {data.square} м2</a></li>
                                        </ul>
                                    </div>
                                    <h4 className="mb30">Описание</h4>
                                    <p className="mb25">{data.description}</p>
                                    {/* <p className="gpara second_para white_goverlay mt10 mb10">Fully furnished. Elegantly appointed condominium unit situated on premier location. PS6. The wide entry hall leads to a large living room with dining area. This expansive 2 bedroom and 2 renovated marble bathroom apartment has great windows. Despite the interior views, the apartments Southern and Eastern exposures allow htmlFor lovely natural light to fill every room. The master suite is surrounded by handcrafted milkwork and features incredible walk-in closet and storage space.</p> */}
                                    {/* <div className="collapse" id="collapseExample">
                                        <div className="card card-body">
                                            <p className="mt10 mb10">Fully furnished. Elegantly appointed condominium unit situated on premier location. PS6. The wide entry hall leads to a large living room with dining area. This expansive 2 bedroom and 2 renovated marble bathroom apartment has great windows. Despite the interior views, the apartments Southern and Eastern exposures allow htmlFor lovely natural light to fill every room. The master suite is surrounded by handcrafted milkwork and features incredible walk-in closet and storage space.</p>
                                            <p className="mt10 mb10">Fully furnished. Elegantly appointed condominium unit situated on premier location. PS6. The wide entry hall leads to a large living room with dining area. This expansive 2 bedroom and 2 renovated marble bathroom apartment has great windows. Despite the interior views, the apartments Southern and Eastern exposures allow htmlFor lovely natural light to fill every room. The master suite is surrounded by handcrafted milkwork and features incredible walk-in closet and storage space.</p>
                                        </div>
                                    </div>
                                    <p className="overlay_close">
                                        <a className="text-thm fz14" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        Показать больше <span className="flaticon-download-1 fz12"></span>
                                        </a>
                                    </p> */}
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="additional_details">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <h4 className="mb15">Характеристики</h4>
                                        </div>
                                        <div className="col-md-6 col-lg-6 col-xl-4">
                                            <ul className="list-inline-item">
                                                <li><p>ID :</p></li>
                                                <li><p>Цена :</p></li>
                                                <li><p>Площадь :</p></li>
                                            </ul>
                                            <ul className="list-inline-item">
                                                <li><p><span>{router.query.id}</span></p></li>
                                                <li><p><span>{data.price} ₽</span></p></li>
                                                <li><p><span>{data.square} м2</span></p></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6 col-lg-6 col-xl-4">
                                            <ul className="list-inline-item">
                                                <li><p>Комнат :</p></li>
                                                {/* <li><p>Ванных :</p> </li>
                                                <li><p>Гаражей :</p> </li> */}
                                            </ul>
                                            <ul className="list-inline-item">
                                                <li><p><span>{data.rooms}</span></p> </li>
                                                {/* <li><p><span>4</span></p> </li> */}
                                                {/* <li><p><span>2</span></p> </li> */}
                                            </ul>
                                        </div>
                                        <div className="col-md-6 col-lg-6 col-xl-4">
                                            <ul className="list-inline-item">
                                                <li><p>Статус :</p> </li>
                                                <li><p>Тип объекта :</p> </li>
                                            </ul>
                                            <ul className="list-inline-item">
                                                <li><p><span>В продаже</span></p> </li>
                                                <li><p><span>{data.type}</span></p> </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-lg-12">
                                <div className="application_statics mt30">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <h4 className="mb10">Подробности</h4>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <ul className="order_list list-inline-item">
                                                <li><a href="#"><span className="flaticon-tick"></span>Кондиционер</a></li>
                                                <li><a href="#"><span className="flaticon-tick"></span>Barbeque</a></li>
                                                <li><a href="#"><span className="flaticon-tick"></span>Dryer</a></li>
                                                <li><a href="#"><span className="flaticon-tick"></span>Gym</a></li>
                                                <li><a href="#"><span className="flaticon-tick"></span>Laundry</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <ul className="order_list list-inline-item">
                                                <li><a href="#"><span className="flaticon-tick"></span>Lawn</a></li>
                                                <li><a href="#"><span className="flaticon-tick"></span>Микроволновка</a></li>
                                                <li><a href="#"><span className="flaticon-tick"></span>Outdoor Shower</a></li>
                                                <li><a href="#"><span className="flaticon-tick"></span>Refrigerator</a></li>
                                                <li><a href="#"><span className="flaticon-tick"></span>Sauna</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <ul className="order_list list-inline-item">
                                                <li><a href="#"><span className="flaticon-tick"></span>Бассейн</a></li>
                                                <li><a href="#"><span className="flaticon-tick"></span>TV Cable</a></li>
                                                <li><a href="#"><span className="flaticon-tick"></span>Washer</a></li>
                                                <li><a href="#"><span className="flaticon-tick"></span>WiFi</a></li>
                                                <li><a href="#"><span className="flaticon-tick"></span>Window Coverings</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="col-lg-12">
                                <div className="application_statics mt30">
                                    <h4 className="mb30">Расположение <small className="float-right">Коммунистическая улица, Лиски</small></h4>
                                    <div className="property_video p0">
                                        <div className="thumb">
                                            <div className="h400" id="map-canvas"></div>
                                            <div className="overlay_icon">
                                                <a href="#"><img className="map_img_icon"  src="/images/header-logo.png" alt="header-logo.png"></img></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-xl-4">
                        
                        <PopularVariantsWidget/>
                        <CategoriesWidget/>
                        <RecentVariantsWidget/>
                    </div>
                </div>
            </div>
        </section>


        <DarkFooter/>
        </>
    )
}

export async function getServerSideProps({params}) {
    const res = await fetch(`http://localhost:5000/objects/${params.id}`)
    const data = await res.json()

    return {
        props: {
            data
        }
    }
}