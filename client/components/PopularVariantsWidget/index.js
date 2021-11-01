import Link from 'next/link'

export default function PopularVariantsWidget() {
    return (
        <div class="terms_condition_widget">
            <h4 class="title">Популярные варианты</h4>
            <div class="sidebar_feature_property_slider">
                {
                    [1,2,3,4,5].map(item => (
                        <Link href={`/catalog/${item}`}>
                            <div class="item">
                                <div class="feat_property home7">
                                    <div class="thumb">
                                        <img class="img-whp" src="/images/property/fp1.jpg" alt="fp1.jpg"></img>
                                        <div class="thmb_cntnt">
                                            <ul class="tag mb0">
                                                <li class="list-inline-item"><a href="#">Аренда</a></li>
                                                <li style={{display: 'none'}} class="list-inline-item"><a href="#">Featured</a></li>
                                            </ul>
                                            <a class="fp_price" href="#">2 000 000 ₽</a>
                                            <h4 class="posr color-white">Квартира</h4>
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