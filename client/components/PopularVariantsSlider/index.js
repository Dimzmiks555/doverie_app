import VariantCard from "../VariantCard";
import Link from 'next/link'

export default function PopularVariantsSlider({objects}) {

    // objects.rows?.length = 10
    
    return (
        <section id="feature-property" className="feature-property mt20 pb50">
            <div className="container-fluid ovh">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="main-title mb40">
                            <h2 style={{background: '#00B060', padding: '16px 30px', color: '#fff', borderRadius: '10px'}}>Лучшие предложения <Link href="/catalog?rooms=1,2,3,4,5,6&priceFrom=null&priceTo=null&featured=true"><a style={{fontSize: 20,paddingTop: 7, color: '#fff'}} className="float-right" href="#">Показать всё <span className="flaticon-next"></span></a></Link></h2>
                            {/* <p>Подобранные нами варианты. </p> */}
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="feature_property_home3_slider" style={{display: 'flex', alignItems: 'center'}}>
                            {/* {
                                [0,1,2,3,4,5,6,7,8,9].map(item => (
                                    <div className="item" >
                                        <VariantCard disableArrows id={item}/>
                                    </div>
                                ))
                            } */}
                            {
                                objects?.rows?.map(item => (
                                    <div key={item.id} className="item">
                                        <VariantCard disableArrows object={item}/>
                                    </div>
                                ))
                            }
                            {/* <div className="feat_property home7 style4" onClick={handleLast}>
                        <div className="thumb" style={{minHeight: 220}}></div> */}
                            <Link href="/catalog?rooms=1,2,3,4,5,6&priceFrom=null&priceTo=null&featured=true">
                                <div className="item" >
                                    <div className="feat_property home7 style4" style={{display: 'flex', flexDirection: 'column',justifyContent: 'center',alignItems: 'center', padding: 20, minHeight: 379, border: '4px dashed #44bb44'}}>
                                        <div style={{marginBottom: 30, display: 'flex'}}>
                                            <div style={{height: 30, width: 30, background: '#595', borderRadius: '50%', marginRight: 20}}></div>
                                            <div style={{height: 30, width: 30, background: '#5b5', borderRadius: '50%', marginRight: 20}}></div>
                                            <div style={{height: 30, width: 30, background: '#5d5', borderRadius: '50%'}}></div>
                                        </div>
                                        <h3 style={{margin: 0}}>ПОКАЗАТЬ ВСЁ</h3>
                                    </div>
                                </div>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}