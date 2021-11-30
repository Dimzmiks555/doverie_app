import Link from 'next/link'

export default function PopularVariantsWidget({objects}) {
    return (
        <div className="terms_condition_widget">
            <h4 className="title">Популярные варианты</h4>
            <div className="sidebar_feature_property_slider">
                {
                    objects?.rows?.map(item => (
                        <Link href={`/catalog/${item.id}`}>
                            <div className="item">
                                <div className="feat_property home7">
                                    <div className="thumb">
                                    <Link href={`/catalog/${item?.id}`}>
                                        <img className="img-whp" src={`${process.env.NEXT_PUBLIC_API_HOST}/${item?.images?.[0]?.src}`} alt="fp4.jpg"></img>
                                    </Link>
                                        <div className="thmb_cntnt">
                                            <ul className="tag mb0">
                                                <li className="list-inline-item"><a href="#">{item?.kind}</a></li>
                                                <li style={{display:'none'}} className="list-inline-item"><a href="#">{item?.kind}</a></li>
                                                {
                                                    item?.featured && <li style={{width: 110}}  className="list-inline-item"><a href="#">Рекомендуем</a></li>
                                                }
                                            </ul>
                                            <a className="fp_price" href="#">{item?.price?.toLocaleString()} ₽</a>
                                            <h4 className="posr color-white">{item?.rooms} комн. {item?.type?.toLowerCase()}</h4>
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