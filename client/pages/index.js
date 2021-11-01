import Head from 'next/head'
import Image from 'next/image'
import CheapestVariants from '../components/CheapestVariants/index.js';
import Footer from '../components/Footer/index.js';
import Header from '../components/Header/index.js';
import MainFilter from '../components/MainFilter/index.js';
import PopularVariantsSlider from '../components/PopularVariantsSlider/index.js';
import useScript from '../hooks/useScript.js';


export default function Home() {


	if (typeof window != 'undefined') {
		document.body.classList.add('maxw1600')
		document.body.classList.add('m0a')
	}

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
    <div class="wrapper">

	{/* <!-- Main Header Nav --> */}
	<Header/>
	{/* <!-- Modal --> */}
	<div class="sign_up_modal modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog modal-lg" role="document">
		    <div class="modal-content">
		      	<div class="modal-header">
		        	<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		      	</div>
		      	<div class="modal-body container pb20">
		      		<div class="row">
		      			<div class="col-lg-12">
				    		<ul class="sign_up_tab nav nav-tabs" id="myTab" role="tablist">
							  	<li class="nav-item">
							    	<a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Login</a>
							  	</li>
							  	<li class="nav-item">
							    	<a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Register</a>
							  	</li>
							</ul>
		      			</div>
		      		</div>
					<div class="tab-content container" id="myTabContent">
					  	<div class="row mt25 tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
					  		<div class="col-lg-6 col-xl-6">
					  			<div class="login_thumb">
					  				<img class="img-fluid w100" src="images/resource/login.jpg" alt="login.jpg"></img>
					  			</div>
					  		</div>
					  		<div class="col-lg-6 col-xl-6">
								<div class="login_form">
									<form action="#">
										<div class="heading">
											<h4>Login</h4>
										</div>
										<div class="row mt25">
											<div class="col-lg-12">
												<button type="submit" class="btn btn-fb btn-block"><i class="fa fa-facebook float-left mt5"></i> Login with Facebook</button>
											</div>
											<div class="col-lg-12">
												<button type="submit" class="btn btn-googl btn-block"><i class="fa fa-google float-left mt5"></i> Login with Google</button>
											</div>
										</div>
										<hr></hr>
										<div class="input-group mb-2 mr-sm-2">
										    <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="User Name Or Email"></input>
										    <div class="input-group-prepend">
										    	<div class="input-group-text"><i class="flaticon-user"></i></div>
										    </div>
										</div>
										<div class="input-group form-group">
									    	<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
										    <div class="input-group-prepend">
										    	<div class="input-group-text"><i class="flaticon-password"></i></div>
										    </div>
										</div>
										<div class="form-group custom-control custom-checkbox">
											<input type="checkbox" class="custom-control-input" id="exampleCheck1"></input>
											<label class="custom-control-label" for="exampleCheck1">Remember me</label>
											<a class="btn-fpswd float-right" href="#">Lost your password?</a>
										</div>
										<button type="submit" class="btn btn-log btn-block btn-thm">Log In</button>
										<p class="text-center">Don't have an account? <a class="text-thm" href="#">Register</a></p>
									</form>
								</div>
					  		</div>
					  	</div>
					  	<div class="row mt25 tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
					  		<div class="col-lg-6 col-xl-6">
					  			<div class="regstr_thumb">
					  				<img class="img-fluid w100" src="images/resource/regstr.jpg" alt="regstr.jpg"></img>
					  			</div>
					  		</div>
					  		<div class="col-lg-6 col-xl-6">
								<div class="sign_up_form">
									<div class="heading">
										<h4>Register</h4>
									</div>
									<form action="#">
										<div class="row">
											<div class="col-lg-12">
												<button type="submit" class="btn btn-block btn-fb"><i class="fa fa-facebook float-left mt5"></i> Login with Facebook</button>
											</div>
											<div class="col-lg-12">
												<button type="submit" class="btn btn-block btn-googl"><i class="fa fa-google float-left mt5"></i> Login with Google</button>
											</div>
										</div>
										<hr></hr>
										<div class="form-group input-group">
										    <input type="text" class="form-control" id="exampleInputName" placeholder="User Name"></input>
										    <div class="input-group-prepend">
										    	<div class="input-group-text"><i class="flaticon-user"></i></div>
										    </div>
										</div>
										<div class="form-group input-group">
										    <input type="email" class="form-control" id="exampleInputEmail2" placeholder="Email"></input>
										    <div class="input-group-prepend">
										    	<div class="input-group-text"><i class="fa fa-envelope-o"></i></div>
										    </div>
										</div>
										<div class="form-group input-group">
										    <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Password"></input>
										    <div class="input-group-prepend">
										    	<div class="input-group-text"><i class="flaticon-password"></i></div>
										    </div>
										</div>
										<div class="form-group input-group">
										    <input type="password" class="form-control" id="exampleInputPassword3" placeholder="Re-enter password"></input>
										    <div class="input-group-prepend">
										    	<div class="input-group-text"><i class="flaticon-password"></i></div>
										    </div>
										</div>
										<div class="form-group ui_kit_select_search mb0">
											<select class="selectpicker" data-live-search="true" data-width="100%">
												<option data-tokens="SelectRole">Single User</option>
												<option data-tokens="Agent/Agency">Agent</option>
												<option data-tokens="SingleUser">Multi User</option>
											</select>
										</div>
										<div class="form-group custom-control custom-checkbox">
											<input type="checkbox" class="custom-control-input" id="exampleCheck2"></input>
											<label class="custom-control-label" for="exampleCheck2">I have read and accept the Terms and Privacy Policy?</label>
										</div>
										<button type="submit" class="btn btn-log btn-block btn-thm">Sign Up</button>
										<p class="text-center">Already have an account? <a class="text-thm" href="#">Log In</a></p>
									</form>
								</div>
					  		</div>
					  	</div>
					</div>
		      	</div>
		    </div>
		</div>
	</div>

	{/* <!-- Main Header Nav For Mobile --> */}
	<div id="page" class="stylehome1 h0">
		<div class="mobile-menu">
			<div class="header stylehome1">
				<div class="main_logo_home2 text-center">
		            <img class="nav_logo_img img-fluid mt20" src="images/header-logo2.png" alt="header-logo2.png"></img>
		            <span class="mt20">FindHouse</span>
				</div>
				<ul class="menu_bar_home2">
	                <li class="list-inline-item list_s"><a href="page-register.html"><span class="flaticon-user"></span></a></li>
					<li class="list-inline-item"><a href="#menu"><span></span></a></li>
				</ul>
			</div>
		</div>
		<nav id="menu" class="stylehome1">
			<ul>
				<li><span>Home</span>
	                <ul>
	                    <li><a href="index.html">Home 1</a></li>
	                    <li><a href="index2.html">Home 2</a></li>
	                    <li><a href="index3.html">Home 3</a></li>
	                    <li><a href="index4.html">Home 4</a></li>
	                    <li><a href="index5.html">Home 5</a></li>
	                    <li><a href="index6.html">Home 6</a></li>
	                    <li><a href="index7.html">Home 7</a></li>
	                    <li><a href="index8.html">Home 8</a></li>
	                    <li><a href="index9.html">Home 9</a></li>
	                    <li><a href="index10.html">Home 10</a></li>
	                </ul>
				</li>
				<li><span>Listing</span>
					<ul>
						<li><span>Listing Grid</span>
							<ul>
	                            <li><a href="page-listing-grid-v1.html">Grid v1</a></li>
	                            <li><a href="page-listing-grid-v2.html">Grid v2</a></li>
	                            <li><a href="page-listing-grid-v3.html">Grid v3</a></li>
	                            <li><a href="page-listing-grid-v4.html">Grid v4</a></li>
	                            <li><a href="page-listing-grid-v5.html">Grid v5</a></li>
	                            <li><a href="page-listing-full-width-grid.html">Grid Fullwidth</a></li>
							</ul>
						</li>
						<li><span>Listing Style</span>
							<ul>
	                            <li><a href="page-listing-parallax.html">Parallax Style</a></li>
	                            <li><a href="page-listing-slider.html">Slider Style</a></li>
	                            <li><a href="page-listing-map.html">Map Header</a></li>
							</ul>
						</li>
						<li><span>Listing Half</span>
							<ul>
	                            <li><a href="page-listing-half-map-v1.html">Map V1</a></li>
	                            <li><a href="page-listing-half-map-v2.html">Map V2</a></li>
	                            <li><a href="page-listing-half-map-v3.html">Map V3</a></li>
	                            <li><a href="page-listing-half-map-v4.html">Map V4</a></li>
							</ul>
						</li>
						<li><span>Agent View</span>
							<ul>
	                            <li><a href="page-listing-agent-v1.html">Agent V1</a></li>
	                            <li><a href="page-listing-agent-v2.html">Agent V2</a></li>
	                            <li><a href="page-listing-agent-v3.html">Agent Details</a></li>
							</ul>
						</li>
						<li><span>Agencies View</span>
							<ul>
	                            <li><a href="page-agencies-list-v1.html">Agencies V1</a></li>
	                            <li><a href="page-agencies-list-v2.html">Agencies V2</a></li>
	                            <li><a href="page-agencies-list-v3.html">Agencies Details</a></li>
							</ul>
						</li>
					</ul>
				</li>
				<li><span>Property</span>
					<ul>
						<li><span>Property</span>
							<ul>
					            <li><a href="page-dashboard.html">Dashboard</a></li>
			                    <li><a href="page-my-properties.html">My Properties</a></li>
			                    <li><a href="page-add-new-property.html">Add New Property</a></li>
							</ul>
						</li>
						<li><span>Listing Single</span>
							<ul>
	                            <li><a href="page-listing-single-v1.html">Single V1</a></li>
	                            <li><a href="page-listing-single-v2.html">Single V2</a></li>
	                            <li><a href="page-listing-single-v3.html">Single V3</a></li>
	                            <li><a href="page-listing-single-v4.html">Single V4</a></li>
	                            <li><a href="page-listing-single-v5.html">Single V5</a></li>
							</ul>
						</li>
					</ul>
				</li>
				<li><span>Blog</span>
					<ul>
	                    <li><a href="page-blog-v1.html">Blog List 1</a></li>
	                    <li><a href="page-blog-grid.html">Blog List 2</a></li>
	                    <li><a href="page-blog-single.html">Single Post</a></li>
					</ul>
				</li>
				<li><span>Pages</span>
					<ul>
						<li><span>Shop</span>
							<ul>
			                    <li><a href="page-shop.html">Shop</a></li>
			                    <li><a href="page-shop-single.html">Shop Single</a></li>
			                    <li><a href="page-shop-cart.html">Cart</a></li>
			                    <li><a href="page-shop-checkout.html">Checkout</a></li>
			                    <li><a href="page-shop-order.html">Order</a></li>
							</ul>
						</li>
		                <li><a href="page-about.html">About Us</a></li>
		                <li><a href="page-gallery.html">Gallery</a></li>
		                <li><a href="page-faq.html">Faq</a></li>
		                <li><a href="page-login.html">LogIn</a></li>
		                <li><a href="page-compare.html">Membership</a></li>
		                <li><a href="page-compare2.html">Membership 2</a></li>
	                    <li><a href="page-register.html">Register</a></li>
	                    <li><a href="page-service.html">Service</a></li>
		                <li><a href="page-error.html">404 Page</a></li>
		                <li><a href="page-terms.html">Terms and Conditions</a></li>
		                <li><a href="page-ui-element.html">UI Elements</a></li>
					</ul>
				</li>
				<li><a href="page-contact.html">Contact</a></li>
				<li><a href="page-login.html"><span class="flaticon-user"></span> Login</a></li>
				<li><a href="page-register.html"><span class="flaticon-edit"></span> Register</a></li>
				<li class="cl_btn"><a class="btn btn-block btn-lg btn-thm circle" href="#"><span class="flaticon-plus"></span> Create Listing</a></li>
			</ul>
		</nav>
	</div>

	{/* <!-- Home Design --> */}
	<section class="home-three bg-img3">
		<div class="container">
			<div class="row">
				<div class="col-lg-8">
					<div class="home3_home_content">
						<h1>Найди свой новый дом!</h1>
						<h4>Лучший сайт по поиску недвижимости в городе Лиски.</h4>
					</div>
				</div>
				<div class="col-lg-4">
					{/* <div class="home3_home_content">
						<a class="popup_video_btn popup-iframe popup-youtube" href="https://www.youtube.com/watch?v=R7xbhKIiw4Y"><i class="flaticon-play"></i></a>
					</div> */}
				</div>
			</div>
			<div class="row">
				<div class="col-lg-12">
					<MainFilter/>
				</div>
			</div>
		</div>
	</section>

	{/* <!-- Feature Properties --> */}
	
	{/* <!-- Property Cities --> */}
	<PopularVariantsSlider id='1'/>

	{/* <!-- Property Search --> */}
	<section id="property-search" class="property-search bg-img4">
		<div class="container">
			<div class="row">
				<div class="col-lg-6 offset-lg-3">
					<div class="search_smart_property text-center">
						<h2>Ищи умнее, откуда угодно</h2>
						<p>Найдите то, что Вам нужно из нашей большой базы объектов недвижимости</p>
						<button class="btn ssp_btn">Искать</button>
					</div>
				</div>
			</div>
		</div>
	</section>

	{/* <!-- Property Cities --> */}
	<CheapestVariants/>

	{/* <!-- Our Agents --> */}
	{/* <section id="our-agents" class="our-agents pt40 pb30">
		<div class="container-fluid">
			<div class="row">
				<div class="col-lg-12">
					<div class="main-title">
						<h2>Our Agents</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a class="float-right" href="#">View All <span class="flaticon-next"></span></a></p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-6 col-md-4 col-lg-4 col-xl-2">
					<div class="our_agent">
						<div class="thumb">
							<img class="img-fluid w100" src="images/team/5.jpg" alt="5.jpg"></img>
							<div class="overylay">
								<ul class="social_icon">
									<li class="list-inline-item"><a href="#"><i class="fa fa-facebook"></i></a></li>
									<li class="list-inline-item"><a href="#"><i class="fa fa-twitter"></i></a></li>
									<li class="list-inline-item"><a href="#"><i class="fa fa-instagram"></i></a></li>
									<li class="list-inline-item"><a href="#"><i class="fa fa-pinterest"></i></a></li>
									<li class="list-inline-item"><a href="#"><i class="fa fa-dribbble"></i></a></li>
									<li class="list-inline-item"><a href="#"><i class="fa fa-google"></i></a></li>
								</ul>
							</div>
						</div>
						<div class="details">
							<h4>Jennifer Barton</h4>
							<p>Broker <a class="float-right" href="#">4.5 <i class="fa fa-star color-golden"></i></a></p>
						</div>
					</div>
				</div>
				<div class="col-sm-6 col-md-4 col-lg-4 col-xl-2">
					<div class="our_agent">
						<div class="thumb">
							<img class="img-fluid w100" src="images/team/6.jpg" alt="6.jpg"></img>
							<div class="overylay">
								<ul class="social_icon">
									<li class="list-inline-item"><a href="#"><i class="fa fa-facebook"></i></a></li>
									<li class="list-inline-item"><a href="#"><i class="fa fa-twitter"></i></a></li>
									<li class="list-inline-item"><a href="#"><i class="fa fa-instagram"></i></a></li>
									<li class="list-inline-item"><a href="#"><i class="fa fa-pinterest"></i></a></li>
									<li class="list-inline-item"><a href="#"><i class="fa fa-dribbble"></i></a></li>
									<li class="list-inline-item"><a href="#"><i class="fa fa-google"></i></a></li>
								</ul>
							</div>
						</div>
						<div class="details">
							<h4>Kathleen Myers</h4>
							<p>Agent <a class="float-right" href="#">5 <i class="fa fa-star color-golden"></i></a></p>
						</div>
					</div>
				</div>
				<div class="col-sm-6 col-md-4 col-lg-4 col-xl-2">
					<div class="our_agent">
						<div class="thumb">
							<img class="img-fluid w100" src="images/team/7.jpg" alt="7.jpg"></img>
							<div class="overylay">
								<ul class="social_icon">
									<li class="list-inline-item"><a href="#"><i class="fa fa-facebook"></i></a></li>
									<li class="list-inline-item"><a href="#"><i class="fa fa-twitter"></i></a></li>
									<li class="list-inline-item"><a href="#"><i class="fa fa-instagram"></i></a></li>
									<li class="list-inline-item"><a href="#"><i class="fa fa-pinterest"></i></a></li>
									<li class="list-inline-item"><a href="#"><i class="fa fa-dribbble"></i></a></li>
									<li class="list-inline-item"><a href="#"><i class="fa fa-google"></i></a></li>
								</ul>
							</div>
						</div>
						<div class="details">
							<h4>Mariusz Ciesla</h4>
							<p>Broker <a class="float-right" href="#">3.5 <i class="fa fa-star color-golden"></i></a></p>
						</div>
					</div>
				</div>
				<div class="col-sm-6 col-md-4 col-lg-4 col-xl-2">
					<div class="our_agent">
						<div class="thumb">
							<img class="img-fluid w100" src="images/team/8.jpg" alt="8.jpg"></img>
							<div class="overylay">
								<ul class="social_icon">
									<li class="list-inline-item"><a href="#"><i class="fa fa-facebook"></i></a></li>
									<li class="list-inline-item"><a href="#"><i class="fa fa-twitter"></i></a></li>
									<li class="list-inline-item"><a href="#"><i class="fa fa-instagram"></i></a></li>
									<li class="list-inline-item"><a href="#"><i class="fa fa-pinterest"></i></a></li>
									<li class="list-inline-item"><a href="#"><i class="fa fa-dribbble"></i></a></li>
									<li class="list-inline-item"><a href="#"><i class="fa fa-google"></i></a></li>
								</ul>
							</div>
						</div>
						<div class="details">
							<h4>Helene Powers</h4>
							<p>Broker <a class="float-right" href="#">4.5 <i class="fa fa-star color-golden"></i></a></p>
						</div>
					</div>
				</div>
				<div class="col-sm-6 col-md-4 col-lg-4 col-xl-2">
					<div class="our_agent">
						<div class="thumb">
							<img class="img-fluid w100" src="images/team/9.jpg" alt="9.jpg"></img>
							<div class="overylay">
								<ul class="social_icon">
									<li class="list-inline-item"><a href="#"><i class="fa fa-facebook"></i></a></li>
									<li class="list-inline-item"><a href="#"><i class="fa fa-twitter"></i></a></li>
									<li class="list-inline-item"><a href="#"><i class="fa fa-instagram"></i></a></li>
									<li class="list-inline-item"><a href="#"><i class="fa fa-pinterest"></i></a></li>
									<li class="list-inline-item"><a href="#"><i class="fa fa-dribbble"></i></a></li>
									<li class="list-inline-item"><a href="#"><i class="fa fa-google"></i></a></li>
								</ul>
							</div>
						</div>
						<div class="details">
							<h4>Jade Northon</h4>
							<p>Agent <a class="float-right" href="#">1.5 <i class="fa fa-star color-golden"></i></a></p>
						</div>
					</div>
				</div>
				<div class="col-sm-6 col-md-4 col-lg-4 col-xl-2">
					<div class="our_agent">
						<div class="thumb">
							<img class="img-fluid w100" src="images/team/10.jpg" alt="10.jpg"></img>
							<div class="overylay">
								<ul class="social_icon">
									<li class="list-inline-item"><a href="#"><i class="fa fa-facebook"></i></a></li>
									<li class="list-inline-item"><a href="#"><i class="fa fa-twitter"></i></a></li>
									<li class="list-inline-item"><a href="#"><i class="fa fa-instagram"></i></a></li>
									<li class="list-inline-item"><a href="#"><i class="fa fa-pinterest"></i></a></li>
									<li class="list-inline-item"><a href="#"><i class="fa fa-dribbble"></i></a></li>
									<li class="list-inline-item"><a href="#"><i class="fa fa-google"></i></a></li>
								</ul>
							</div>
						</div>
						<div class="details">
							<h4>Kevin Harris</h4>
							<p>Agent <a class="float-right" href="#">3.5 <i class="fa fa-star color-golden"></i></a></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section> */}

	<Footer/>
<a class="scrollToHome text-thm3" href="#"><i class="flaticon-arrows"></i></a>
</div>
  )
}
