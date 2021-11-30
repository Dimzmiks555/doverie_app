import { TextField } from '@mui/material';
import Head from 'next/head'
import Image from 'next/image'
import CheapestVariants from '../components/CheapestVariants/index.js';
import Footer from '../components/Footer/index.js';
import Header from '../components/Header/index.js';
import MainFilter from '../components/MainFilter/index.js';
import PopularVariantsSlider from '../components/PopularVariantsSlider/index.js';
import useScript from '../hooks/useScript.js';
import Link from 'next/link'
import DarkFooter from '../components/DarkFooter/index.js';


function About({objects, objectsFeatured}) {


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
						    <li class="breadcrumb-item"><Link href="/"><a href="#">Главная</a></Link></li>
						    <li class="breadcrumb-item active" aria-current="page">О нас</li>
						</ol>
						<h1 class="breadcrumb_title">О нас</h1>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="about-section">
		<div class="container">
			<div class="row">
				<div class="col-lg-7 offset-lg-3">
					<div class="main-title text-center">
						<h2 class="mt0">Наша миссия - помочь найти Вам Дом!</h2>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-8 col-xl-7">
					<div class="about_content">
						<p class="large">«Доверие» – одно из крупнейших агентств недвижимости в городе Лиски. Более 17 лет к нам обращаются клиенты, чтобы купить, продать или обменять недвижимость. Ежегодно более 600 семей выбирают наше агентство!</p>
						<p>Множество клиентов обращается к нам по рекомендации и приходят за услугами повторно. Это знак высокого качества работы нашей компании.</p>
						<p>В вопросах с недвижимостью мы предлагаем людям оптимальные решения, давая им уверенность и надежность. Мы стремимся развивать нашу Компанию и способствовать росту качества жизни сотрудников.</p>
						<ul class="ab_counting">
							<li class="list-inline-item">
								<div class="about_counting">
									<div class="icon"><span class="flaticon-user"></span></div>
									<div class="details">
										<h3>2 123</h3>
										<p>Нашли свой Дом</p>
									</div>
								</div>
							</li>
							<li class="list-inline-item">
								<div class="about_counting">
									<div class="icon"><span class="flaticon-home"></span></div>
									<div class="details">
										<h3>480</h3>
										<p>Домов продано</p>
									</div>
								</div>
							</li>
							<li class="list-inline-item">
								<div class="about_counting">
									<div class="icon"><span class="flaticon-transfer"></span></div>
									<div class="details">
										<h3>430</h3>
										<p>Оформлено ипотек</p>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-lg-4 col-xl-5">
					<div class="about_thumb">
						<img class="img-fluid w100" src="images/about/1.jpg" alt="1.jpg"></img>
						{/* <a class="popup-iframe popup-youtube color-white" href="https://www.youtube.com/watch?v=R7xbhKIiw4Y"><i class="flaticon-play"></i></a> */}
					</div>
				</div>
			</div>
			<div class="row mt50">
				<div class="col-lg-6 offset-lg-3">
					<div class="main-title text-center">
						<h2>Почему стоит выбрать Нас?</h2>
						<p>Мы предлагаем полное сопровождение на каждом шагу.</p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6 col-lg-4 col-xl-4">
					<div class="why_chose_us style2">
						<div class="icon">
							<span class="flaticon-high-five"></span>
						</div>
						<div class="details">
							<h4>Проверены тысячами</h4>
							<p>Мы с вниманием подходим к пожеланиям каждого клиента и помогаем сделать правильный выбор.</p>
						</div>
					</div>
				</div>
				<div class="col-md-6 col-lg-4 col-xl-4">
					<div class="why_chose_us style2">
						<div class="icon">
							<span class="flaticon-profit"></span>
						</div>
						<div class="details">
							<h4>Доступные цены</h4>
							<p>Мы выделяемся среди конкурентов ценовой политикой и качеством работы.</p>
						</div>
					</div>
				</div>
				<div class="col-md-6 col-lg-4 col-xl-4">
					<div class="why_chose_us style2">
						<div class="icon">
							<span class="flaticon-home-1"></span>
						</div>
						<div class="details">
							<h4>Широкий выбор объектов</h4>
							<p>Актуальная база данных пополняется и редактируется каждый день.</p>
						</div>
					</div>
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
//     const res = await fetch(`${process.env.API_HOST}/objects`)
//     const objects = await res.json()

// 	const resFeatured = await fetch(`${process.env.API_HOST}/objects?featured=true`)
//     const objectsFeatured = await resFeatured.json()

//     return {props : {objects, objectsFeatured}}
// }

export default About