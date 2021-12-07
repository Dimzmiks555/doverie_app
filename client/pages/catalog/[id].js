import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head'
import CategoriesWidget from '../../components/CategoriesWidget/index.js';
import DarkFooter from '../../components/DarkFooter/index.js';
import Footer from '../../components/Footer/index.js';
import Header from '../../components/Header/index.js';
import PopularVariantsWidget from '../../components/PopularVariantsWidget/index.js';
import RecentVariantsWidget from '../../components/RecentVariantsWidget/index.js';
import useScript from '../../hooks/useScript.js';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

export default function CatalogVariant({ data, dataPopular }) {

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
    // useScript('/js/popper.min.js');
    useScript('/js/bootstrap.min.js');
    // useScript('/js/jquery.mmenu.all.js');
    useScript('/js/ace-responsive-menu.js');
    // useScript('/js/bootstrap-select.min.js');
    useScript('/js/isotop.js');
    useScript('/js/snackbar.min.js');
    useScript('/js/simplebar.js');
    useScript('/js/parallax.js');
    useScript('/js/slider.js');
    useScript('/js/wow.min.js');
    useScript('/js/jquery.counterup.js');
    useScript('/js/timepicker.js');
    // useScript('/js/jquery-scrolltofixed-min.js');
    useScript('/js/script.js');

    const [open, setOpen] = useState(false);

    const handleModal = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    // function handleModal(e) {

    // }

    return (
        <>
        
        <Head>
            <title>ДОВЕРИЕ - агенство недвижимости в городе Лиски</title>
		    <meta name="description" content="Мы поможем найти Вам свой уютный дом в городе Лиски! Актуальная база объектов, качественное обслуживание и полное сопровождение."></meta>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="keywords" content="купить дом, купить квартиру, доверие, лиски, агенство недвижимости, купить дом в лисках, купить квартиру в лисках, снять квартиру, снять дом, снять квартиру в лисках, снять квартиру лиски, купить дом лиски, продажа домов лиски, купить квартиру лиски, доверие лиски" />
        </Head>
        <Header/>
            <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
            <h4><b>Объект № {data?.id}</b></h4>
            </DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                
                <h4><b>{"+7 (900) 930-69-78 - Светлана Ивановна"}</b></h4>
                <h4><b>{"+7 (952) 548-57-22 - Людмила Тищенко"}</b></h4>
                Позвоните по одному из номеров, назовите номер объекта и менеджер сообщит Вам всю интересующую Вас информацию!
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Закрыть</Button>
            </DialogActions>
        </Dialog>
        <section className="listing-title-area">
            <div className="container">
                
                <div className="row mb30">
                    <div className="col-lg-7 col-xl-8">
                        <div className="single_property_title mt30-767">
                            {data?.type == 'Квартира' ? <h2>{data?.rooms} комнат. {data?.type?.toLowerCase()}</h2> : <h2>{data?.type} {data.square} м<sup>2</sup>, {data.place_square ? data.place_square + ' сот.' : null} {data.level && +data.level != 0 ? data.level + ' этаж' : null}</h2>}
                            <p>{data?.city}{(data?.area != 'нет' && data?.area != '0') && ', район ' + data?.area}</p>
                        </div>
                        {/* <div className="dn db-991">
                            <div id="main2">
                                <span id="open2" className="flaticon-filter-results-button filter_open_btn style3"> Show Filter</span>
                            </div>
                        </div> */}
                    </div>
                    <div className="col-lg-5 col-xl-4">
                        <div className="single_property_social_share" >
                            <div className="price float-left fn-400" style={{marginTop: 6}}>
                                <h2>{data.price?.toLocaleString()} ₽</h2>
                            </div>
                            <div className="spss style2 mt20 text-right tal-400">
                                <button onClick={handleModal} type="button" style={{background: '#00B060', color: '#fff', minWidth: 160}} className="btn dbxshad btn-lg btn-thm circle">Позвонить</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-7 col-lg-8">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="spls_style_two mb30-520" style={{display: 'flex', justifyContent: 'center'}}>
                                    {
                                        data?.images?.length > 0 ? (
                                            <a className="popup-img" href={`${process.env.NEXT_PUBLIC_API_HOST}/${data.images?.find(item => {return item.main == true}) ? data.images?.find(item => {return item.main == true})?.src : data?.images?.[0]?.src}`}><img className="img-fluid" style={{maxHeight: 600, objectFit: 'scale-down', borderRadius: '10px'}} src={`${process.env.NEXT_PUBLIC_API_HOST}/${data.images?.find(item => {return item.main == true}) ? data.images?.find(item => {return item.main == true})?.src : data?.images?.[0]?.src}`} alt="1.jpg"></img></a>
                                        ) : (
                                            <img src='/noPhoto.png'></img>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-5 col-lg-4">
                        <div className="row">
                            {
                                data.images?.filter(item => {return !item.main})?.map((image, index) => (
                                    <div className="col-sm-6 col-lg-6">
                                            {
                                                index == 0 || index == 1 || index == 2 || index == 3 || index == 4 || index == 5 ? (
                                                    
                                                    <div className="spls_style_two mb30">
                                                    <a className="popup-img" href={`${process.env.NEXT_PUBLIC_API_HOST}/${image.src}`}><img className="img-fluid" style={{maxHeight: 200, objectFit: 'scale-down'}} src={`${process.env.NEXT_PUBLIC_API_HOST}/${image.src}`} alt="2.jpg"></img></a>
                                                
                                                    </div>
                                                ) : (
                                                    <div className="spls_style_two mb30">
                                                    <a className="popup-img" href={`${process.env.NEXT_PUBLIC_API_HOST}/${image.src}`}></a>
                                                    </div>
                                                )
                                            }
                                    </div>
                                ))
                            }
                            {/* <div className="col-sm-6 col-lg-6">
                                <div className="spls_style_two mb30">
                                    <a className="popup-img" href="/images/property/7.jpg"><img className="img-fluid w100"  src="/images/property/7.jpg" alt="7.jpg"></img></a>
                                    <div className="overlay popup-img">
                                        <h3 className="title">+20</h3>
                                    </div>
                                </div>
                            </div> */}
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
                                                <li><p>Площадь участка :</p> </li>
                                                <li><p>Этаж :</p> </li>
                                            </ul>
                                            <ul className="list-inline-item">
                                                <li><p><span>{data.place_square ? data.place_square + ' соток' : 'нет'}</span></p> </li>
                                                <li><p><span>{data.level ? data.level : 'нет'}</span></p> </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6 col-lg-6 col-xl-4">
                                            <ul className="list-inline-item">
                                                <li><p>Статус :</p> </li>
                                                <li><p>Тип объекта :</p> </li>
                                            </ul>
                                            <ul className="list-inline-item">
                                                <li><p><span>{data?.status == 1 ? 'В продаже' : 'Снято с публикации'}</span></p> </li>
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
                        
                        <PopularVariantsWidget objects={dataPopular}/>
                        {/* <CategoriesWidget/> */}
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

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/objects/${params.id}`)
    const data = await res.json()

    const resPopular = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/objects?featured=true`)
    const dataPopular = await resPopular.json()

    return {
        props: {
            data, dataPopular
        }
    }
}