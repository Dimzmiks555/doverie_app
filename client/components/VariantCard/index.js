import Link from 'next/link'


export default function VariantCard({disableArrows, object}) {

    function handleLast() {

        if (typeof window !== 'undefined') {
            let lastObj = localStorage.getItem('last')

            if (lastObj) {

                if (JSON.parse(lastObj)?.length < 4) {

                    let array = JSON.parse(lastObj)
                    
                    if (array.find(item => {return +item == +object.id})) {
                    } else {
                        array.push(object.id)
                    }
                    

                    localStorage.setItem('last', JSON.stringify(array))

                } else {
                    let array = JSON.parse(lastObj).shift()

                    if (array.find(item => {return +item == +object.id})) {
                    } else {
                        array.push(object.id)
                    }
                    localStorage.setItem('last', JSON.stringify(array))

                }
                
                

            } else {
                localStorage.setItem('last', JSON.stringify([object?.id]))
            }
        }

    }



    return (
            <div className="feat_property home7 style4" onClick={handleLast}>
                <div className="thumb" style={{minHeight: 220}}>
                    {
                        disableArrows == true ? (
                            <Link href={`/catalog/${object?.id}`}>
                                <img className="img-whp" src={`${process.env.NEXT_PUBLIC_API_HOST}/${object?.images?.[0]?.src}`} alt="fp4.jpg"></img>
                            </Link>
                        ) : (
                            <div className="fp_single_item_slider">
                                {
                                    object?.images?.map(image => (
                                        <div className="item">
                                            <img className="img-whp" src={`${process.env.NEXT_PUBLIC_API_HOST}/${image?.src}`} alt="fp4.jpg"></img>
                                        </div>
                                    ))
                                }
                            </div>
                        )
                    }
                    <div className="thmb_cntnt style2">
                        <ul className="tag mb0">
                            <li className="list-inline-item"><a href="#">{object?.kind}</a></li>
                            <li style={{display:'none'}} className="list-inline-item"><a href="#">{object?.kind}</a></li>
                            {
                                object?.featured && <li style={{width: 110}}  className="list-inline-item"><a href="#">Рекомендуем</a></li>
                            }
                        </ul>
                    </div>
                    <div className="thmb_cntnt style3">
                        <ul className="icon mb0">
                            {/* <li className="list-inline-item"><a href="#"><span className="flaticon-transfer-1"></span></a></li>
                            <li className="list-inline-item"><a href="#"><span className="flaticon-heart"></span></a></li> */}
                        </ul>
                        
                        <Link href={`/catalog/${object?.id}`}>
                            <a className="fp_price" href="#">{object?.price?.toLocaleString()} ₽ <small></small></a>
                        </Link>
                    </div>
                </div>
                
                <Link href={`/catalog/${object?.id}`}>
                    <div className="details">
                        <div className="tc_content">
                            <p className="text-thm">{object?.type}</p>
                            <h4>{object?.rooms} комнат. {object?.type?.toLowerCase()}</h4>
                            <p><span className="flaticon-placeholder"></span> {object?.street} улица, {object?.city}</p>
                            <ul className="prop_details mb0">
                                <li className="list-inline-item"><a href="#">Комнат: {object?.rooms}</a></li>
                                <li className="list-inline-item"><a href="#">Площадь: {object?.square} м2</a></li>
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
                </Link>
            </div>
    )
}