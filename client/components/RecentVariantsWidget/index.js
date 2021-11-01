import Link from 'next/link'


export default function RecentVariantsWidget({id}) {
    return (
        <div class="sidebar_feature_listing">
            <h4 class="title">Недавно просмотренные</h4>
            <Link href={`/catalog/${id}`}>
                <div style={{cursor: 'pointer'}}  class="media">
                    <img class="align-self-start mr-3" src="/images/blog/fls1.jpg" alt="fls1.jpg"></img>
                    <div class="media-body">
                        <a><h5 class="mt-0 post_title">2-х комнатная квартира</h5></a>
                        <a href="#">1 300 000 ₽</a>
                        <ul class="mb0">
                            <li style={{marginRight: 10}} class="list-inline-item">Комнат: 4</li>
                            <li class="list-inline-item">Площадь: 5280 м2</li>
                        </ul>
                    </div>
                </div>
            </Link>
        </div>
    )
}