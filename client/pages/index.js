import Head from 'next/head'
import Image from 'next/image'
import CheapestVariants from '../components/CheapestVariants/index.js';
import Footer from '../components/Footer/index.js';
import Header from '../components/Header/index.js';
import MainFilter from '../components/MainFilter/index.js';
import PopularVariantsSlider from '../components/PopularVariantsSlider/index.js';
import useScript from '../hooks/useScript.js';


function Home({objects, objectsFeatured}) {


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
    <div className="wrapper maxw1600 m0a">

	{/* <!-- Main Header Nav --> */}
	<Header/>
	{/* <!-- Modal --> */}
	

	{/* <!-- Main Header Nav For Mobile --> */}
	

	{/* <!-- Home Design --> */}
	<section className="home-three bg-img3">
		<div className="container">
			<div className="row">
				<div className="col-lg-8">
					<div className="home3_home_content">
						<h1>Найди свой новый дом!</h1>
						<h4>Лучший сайт по поиску недвижимости в городе Лиски.</h4>
					</div>
				</div>
				<div className="col-lg-4">
					{/* <div className="home3_home_content">
						<a className="popup_video_btn popup-iframe popup-youtube" href="https://www.youtube.com/watch?v=R7xbhKIiw4Y"><i className="flaticon-play"></i></a>
					</div> */}
				</div>
			</div>
			<div className="row">
				<div className="col-lg-12">
					<MainFilter/>
				</div>
			</div>
		</div>
	</section>

	{/* <!-- Feature Properties --> */}
	
	{/* <!-- Property Cities --> */}
	<PopularVariantsSlider objects={objectsFeatured}/>

	{/* <!-- Property Search --> */}
	<section id="property-search" className="property-search bg-img4">
		<div className="container">
			<div className="row">
				<div className="col-lg-6 offset-lg-3">
					<div className="search_smart_property text-center">
						<h2>Ищи умнее, откуда угодно</h2>
						<p>Найдите то, что Вам нужно из нашей большой базы объектов недвижимости</p>
						<button className="btn ssp_btn">Искать</button>
					</div>
				</div>
			</div>
		</div>
	</section>

	{/* <!-- Property Cities --> */}
	<CheapestVariants objects={objects}/>

	{/* <!-- Our Agents --> */}
	{/* <section id="our-agents" className="our-agents pt40 pb30">
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-12">
					<div className="main-title">
						<h2>Our Agents</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a className="float-right" href="#">View All <span className="flaticon-next"></span></a></p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-6 col-md-4 col-lg-4 col-xl-2">
					<div className="our_agent">
						<div className="thumb">
							<img className="img-fluid w100" src="images/team/5.jpg" alt="5.jpg"></img>
							<div className="overylay">
								<ul className="social_icon">
									<li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
									<li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
									<li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
									<li className="list-inline-item"><a href="#"><i className="fa fa-pinterest"></i></a></li>
									<li className="list-inline-item"><a href="#"><i className="fa fa-dribbble"></i></a></li>
									<li className="list-inline-item"><a href="#"><i className="fa fa-google"></i></a></li>
								</ul>
							</div>
						</div>
						<div className="details">
							<h4>Jennifer Barton</h4>
							<p>Broker <a className="float-right" href="#">4.5 <i className="fa fa-star color-golden"></i></a></p>
						</div>
					</div>
				</div>
				<div className="col-sm-6 col-md-4 col-lg-4 col-xl-2">
					<div className="our_agent">
						<div className="thumb">
							<img className="img-fluid w100" src="images/team/6.jpg" alt="6.jpg"></img>
							<div className="overylay">
								<ul className="social_icon">
									<li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
									<li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
									<li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
									<li className="list-inline-item"><a href="#"><i className="fa fa-pinterest"></i></a></li>
									<li className="list-inline-item"><a href="#"><i className="fa fa-dribbble"></i></a></li>
									<li className="list-inline-item"><a href="#"><i className="fa fa-google"></i></a></li>
								</ul>
							</div>
						</div>
						<div className="details">
							<h4>Kathleen Myers</h4>
							<p>Agent <a className="float-right" href="#">5 <i className="fa fa-star color-golden"></i></a></p>
						</div>
					</div>
				</div>
				<div className="col-sm-6 col-md-4 col-lg-4 col-xl-2">
					<div className="our_agent">
						<div className="thumb">
							<img className="img-fluid w100" src="images/team/7.jpg" alt="7.jpg"></img>
							<div className="overylay">
								<ul className="social_icon">
									<li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
									<li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
									<li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
									<li className="list-inline-item"><a href="#"><i className="fa fa-pinterest"></i></a></li>
									<li className="list-inline-item"><a href="#"><i className="fa fa-dribbble"></i></a></li>
									<li className="list-inline-item"><a href="#"><i className="fa fa-google"></i></a></li>
								</ul>
							</div>
						</div>
						<div className="details">
							<h4>Mariusz Ciesla</h4>
							<p>Broker <a className="float-right" href="#">3.5 <i className="fa fa-star color-golden"></i></a></p>
						</div>
					</div>
				</div>
				<div className="col-sm-6 col-md-4 col-lg-4 col-xl-2">
					<div className="our_agent">
						<div className="thumb">
							<img className="img-fluid w100" src="images/team/8.jpg" alt="8.jpg"></img>
							<div className="overylay">
								<ul className="social_icon">
									<li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
									<li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
									<li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
									<li className="list-inline-item"><a href="#"><i className="fa fa-pinterest"></i></a></li>
									<li className="list-inline-item"><a href="#"><i className="fa fa-dribbble"></i></a></li>
									<li className="list-inline-item"><a href="#"><i className="fa fa-google"></i></a></li>
								</ul>
							</div>
						</div>
						<div className="details">
							<h4>Helene Powers</h4>
							<p>Broker <a className="float-right" href="#">4.5 <i className="fa fa-star color-golden"></i></a></p>
						</div>
					</div>
				</div>
				<div className="col-sm-6 col-md-4 col-lg-4 col-xl-2">
					<div className="our_agent">
						<div className="thumb">
							<img className="img-fluid w100" src="images/team/9.jpg" alt="9.jpg"></img>
							<div className="overylay">
								<ul className="social_icon">
									<li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
									<li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
									<li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
									<li className="list-inline-item"><a href="#"><i className="fa fa-pinterest"></i></a></li>
									<li className="list-inline-item"><a href="#"><i className="fa fa-dribbble"></i></a></li>
									<li className="list-inline-item"><a href="#"><i className="fa fa-google"></i></a></li>
								</ul>
							</div>
						</div>
						<div className="details">
							<h4>Jade Northon</h4>
							<p>Agent <a className="float-right" href="#">1.5 <i className="fa fa-star color-golden"></i></a></p>
						</div>
					</div>
				</div>
				<div className="col-sm-6 col-md-4 col-lg-4 col-xl-2">
					<div className="our_agent">
						<div className="thumb">
							<img className="img-fluid w100" src="images/team/10.jpg" alt="10.jpg"></img>
							<div className="overylay">
								<ul className="social_icon">
									<li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
									<li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
									<li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
									<li className="list-inline-item"><a href="#"><i className="fa fa-pinterest"></i></a></li>
									<li className="list-inline-item"><a href="#"><i className="fa fa-dribbble"></i></a></li>
									<li className="list-inline-item"><a href="#"><i className="fa fa-google"></i></a></li>
								</ul>
							</div>
						</div>
						<div className="details">
							<h4>Kevin Harris</h4>
							<p>Agent <a className="float-right" href="#">3.5 <i className="fa fa-star color-golden"></i></a></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section> */}

	<Footer/>
<a className="scrollToHome text-thm3" href="#"><i className="flaticon-arrows"></i></a>
</div>
  )
}

export async function getServerSideProps() {
    const res = await fetch(new URL(`${process.env.API_HOST}/objects`))
    const objects = await res.json()

	const resFeatured = await fetch(new URL(`${process.env.API_HOST}/objects?featured=true`))
    const objectsFeatured = await resFeatured.json()

    return {props : {objects, objectsFeatured}}
}

export default Home