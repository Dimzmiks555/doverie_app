import Link from 'next/link'
import { useEffect, useState } from 'react'


export default function RecentVariantsWidget({objects}) {

    const [data, setData] = useState([])


    useEffect(() => {
        
	if (typeof window != 'undefined') {
		let lastItems = localStorage.getItem('last')

        fetch(`http://localhost:5000/objects?last=${JSON.parse(lastItems)}`)
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
                            <img className="align-self-start mr-3" src="/images/blog/fls1.jpg" alt="fls1.jpg"></img>
                            <div className="media-body">
                                <a><h5 className="mt-0 post_title">{item?.rooms}-х комн. {item?.type}</h5></a>
                                <a href="#">{item?.price?.toLocaleString()} ₽</a>
                                <ul className="mb0">
                                    <li style={{marginRight: 10}} className="list-inline-item">Комнат: {item?.rooms}</li>
                                    <li className="list-inline-item">Площадь: {item?.square} м2</li>
                                </ul>
                            </div>
                        </div>
                    </Link>
                ))
            }

        </div>
    )
}