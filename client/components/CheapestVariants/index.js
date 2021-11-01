import VariantCard from "../VariantCard";

export default function CheapestVariants() {
    return (
        <section id="best-property" class="best-property pt100 pb0">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="main-title">
                            <h2>Самые дешёвые предложения</h2>
                            <p>Варианты с минимальной ценой. <a class="float-right" href="#">Посмотреть всё <span class="flaticon-next"></span></a></p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    {
                        [1,2,3].map(item => (
                            <div class="col-sm-6 col-lg-4">
                                <VariantCard id={item}/>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
        </section>
    )
}