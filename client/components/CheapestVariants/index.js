import VariantCard from "../VariantCard";

export default function CheapestVariants() {
    return (
        <section id="best-property" className="best-property pt100 pb0">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="main-title">
                            <h2>Самые дешёвые предложения</h2>
                            <p>Варианты с минимальной ценой. <a className="float-right" href="#">Посмотреть всё <span className="flaticon-next"></span></a></p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        [1,2,3].map(item => (
                            <div key={item} className="col-sm-6 col-lg-4">
                                <VariantCard id={item}/>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
        </section>
    )
}