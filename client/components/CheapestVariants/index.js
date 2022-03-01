import VariantCard from "../VariantCard";
import Link from 'next/link'

function CheapestVariants({objects}) {


    
    // objects.rows?.length = 3


    return (
        <section id="best-property" className="best-property pt100 pb0">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="main-title">
                            <h2>Новые предложения</h2>
                            <p>Варианты, выставленные недавно. <Link href="/catalog?type=Квартира&kind=Продажа&rooms=1,2,3,4,5,6&priceFrom=null&priceTo=null"><a className="float-right" href="#">Показать всё <span className="flaticon-next"></span></a></Link></p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        Показать все
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