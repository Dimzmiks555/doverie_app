import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import CategoriesWidget from '../components/CategoriesWidget/index.js';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
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


export default function Home({data, dataPopular}) {


	const [kind, setKind] = useState('');

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
//   useScript('/js/jquery-scrolltofixed-min.js');
  useScript('/js/script.js');


  return (
    <div className="wrapper">


	{/* <!-- Main Header Nav --> */}
	<Header/>
	{/* <!-- Modal --> */}

    <section className="our-listing bgc-f7 pb30-991">
		<div className="container">
			
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
								<FormControl fullWidth sx={{my:1.5, width: 200}} size="small"> 
									<InputLabel id="demo-simple-select-label" sx={{fontSize: 14}} >Сортировка</InputLabel>
									<Select
										sx={{fontSize: 14}}
										labelId="demo-simple-select-label"
										id="demo-simple-select"
										value={kind}
										label="Сортировка"
										
										// onChange={handleChangeRooms}
										// multiple
									>
										<MenuItem value={1}>1</MenuItem>
										<MenuItem value={2}>2</MenuItem>
										<MenuItem value={3}>3</MenuItem>
										<MenuItem value={4}>4</MenuItem>
										<MenuItem value={5}>5</MenuItem>
										<MenuItem value={6}>6</MenuItem>
									</Select>
								</FormControl>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						
						{
                            data?.rows?.map(item => (
                                <div key={item.id} className="col-md-6 col-lg-6">
                                    <VariantCard object={item} disableArrows={false}/>
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
						<PopularVariantsWidget objects={dataPopular}/>
						{/* <CategoriesWidget/> */}
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
export async function getServerSideProps() {
    const res = await fetch(`http://localhost:5000/objects/`)
    const data = await res.json()

    const resPopular = await fetch(`http://localhost:5000/objects?featured=true`)
    const dataPopular = await resPopular.json()

    return {
        props: {
            data, dataPopular
        }
    }
}