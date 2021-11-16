import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react';
import CategoriesWidget from '../components/CategoriesWidget/index.js';
import DarkFooter from '../components/DarkFooter/index.js';
import FilterWidget from '../components/FilterWidget/index.js';
import Footer from '../components/Footer/index.js';
import Header from '../components/Header/index.js';
import MainFilter from '../components/MainFilter/index.js';
import PopularVariantsWidget from '../components/PopularVariantsWidget/index.js';
import PopularVariantsSide from '../components/PopularVariantsWidget/index.js';
import RecentVariantsWidget from '../components/RecentVariantsWidget/index.js';
import VariantCard from '../components/VariantCard/index.js';
import useScript from '../hooks/useScript.js';


export default function Home() {



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
    <div className="wrapper">


	{/* <!-- Main Header Nav --> */}
	<Header/>
	{/* <!-- Modal --> */}

    <section className="our-listing bgc-f7 pb30-991">
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
			<div className="row">
				<div className="col-lg-6">
					<div className="breadcrumb_content style2 mb0-991">
						{/* <ol className="breadcrumb">
						    <li className="breadcrumb-item"><a href="#">Главная</a></li>
						    <li className="breadcrumb-item active text-thm" aria-current="page">Каталог</li>
						</ol> */}
						<h2 className="breadcrumb_title">Каталог</h2>
					</div>
				</div>
				{/* <div className="col-lg-6">
					<div className="listing_list_style mb20-xsd tal-991">
						<ul className="mb0">
							<li className="list-inline-item"><a href="#"><span className="fa fa-th-large"></span></a></li>
							<li className="list-inline-item"><a href="#"><span className="fa fa-th-list"></span></a></li>
						</ul>
					</div>
					<div className="dn db-991 mt30 mb0">
						<div id="main2">
							<span id="open2" className="flaticon-filter-results-button filter_open_btn style2"> Show Filter</span>
						</div>
					</div>
				</div> */}
			</div>
			<div className="row">
				<div className="col-md-12 col-lg-8">
					<div className="row">
						<div className="grid_list_search_result">
							<div className="col-sm-12 col-md-4 col-lg-4 col-xl-5">
								<div className="left_area tac-xsd">
									<p>Найдено: 9</p>
								</div>
							</div>
							<div className="col-sm-12 col-md-8 col-lg-8 col-xl-7">
								<div className="right_area text-right tac-xsd">
									<ul>
										<li className="list-inline-item"><span className="stts" style={{marginRight: '10px'}}>Статус:</span>
											<select className="selectpicker show-tick">
												<option>Все</option>
												<option>Recent</option>
												<option>Old Review</option>
											</select>
										</li>
										<li className="list-inline-item" ><span className="shrtby" style={{marginRight: '10px'}}>Сортировать:</span>
											<select className="selectpicker show-tick">
												<option>Featured First</option>
												<option>Featured 2nd</option>
												<option>Featured 3rd</option>
												<option>Featured 4th</option>
												<option>Featured 5th</option>
											</select>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						
						{
                            [1,2,3,4,5,6,7,8,9,10].map(item => (
                                <div key={item} className="col-md-6 col-lg-6">
                                    <VariantCard disableArrows={false}/>
                                </div>
                            ))
                        }
						
						<div className="col-lg-12 mt20">
							<div className="mbp_pagination">
								<ul className="page_navigation">
								    <li className="page-item disabled">
								    	<a className="page-link" href="#" tabIndex="-1" aria-disabled="true"> <span className="flaticon-left-arrow"></span> Prev</a>
								    </li>
								    <li className="page-item"><a className="page-link" href="#">1</a></li>
								    <li className="page-item active" aria-current="page">
								    	<a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
								    </li>
								    <li className="page-item"><a className="page-link" href="#">3</a></li>
								    <li className="page-item"><a className="page-link" href="#">...</a></li>
								    <li className="page-item"><a className="page-link" href="#">29</a></li>
								    <li className="page-item">
								    	<a className="page-link" href="#"><span className="flaticon-right-arrow"></span></a>
								    </li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-xl-4">
					<div className="sidebar_listing_grid1 dn-991">
						<FilterWidget/>
						<PopularVariantsWidget/>
						<CategoriesWidget/>
						<RecentVariantsWidget/>
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
