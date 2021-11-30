import { TextField } from '@mui/material';
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import CheapestVariants from '../components/CheapestVariants/index.js';
import Footer from '../components/Footer/index.js';
import Header from '../components/Header/index.js';
import MainFilter from '../components/MainFilter/index.js';
import PopularVariantsSlider from '../components/PopularVariantsSlider/index.js';
import useScript from '../hooks/useScript.js';
import DarkFooter from '../components/DarkFooter/index.js';


function Contacts({objects, objectsFeatured}) {


	useScript('/js/jquery-3.3.1.js');
    useScript('/js/jquery-migrate-3.0.0.min.js');
    useScript('/js/bootstrap.min.js');
    useScript('/js/jquery.mmenu.all.js');
    useScript('/js/isotop.js');
    useScript('/js/snackbar.min.js');
    useScript('/js/simplebar.js');
    useScript('/js/parallax.js');
    useScript('/js/slider.js');
    useScript('/js/wow.min.js');
    useScript('/js/jquery.counterup.js');
    useScript('/js/script.js');

  return (
    <div className="wrapper">

	{/* <!-- Main Header Nav --> */}
	<Header/>
	{/* <!-- Modal --> */}
	

	{/* <!-- Main Header Nav For Mobile --> */}
	
    <section class="inner_page_breadcrumb">
		<div class="container">
			<div class="row">
				<div class="col-xl-6">
					<div class="breadcrumb_content">
						<ol class="breadcrumb">
						    <li class="breadcrumb-item"><Link href='/'><a href="#">Главная</a></Link></li>
						    <li class="breadcrumb-item active" aria-current="page">Контакты</li>
						</ol>
						<h4 class="breadcrumb_title">Контакты</h4>
					</div>
				</div>
			</div>
		</div>
	</section>

	{/* <!-- Our Contact --> */}
	<section class="our-contact pb0 bgc-f7">
		<div class="container">
			<div class="row">
				<div class="col-lg-7 col-xl-8">
					<div className="contact_localtion">
						<h4 class="mb5">Отправьте нам сообщение</h4>
						{/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida quis libero eleifend ornare. Maecenas mattis enim at arcu feugiat, sit amet blandit nisl iaculis. Donec lacus odio, malesuada eu libero sit amet, congue aliquam leo. In hac habitasse platea dictumst.</p> */}
			            <form class="contact_form" id="contact_form" name="contact_form" action="#" method="post" novalidate="novalidate">
							<div class="row">
				                <div class="col-md-6">
				                    <div class="form-group">
										<TextField label="Имя" fullWidth></TextField>
									</div>
				                </div>
				                <div class="col-md-6">
				                    <div class="form-group">
										<TextField label="Номер телефона" fullWidth></TextField>
				                    </div>
				                </div>
				                <div class="col-md-6">
				                    <div class="form-group">
										<TextField label="Электронная почта" fullWidth></TextField>
				                    </div>
				                </div>
				                <div class="col-md-6">
				                    <div class="form-group">
										<TextField label="Тема письма" fullWidth></TextField>
									</div>
				                </div>
				                <div class="col-sm-12">
		                            <div class="form-group">
										<TextField label="Сообщение" multiline rows={5} fullWidth></TextField>
		                            </div>
				                    <div class="form-group mb0">
					                    <button type="button" style={{background: 'green', color: '#FFF'}} class="btn btn-lg btn-thm">Отправить</button>
				                    </div>
				                </div>
			                </div>
			            </form>
					</div>
				</div>
				<div class="col-lg-5 col-xl-4">
					<div class="contact_localtion">
						<h4>Контакты</h4>
						{/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida quis libero eleifend ornare. habitasse platea dictumst.</p> */}
						<div class="content_list">
							<h5>Адрес</h5>
							<p>город Лиски, улица Коммунистическая, <br></br>д. 12а, Рынок.</p>
						</div>
						<div class="content_list">
							<h5>Телефон</h5>
							<p>+7 900-930-6978 - Светлана Ивановна</p>
						</div>
						<div class="content_list">
							<h5>Электронная почта</h5>
							<p><a href="https://grandetest.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="61080f070e2107080f05090e1412044f020e0c">anodaday@yandex.ru</a></p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="container-fluid p0 mt50">
			<div class="row">
				<div class="col-lg-12">
				<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae746873a6fe20e794bdcd47be7fc82bc1a365eac1b9c1809d860a4f9294f3ce3&amp;source=constructor" width="100%" height="600" frameborder="0"></iframe>
				</div>
			</div>
		</div>
	</section>


	<DarkFooter/>
<a className="scrollToHome text-thm3" href="#"><i className="flaticon-arrows"></i></a>
</div>
  )
}

// export async function getServerSideProps() {
//     const res = await fetch(`http://localhost:5000/objects`)
//     const objects = await res.json()

// 	const resFeatured = await fetch(`http://localhost:5000/objects?featured=true`)
//     const objectsFeatured = await resFeatured.json()

//     return {props : {objects, objectsFeatured}}
// }

export default Contacts