import Link from 'next/link'

export default function PopularVariantsWidget() {
    return (
        <div className="terms_condition_widget">
            <h4 className="title">Популярные варианты</h4>
            <div className="sidebar_feature_property_slider">
                {
                    [1,2,3,4,5].map(item => (
                        <Link href={`/catalog/${item}`}>
                            <div className="item">
                                <div className="feat_property home7">
                                    <div className="thumb">
                                        <img className="img-whp" src="/images/property/fp1.jpg" alt="fp1.jpg"></img>
                                        <div className="thmb_cntnt">
                                            <ul className="tag mb0">
                                                <li className="list-inline-item"><a href="#">Аренда</a></li>
                                                <li style={{display: 'none'}} className="list-inline-item"><a href="#">Featured</a></li>
                                            </ul>
                                            <a className="fp_price" href="#">2 000 000 ₽</a>
                                            <h4 className="posr color-white">Квартира</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                }
                
            </div>
        </div>
    )
}