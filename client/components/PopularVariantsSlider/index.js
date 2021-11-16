import VariantCard from "../VariantCard";

export default function PopularVariantsSlider() {
    return (
        <section id="feature-property" className="feature-property mt80 pb50">
            <div className="container-fluid ovh">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="main-title mb40">
                            <h2>Лучшие варианты</h2>
                            <p>Подобранные нами варианты. <a className="float-right" href="#">Посмотреть всё <span className="flaticon-next"></span></a></p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="feature_property_home3_slider">
                            {
                                [0,1,2,3,4,5,6,7,8,9].map(item => (
                                    <div className="item" >
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