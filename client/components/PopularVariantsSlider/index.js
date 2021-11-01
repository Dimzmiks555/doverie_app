import VariantCard from "../VariantCard";

export default function PopularVariantsSlider() {
    return (
        <section id="feature-property" class="feature-property mt80 pb50">
            <div class="container-fluid ovh">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="main-title mb40">
                            <h2>Лучшие варианты</h2>
                            <p>Подобранные нами варианты. <a class="float-right" href="#">Посмотреть всё <span class="flaticon-next"></span></a></p>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="feature_property_home3_slider">
                            {
                                [0,1,2,3,4,5,6,7,8,9].map(item => (
                                    <div class="item" >
                                        <VariantCard disableArrows id={item}/>
                                    </div>
                                ))
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}