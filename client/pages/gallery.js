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


function Gallery({objects}) {


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
						    <li class="breadcrumb-item active" aria-current="page">Галерея</li>
						</ol>
						<h1 class="breadcrumb_title">Галерея</h1>
					</div>
				</div>
			</div>
		</div>
	</section>

	{/* <!-- About Text Content --> */}
	<section class="about-section pb30">
		<div class="container">
            {console.log(objects)}
			<div class="row">
				{
                    objects?.map(item => (
                        <div class="col-sm-6 col-md-6 col-lg-4">
                            <div class="gallery_item">
                                <img style={{maxHeight: 240, objectFit: 'cover'}} class="img-fluid img-circle-rounded w100" src={`http://localhost:5000/${item.src}`} alt="fp1.jpg"></img>
                                <div class="gallery_overlay"><a class="icon popup-img" href={`http://localhost:5000/${item.src}`}><span class="flaticon-zoom-in"></span></a></div>
                            </div>
                        </div>
                    ))
                }
			</div>
		</div>
	</section>

	<DarkFooter/>
<a className="scrollToHome text-thm3" href="#"><i className="flaticon-arrows"></i></a>
</div>
  )
}

export async function getServerSideProps() {
    const res = await fetch(`http://localhost:5000/gallery`)
    const objects = await res.json()


    return {props : {objects}}
}

export default Gallery