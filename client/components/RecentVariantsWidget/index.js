import Link from 'next/link'
import { useEffect, useState } from 'react'


export default function RecentVariantsWidget({objects}) {

    const [data, setData] = useState([])


    useEffect(() => {
        
	if (typeof window != 'undefined') {
		let lastItems = localStorage.getItem('last')

        fetch(`${process.env.NEXT_PUBLIC_API_HOST}/objects?last=${JSON.parse(lastItems)}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setData(data?.rows)
        })

	}
    }, [])


    return (
        <div className="sidebar_feature_listing">
            <h4 className="title">Недавно просмотренные</h4>
            
            {
                data?.map(item => (
                    <Link href={`/catalog/${item?.id}`}>
                        <div style={{cursor: 'pointer'}}  className="media">
                            <img className="align-self-start mr-3" style={{height: 80, width: 90, borderRadius: 6, objectFit: 'cover'}} src={`${process.env.NEXT_PUBLIC_API_HOST}/${item?.images?.[0]?.src}`} alt="fls1.jpg"></img>
                            <div className="media-body">
                                <a>{item?.type == 'Квартира' ? <h5 className="mt-0 post_title">{item?.rooms} комн. {item?.type?.toLowerCase()} {item.square} м<sup>2</sup>, {item?.level && +item?.level != 0 ? item?.level + ' этаж' : null}</h5> : <h5 className="mt-0 post_title">{item?.type} {item.square} м<sup>2</sup>{item?.place_square && +item?.place_square != 0 ? ', участок ' + item?.place_square + ' сот.' : null}</h5>}</a>
                                
                                <ul className="mb0">
                                    {/* <li style={{marginRight: 10}} className="list-inline-item">Комнат: {item?.rooms}</li>
                                    <li className="list-inline-item">Площадь: {item?.square} м2</li> */}
                                    <li className="list-inline-item">{item?.city}{(item?.area != 'нет' && item?.area != '0') && ', район ' + item?.area}</li>
                                </ul>
                                <a href="#">{item?.price?.toLocaleString()} ₽</a>
                            </div>
                        </div>
                    </Link>
                ))
            }

        </div>
    )
}