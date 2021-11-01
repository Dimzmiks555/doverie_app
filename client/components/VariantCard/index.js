import Link from 'next/link'


export default function VariantCard({disableArrows, id}) {
    return (
        <Link href={`/catalog/${id}`}>
            <div class="feat_property home7 style4">
                <div class="thumb">
                    {
                        disableArrows == true ? (
                            <img class="img-whp" src="images/property/fp4.jpg" alt="fp4.jpg"></img>
                        ) : (
                            <div class="fp_single_item_slider">
                                <div class="item">
                                    <img class="img-whp" src="images/property/fp4.jpg" alt="fp4.jpg"></img>
                                </div>
                                <div class="item">
                                    <img class="img-whp" src="images/property/fp5.jpg" alt="fp5.jpg"></img>
                                </div>
                            </div>
                        )
                    }
                    <div class="thmb_cntnt style2">
                        <ul class="tag mb0">
                            <li class="list-inline-item"><a href="#">Продажа</a></li>
                            <li style={{display: 'none'}} class="list-inline-item"><a href="#">Рекомендуем</a></li>
                        </ul>
                    </div>
                    <div class="thmb_cntnt style3">
                        <ul class="icon mb0">
                            {/* <li class="list-inline-item"><a href="#"><span class="flaticon-transfer-1"></span></a></li>
                            <li class="list-inline-item"><a href="#"><span class="flaticon-heart"></span></a></li> */}
                        </ul>
                        <a class="fp_price" href="#">1 200 000 ₽ <small></small></a>
                    </div>
                </div>
                <div class="details">
                    <div class="tc_content">
                        <p class="text-thm">Квартира</p>
                        <h4>2-х комнатная квартира</h4>
                        <p><span class="flaticon-placeholder"></span> Коммунистическая улица, Лиски</p>
                        <ul class="prop_details mb0">
                            <li class="list-inline-item"><a href="#">Кроватей: 4</a></li>
                            <li class="list-inline-item"><a href="#">Ванных: 2</a></li>
                            <li class="list-inline-item"><a href="#">Площадь: 100 м2</a></li>
                        </ul>
                    </div>
                    {/* <div class="fp_footer">
                        <ul class="fp_meta float-left mb0">
                            <li class="list-inline-item"><a href="#"><img src="images/property/pposter1.png" alt="pposter1.png"></img></a></li>
                            <li class="list-inline-item"><a href="#">Ali Tufan</a></li>
                        </ul>
                        <div class="fp_pdate float-right">4 years ago</div>
                    </div> */}
                </div>
            </div>
        </Link>
    )
}