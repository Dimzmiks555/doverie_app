import Link from 'next/link'


export default function RecentVariantsWidget({id}) {
    return (
        <div className="sidebar_feature_listing">
            <h4 className="title">Недавно просмотренные</h4>
            <Link href={`/catalog/${id}`}>
                <div style={{cursor: 'pointer'}}  className="media">
                    <img className="align-self-start mr-3" src="/images/blog/fls1.jpg" alt="fls1.jpg"></img>
                    <div className="media-body">
                        <a><h5 className="mt-0 post_title">2-х комнатная квартира</h5></a>
                        <a href="#">1 300 000 ₽</a>
                        <ul className="mb0">
                            <li style={{marginRight: 10}} className="list-inline-item">Комнат: 4</li>
                            <li className="list-inline-item">Площадь: 5280 м2</li>
                        </ul>
                    </div>
                </div>
            </Link>
        </div>
    )
}