import Link from 'next/link'


export default function VariantCard({disableArrows, id}) {
    return (
        <Link href={`/catalog/${id}`}>
            <div className="feat_property home7 style4">
                <div className="thumb">
                    {
                        disableArrows == true ? (
                            <img className="img-whp" src="images/property/fp4.jpg" alt="fp4.jpg"></img>
                        ) : (
                            <div className="fp_single_item_slider">
                                <div className="item">
                                    <img className="img-whp" src="images/property/fp4.jpg" alt="fp4.jpg"></img>
                                </div>
                                <div className="item">
                                    <img className="img-whp" src="images/property/fp5.jpg" alt="fp5.jpg"></img>
                                </div>
                            </div>
                        )
                    }
                    <div className="thmb_cntnt style2">
                        <ul className="tag mb0">
                            <li className="list-inline-item"><a href="#">Продажа</a></li>
                            <li style={{display: 'none'}} className="list-inline-item"><a href="#">Рекомендуем</a></li>
                        </ul>
                    </div>
                    <div className="thmb_cntnt style3">
                        <ul className="icon mb0">
                            {/* <li className="list-inline-item"><a href="#"><span className="flaticon-transfer-1"></span></a></li>
                            <li className="list-inline-item"><a href="#"><span className="flaticon-heart"></span></a></li> */}
                        </ul>
                        <a className="fp_price" href="#">1 200 000 ₽ <small></small></a>
                    </div>
                </div>
                <div className="details">
                    <div className="tc_content">
                        <p className="text-thm">Квартира</p>
                        <h4>2-х комнатная квартира</h4>
                        <p><span className="flaticon-placeholder"></span> Коммунистическая улица, Лиски</p>
                        <ul className="prop_details mb0">
                            <li className="list-inline-item"><a href="#">Кроватей: 4</a></li>
                            <li className="list-inline-item"><a href="#">Ванных: 2</a></li>
                            <li className="list-inline-item"><a href="#">Площадь: 100 м2</a></li>
                        </ul>
                    </div>
                    {/* <div className="fp_footer">
                        <ul className="fp_meta float-left mb0">
                            <li className="list-inline-item"><a href="#"><img src="images/property/pposter1.png" alt="pposter1.png"></img></a></li>
                            <li className="list-inline-item"><a href="#">Ali Tufan</a></li>
                        </ul>
                        <div className="fp_pdate float-right">4 years ago</div>
                    </div> */}
                </div>
            </div>
        </Link>
    )
}