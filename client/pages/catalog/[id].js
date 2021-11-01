import { useRouter } from 'next/router';
import CategoriesWidget from '../../components/CategoriesWidget/index.js';
import DarkFooter from '../../components/DarkFooter/index.js';
import Footer from '../../components/Footer/index.js';
import Header from '../../components/Header/index.js';
import PopularVariantsWidget from '../../components/PopularVariantsWidget/index.js';
import RecentVariantsWidget from '../../components/RecentVariantsWidget/index.js';
import useScript from '../../hooks/useScript.js';

export default function CatalogVariant() {

    const router = useRouter();




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

        <section class="listing-title-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="listing_sidebar dn db-991">
                            <div class="sidebar_content_details style3">
                                <div class="sidebar_listing_list style2 mobile_sytle_sidebar mb0">
                                    <div class="sidebar_advanced_search_widget">
                                        <h4 class="mb25">Advanced Search <a class="filter_closed_btn float-right" href="#"><small>Hide Filter</small> <span class="flaticon-close"></span></a></h4>
                                        <ul class="sasw_list style2 mb0">
                                            <li class="search_area">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" id="exampleInputName1" placeholder="keyword"></input>
                                                    <label for="exampleInputEmail"><span class="flaticon-magnifying-glass"></span></label>
                                                </div>
                                            </li>
                                            <li class="search_area">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" id="exampleInputEmail" placeholder="Location"></input>
                                                    <label for="exampleInputEmail"><span class="flaticon-maps-and-flags"></span></label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="search_option_two">
                                                    <div class="candidate_revew_select">
                                                        <select class="selectpicker w100 show-tick">
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
                                                <div class="search_option_two">
                                                    <div class="candidate_revew_select">
                                                        <select class="selectpicker w100 show-tick">
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
                                                <div class="small_dropdown2">
                                                    <div id="prncgs" class="btn dd_btn">
                                                        <span>Price</span>
                                                        <label for="exampleInputEmail2"><span class="fa fa-angle-down"></span></label>
                                                    </div>
                                                    <div class="dd_content2">
                                                        <div class="pricing_acontent">
                                                            <input type="text" class="amount" placeholder="$52,239"></input>
                                                            <input type="text" class="amount2" placeholder="$985,14"></input>
                                                            <div class="slider-range"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="search_option_two">
                                                    <div class="candidate_revew_select">
                                                        <select class="selectpicker w100 show-tick">
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
                                                <div class="search_option_two">
                                                    <div class="candidate_revew_select">
                                                        <select class="selectpicker w100 show-tick">
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
                                                <div class="search_option_two">
                                                    <div class="candidate_revew_select">
                                                        <select class="selectpicker w100 show-tick">
                                                            <option>Garages</option>
                                                            <option>Yes</option>
                                                            <option>No</option>
                                                            <option>Others</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="search_option_two">
                                                    <div class="candidate_revew_select">
                                                        <select class="selectpicker w100 show-tick">
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
                                            <li class="min_area style2 list-inline-item">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" id="exampleInputName2" placeholder="Min Area"></input>
                                                </div>
                                            </li>
                                            <li class="max_area list-inline-item">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" id="exampleInputName3" placeholder="Max Area"></input>
                                                </div>
                                            </li>
                                            <li>
                                                <div id="accordion" class="panel-group">
                                                    <div class="panel">
                                                        <div class="panel-heading">
                                                            <h4 class="panel-title">
                                                                <a href="#panelBodyRating" class="accordion-toggle link" data-toggle="collapse" data-parent="#accordion"><i class="flaticon-more"></i> Advanced features</a>
                                                            </h4>
                                                        </div>
                                                        <div id="panelBodyRating" class="panel-collapse collapse">
                                                            <div class="panel-body row">
                                                                <div class="col-lg-12">
                                                                    <ul class="ui_kit_checkbox selectable-list float-left fn-400">
                                                                        <li>
                                                                            <div class="custom-control custom-checkbox">
                                                                                <input type="checkbox" class="custom-control-input" id="customCheck1"></input>
                                                                                <label class="custom-control-label" for="customCheck1">Air Conditioning</label>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div class="custom-control custom-checkbox">
                                                                                <input type="checkbox" class="custom-control-input" id="customCheck4"></input>
                                                                                <label class="custom-control-label" for="customCheck4">Barbeque</label>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div class="custom-control custom-checkbox">
                                                                                <input type="checkbox" class="custom-control-input" id="customCheck10"></input>
                                                                                <label class="custom-control-label" for="customCheck10">Gym</label>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div class="custom-control custom-checkbox">
                                                                                <input type="checkbox" class="custom-control-input" id="customCheck5"></input>
                                                                                <label class="custom-control-label" for="customCheck5">Microwave</label>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div class="custom-control custom-checkbox">
                                                                                <input type="checkbox" class="custom-control-input" id="customCheck6"></input>
                                                                                <label class="custom-control-label" for="customCheck6">TV Cable</label>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div class="custom-control custom-checkbox">
                                                                                <input type="checkbox" class="custom-control-input" id="customCheck2"></input>
                                                                                <label class="custom-control-label" for="customCheck2">Lawn</label>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div class="custom-control custom-checkbox">
                                                                                <input type="checkbox" class="custom-control-input" id="customCheck11"></input>
                                                                                <label class="custom-control-label" for="customCheck11">Refrigerator</label>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div class="custom-control custom-checkbox">
                                                                                <input type="checkbox" class="custom-control-input" id="customCheck3"></input>
                                                                                <label class="custom-control-label" for="customCheck3">Swimming Pool</label>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                    <ul class="ui_kit_checkbox selectable-list float-right fn-400">
                                                                        <li>
                                                                            <div class="custom-control custom-checkbox">
                                                                                <input type="checkbox" class="custom-control-input" id="customCheck12"></input>
                                                                                <label class="custom-control-label" for="customCheck12">WiFi</label>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div class="custom-control custom-checkbox">
                                                                                <input type="checkbox" class="custom-control-input" id="customCheck14"></input>
                                                                                <label class="custom-control-label" for="customCheck14">Sauna</label>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div class="custom-control custom-checkbox">
                                                                                <input type="checkbox" class="custom-control-input" id="customCheck7"></input>
                                                                                <label class="custom-control-label" for="customCheck7">Dryer</label>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div class="custom-control custom-checkbox">
                                                                                <input type="checkbox" class="custom-control-input" id="customCheck9"></input>
                                                                                <label class="custom-control-label" for="customCheck9">Washer</label>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div class="custom-control custom-checkbox">
                                                                                <input type="checkbox" class="custom-control-input" id="customCheck13"></input>
                                                                                <label class="custom-control-label" for="customCheck13">Laundry</label>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div class="custom-control custom-checkbox">
                                                                                <input type="checkbox" class="custom-control-input" id="customCheck8"></input>
                                                                                <label class="custom-control-label" for="customCheck8">Outdoor Shower</label>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div class="custom-control custom-checkbox">
                                                                                <input type="checkbox" class="custom-control-input" id="customCheck15"></input>
                                                                                <label class="custom-control-label" for="customCheck15">Window Coverings</label>
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
                                                <div class="search_option_button">
                                                    <button type="submit" class="btn btn-block btn-thm">Search</button>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb30">
                    <div class="col-lg-7 col-xl-8">
                        <div class="single_property_title mt30-767">
                            <h2>2-х комнатная квартира</h2>
                            <p>Коммунистическая улица, Лиски </p>
                        </div>
                        <div class="dn db-991">
                            <div id="main2">
                                <span id="open2" class="flaticon-filter-results-button filter_open_btn style3"> Show Filter</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 col-xl-4">
                        <div class="single_property_social_share">
                            <div class="price float-left fn-400">
                                <h2>1 300 000 ₽</h2>
                            </div>
                            <div class="spss style2 mt20 text-right tal-400">
                                <ul class="mb0">
                                    <li class="list-inline-item"><a href="#"><span class="flaticon-share"></span></a></li>
                                    <li class="list-inline-item"><a href="#"><span class="flaticon-printer"></span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-7 col-lg-8">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="spls_style_two mb30-520">
                                    <a class="popup-img" href="images/property/1.jpg"><img class="img-fluid w100"  src="/images/property/1.jpg" alt="1.jpg"></img></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-5 col-lg-4">
                        <div class="row">
                            <div class="col-sm-6 col-lg-6">
                                <div class="spls_style_two mb30">
                                    <a class="popup-img" href="/images/property/2.jpg"><img class="img-fluid w100"  src="/images/property/2.jpg" alt="2.jpg"></img></a>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg-6">
                                <div class="spls_style_two mb30">
                                    <a class="popup-img" href="/images/property/3.jpg"><img class="img-fluid w100"  src="/images/property/3.jpg" alt="3.jpg"></img></a>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg-6">
                                <div class="spls_style_two mb30">
                                    <a class="popup-img" href="/images/property/4.jpg"><img class="img-fluid w100"  src="/images/property/4.jpg" alt="4.jpg"></img></a>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg-6">
                                <div class="spls_style_two mb30">
                                    <a class="popup-img" href="/images/property/5.jpg"><img class="img-fluid w100"  src="/images/property/5.jpg" alt="5.jpg"></img></a>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg-6">
                                <div class="spls_style_two mb30">
                                    <a class="popup-img" href="/images/property/6.jpg"><img class="img-fluid w100"  src="/images/property/6.jpg" alt="6.jpg"></img></a>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg-6">
                                <div class="spls_style_two mb30">
                                    <a class="popup-img" href="/images/property/7.jpg"><img class="img-fluid w100"  src="/images/property/7.jpg" alt="7.jpg"></img></a>
                                    <div class="overlay popup-img">
                                        <h3 class="title">+20</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="our-agent-single bgc-f7 pb30-991">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-lg-8">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="listing_single_description">
                                    <div class="lsd_list">
                                        <ul class="mb0">
                                            <li class="list-inline-item"><a href="#">Квартира</a></li>
                                            <li class="list-inline-item"><a href="#">Комнат: 4</a></li>
                                            <li class="list-inline-item"><a href="#">Ванных: 2</a></li>
                                            <li class="list-inline-item"><a href="#">Площадь: 5280 м2</a></li>
                                        </ul>
                                    </div>
                                    <h4 class="mb30">Описание</h4>
                                    <p class="mb25">Evans Tower very high demand corner junior one bedroom plus a large balcony boasting full open NYC views. You need to see the views to believe them. Mint condition with new hardwood floors. Lots of closets plus washer and dryer.</p>
                                    <p class="gpara second_para white_goverlay mt10 mb10">Fully furnished. Elegantly appointed condominium unit situated on premier location. PS6. The wide entry hall leads to a large living room with dining area. This expansive 2 bedroom and 2 renovated marble bathroom apartment has great windows. Despite the interior views, the apartments Southern and Eastern exposures allow for lovely natural light to fill every room. The master suite is surrounded by handcrafted milkwork and features incredible walk-in closet and storage space.</p>
                                    <div class="collapse" id="collapseExample">
                                        <div class="card card-body">
                                            <p class="mt10 mb10">Fully furnished. Elegantly appointed condominium unit situated on premier location. PS6. The wide entry hall leads to a large living room with dining area. This expansive 2 bedroom and 2 renovated marble bathroom apartment has great windows. Despite the interior views, the apartments Southern and Eastern exposures allow for lovely natural light to fill every room. The master suite is surrounded by handcrafted milkwork and features incredible walk-in closet and storage space.</p>
                                            <p class="mt10 mb10">Fully furnished. Elegantly appointed condominium unit situated on premier location. PS6. The wide entry hall leads to a large living room with dining area. This expansive 2 bedroom and 2 renovated marble bathroom apartment has great windows. Despite the interior views, the apartments Southern and Eastern exposures allow for lovely natural light to fill every room. The master suite is surrounded by handcrafted milkwork and features incredible walk-in closet and storage space.</p>
                                        </div>
                                    </div>
                                    <p class="overlay_close">
                                        <a class="text-thm fz14" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        Показать больше <span class="flaticon-download-1 fz12"></span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="additional_details">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <h4 class="mb15">Характеристики</h4>
                                        </div>
                                        <div class="col-md-6 col-lg-6 col-xl-4">
                                            <ul class="list-inline-item">
                                                <li><p>ID :</p></li>
                                                <li><p>Цена :</p></li>
                                                <li><p>Площадь :</p></li>
                                            </ul>
                                            <ul class="list-inline-item">
                                                <li><p><span>{router.query.id}</span></p></li>
                                                <li><p><span>130 000 ₽</span></p></li>
                                                <li><p><span>1560 м2</span></p></li>
                                            </ul>
                                        </div>
                                        <div class="col-md-6 col-lg-6 col-xl-4">
                                            <ul class="list-inline-item">
                                                <li><p>Комнат :</p></li>
                                                <li><p>Ванных :</p> </li>
                                                <li><p>Гаражей :</p> </li>
                                            </ul>
                                            <ul class="list-inline-item">
                                                <li><p><span>8</span></p> </li>
                                                <li><p><span>4</span></p> </li>
                                                <li><p><span>2</span></p> </li>
                                            </ul>
                                        </div>
                                        <div class="col-md-6 col-lg-6 col-xl-4">
                                            <ul class="list-inline-item">
                                                <li><p>Статус :</p> </li>
                                                <li><p>Тип объекта :</p> </li>
                                            </ul>
                                            <ul class="list-inline-item">
                                                <li><p><span>В продаже</span></p> </li>
                                                <li><p><span>Квартира</span></p> </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="application_statics mt30">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <h4 class="mb10">Подробности</h4>
                                        </div>
                                        <div class="col-sm-6 col-md-6 col-lg-4">
                                            <ul class="order_list list-inline-item">
                                                <li><a href="#"><span class="flaticon-tick"></span>Кондиционер</a></li>
                                                <li><a href="#"><span class="flaticon-tick"></span>Barbeque</a></li>
                                                <li><a href="#"><span class="flaticon-tick"></span>Dryer</a></li>
                                                <li><a href="#"><span class="flaticon-tick"></span>Gym</a></li>
                                                <li><a href="#"><span class="flaticon-tick"></span>Laundry</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-sm-6 col-md-6 col-lg-4">
                                            <ul class="order_list list-inline-item">
                                                <li><a href="#"><span class="flaticon-tick"></span>Lawn</a></li>
                                                <li><a href="#"><span class="flaticon-tick"></span>Микроволновка</a></li>
                                                <li><a href="#"><span class="flaticon-tick"></span>Outdoor Shower</a></li>
                                                <li><a href="#"><span class="flaticon-tick"></span>Refrigerator</a></li>
                                                <li><a href="#"><span class="flaticon-tick"></span>Sauna</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-sm-6 col-md-6 col-lg-4">
                                            <ul class="order_list list-inline-item">
                                                <li><a href="#"><span class="flaticon-tick"></span>Бассейн</a></li>
                                                <li><a href="#"><span class="flaticon-tick"></span>TV Cable</a></li>
                                                <li><a href="#"><span class="flaticon-tick"></span>Washer</a></li>
                                                <li><a href="#"><span class="flaticon-tick"></span>WiFi</a></li>
                                                <li><a href="#"><span class="flaticon-tick"></span>Window Coverings</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="application_statics mt30">
                                    <h4 class="mb30">Расположение <small class="float-right">Коммунистическая улица, Лиски</small></h4>
                                    <div class="property_video p0">
                                        <div class="thumb">
                                            <div class="h400" id="map-canvas"></div>
                                            <div class="overlay_icon">
                                                <a href="#"><img class="map_img_icon"  src="/images/header-logo.png" alt="header-logo.png"></img></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-xl-4">
                        
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