import Head from 'next/head'
import Image from 'next/image'
import CheapestVariants from '../components/CheapestVariants/index.js';
import Footer from '../components/Footer/index.js';
import Header from '../components/Header/index.js';
import MainFilter from '../components/MainFilter/index.js';
import PopularVariantsSlider from '../components/PopularVariantsSlider/index.js';
import useScript from '../hooks/useScript.js';


function Home({objects}) {


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
    <div className="wrapper">

	{/* <!-- Main Header Nav --> */}
	<Header/>
	{/* <!-- Modal --> */}
	<div className="sign_up_modal modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-hidden="true">
		<div className="modal-dialog modal-lg" role="document">
		    <div className="modal-content">
		      	<div className="modal-header">
		        	<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		      	</div>
		      	<div className="modal-body container pb20">
		      		<div className="row">
		      			<div className="col-lg-12">
				    		<ul className="sign_up_tab nav nav-tabs" id="myTab" role="tablist">
							  	<li className="nav-item">
							    	<a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Login</a>
							  	</li>
							  	<li className="nav-item">
							    	<a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Register</a>
							  	</li>
							</ul>
		      			</div>
		      		</div>
					<div className="tab-content container" id="myTabContent">
					  	<div className="row mt25 tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
					  		<div className="col-lg-6 col-xl-6">
					  			<div className="login_thumb">
					  				<img className="img-fluid w100" src="images/resource/login.jpg" alt="login.jpg"></img>
					  			</div>
					  		</div>
					  		<div className="col-lg-6 col-xl-6">
								<div className="login_m">
									<form action="#">
										<div className="heading">
											<h4>Login</h4>
										</div>
										<div className="row mt25">
											<div className="col-lg-12">
												<button type="submit" className="btn btn-fb btn-block"><i className="fa fa-facebook float-left mt5"></i> Login with Facebook</button>
											</div>
											<div className="col-lg-12">
												<button type="submit" className="btn btn-googl btn-block"><i className="fa fa-google float-left mt5"></i> Login with Google</button>
											</div>
										</div>
										<hr></hr>
										<div className="input-group mb-2 mr-sm-2">
										    <input type="text" className="m-control" id="inlinemInputGroupUsername2" placeholder="User Name Or Email"></input>
										    <div className="input-group-prepend">
										    	<div className="input-group-text"><i className="flaticon-user"></i></div>
										    </div>
										</div>
										<div className="input-group form-group">
									    	<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
										    <div className="input-group-prepend">
										    	<div className="input-group-text"><i className="flaticon-password"></i></div>
										    </div>
										</div>
										<div className="form-group custom-control custom-checkbox">
											<input type="checkbox" className="custom-control-input" id="exampleCheck1"></input>
											<label className="custom-control-label"htmlFor="exampleCheck1">Remember me</label>
											<a className="btn-fpswd float-right" href="#">Lost your password?</a>
										</div>
										<button type="submit" className="btn btn-log btn-block btn-thm">Log In</button>
										<p className="text-center">Don't have an account? <a className="text-thm" href="#">Register</a></p>
									</form>
								</div>
					  		</div>
					  	</div>
					  	<div className="row mt25 tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
					  		<div className="col-lg-6 col-xl-6">
					  			<div className="regstr_thumb">
					  				<img className="img-fluid w100" src="images/resource/regstr.jpg" alt="regstr.jpg"></img>
					  			</div>
					  		</div>
					  		<div className="col-lg-6 col-xl-6">
								<div className="sign_up_form">
									<div className="heading">
										<h4>Register</h4>
									</div>
									<form action="#">
										<div className="row">
											<div className="col-lg-12">
												<button type="submit" className="btn btn-block btn-fb"><i className="fa fa-facebook float-left mt5"></i> Login with Facebook</button>
											</div>
											<div className="col-lg-12">
												<button type="submit" className="btn btn-block btn-googl"><i className="fa fa-google float-left mt5"></i> Login with Google</button>
											</div>
										</div>
										<hr></hr>
										<div className="form-group input-group">
										    <input type="text" className="form-control" id="exampleInputName" placeholder="User Name"></input>
										    <div className="input-group-prepend">
										    	<div className="input-group-text"><i className="flaticon-user"></i></div>
										    </div>
										</div>
										<div className="form-group input-group">
										    <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Email"></input>
										    <div className="input-group-prepend">
										    	<div className="input-group-text"><i className="fa fa-envelope-o"></i></div>
										    </div>
										</div>
										<div className="form-group input-group">
										    <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password"></input>
										    <div className="input-group-prepend">
										    	<div className="input-group-text"><i className="flaticon-password"></i></div>
										    </div>
										</div>
										<div className="form-group input-group">
										    <input type="password" className="form-control" id="exampleInputPassword3" placeholder="Re-enter password"></input>
										    <div className="input-group-prepend">
										    	<div className="input-group-text"><i className="flaticon-password"></i></div>
										    </div>
										</div>
										<div className="form-group ui_kit_select_search mb0">
											<select className="selectpicker" data-live-search="true" data-width="100%">
												<option data-tokens="SelectRole">Single User</option>
												<option data-tokens="Agent/Agency">Agent</option>
												<option data-tokens="SingleUser">Multi User</option>
											</select>
										</div>
										<div className="form-group custom-control custom-checkbox">
											<input type="checkbox" className="custom-control-input" id="exampleCheck2"></input>
											<label className="custom-control-label" htmlFor="exampleCheck2">I have read and accept the Terms and Privacy Policy?</label>
										</div>
										<button type="submit" className="btn btn-log btn-block btn-thm">Sign Up</button>
										<p className="text-center">Already have an account? <a className="text-thm" href="#">Log In</a></p>
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
	<PopularVariantsSlider objects={objects}/>

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
    const res = await fetch(`http://localhost:5000/objects`)
    const objects = await res.json()

    return {props : {objects}}
}

export default Home