import VariantCard from "../VariantCard";

function CheapestVariants({objects}) {


    
    // objects.rows?.length = 3


    return (
        <section id="best-property" className="best-property pt100 pb0">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="main-title">
                            <h2>Новые предложения</h2>
                            <p>Варианты, выставленные недавно. </p>
                        </div>
                    </div>
                </div>
                {console.log(objects)}
                <div className="row">
                    {
                        objects?.rows?.slice(0,3)?.map(item => (
                            <div key={item.id} className="col-sm-6 col-lg-4">
                                <VariantCard object={item}/>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
        </section>
    )
}


export default CheapestVariants