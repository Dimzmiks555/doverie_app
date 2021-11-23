import { TextField } from '@mui/material';
import Head from 'next/head'
import Image from 'next/image'
import CheapestVariants from '../components/CheapestVariants/index.js';
import Footer from '../components/Footer/index.js';
import Header from '../components/Header/index.js';
import MainFilter from '../components/MainFilter/index.js';
import PopularVariantsSlider from '../components/PopularVariantsSlider/index.js';
import useScript from '../hooks/useScript.js';


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
    <div className="wrapper maxw1600 m0a">

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
						    <li class="breadcrumb-item"><a href="#">Home</a></li>
						    <li class="breadcrumb-item active" aria-current="page">Contact</li>
						</ol>
						<h4 class="breadcrumb_title">Contact Us</h4>
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
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida quis libero eleifend ornare. Maecenas mattis enim at arcu feugiat, sit amet blandit nisl iaculis. Donec lacus odio, malesuada eu libero sit amet, congue aliquam leo. In hac habitasse platea dictumst.</p>
			            <form class="contact_form" id="contact_form" name="contact_form" action="#" method="post" novalidate="novalidate">
							<div class="row">
				                <div class="col-md-6">
										<TextField label="Имя" fullWidth></TextField>
				                </div>
				                <div class="col-md-6">
				                    <div class="form-group">
										<TextField label="Имя" fullWidth></TextField>
				                    </div>
				                </div>
				                <div class="col-md-6">
				                    <div class="form-group">
										<TextField label="Имя" fullWidth></TextField>
				                    </div>
				                </div>
				                <div class="col-md-6">
				                    <div class="form-group">
										<TextField label="Имя" fullWidth></TextField>
									</div>
				                </div>
				                <div class="col-sm-12">
		                            <div class="form-group">
										<TextField label="Имя" multiline rows={5} fullWidth></TextField>
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
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida quis libero eleifend ornare. habitasse platea dictumst.</p>
						<div class="content_list">
							<h5>Адрес</h5>
							<p>2301 Ravenswood Rd Madison, <br></br>WI 53711</p>
						</div>
						<div class="content_list">
							<h5>Phone</h5>
							<p>(315) 905-2321</p>
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
					<div class="h600" id="map-canvas"></div>
				</div>
			</div>
		</div>
	</section>

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

// export async function getServerSideProps() {
//     const res = await fetch(`http://localhost:5000/objects`)
//     const objects = await res.json()

// 	const resFeatured = await fetch(`http://localhost:5000/objects?featured=true`)
//     const objectsFeatured = await resFeatured.json()

//     return {props : {objects, objectsFeatured}}
// }

export default Contacts