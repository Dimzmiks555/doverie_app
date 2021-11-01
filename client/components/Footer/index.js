export default function Footer() {
    return (
        <>
        <section class="footer_one home3">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-6 col-md-6 col-lg col-xl">
                        <div class="footer_about_widget home3">
                            <h4>О сайте</h4>
                            <p>Мы переосмысливаем, как вы покупаете, продаете и сдаете в аренду. Теперь вам легче попасть в то место, которое вы любите. Так что давайте сделаем это вместе.</p>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg col-xl">
                        <div class="footer_qlink_widget home3">
                            <h4>Информация</h4>
                            <ul class="list-unstyled">
                                <li><a href="#">О нас</a></li>
                                <li><a href="#">Правила & Условия</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg col-xl">
                        <div class="footer_contact_widget home3">
                            <h4>Контакты</h4>
                            <ul class="list-unstyled">
                                <li><a href="#"><span class="__cf_email__" data-cfemail="9bf2f5fdf4dbfdf2f5fff3f4eee8feb5f8f4f6">anodaday@yandex.ru</span></a></li>
                                <li><a href="#">город Лиски, улица Коммунистическая</a></li>
                                <li><a href="#">д. 12а, Рынок.</a></li>
                                <li><a href="#">+7 900-930-6978</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* <div class="col-sm-6 col-md-6 col-lg col-xl">
                        <div class="footer_social_widget home3">
                            <h4>Follow us</h4>
                            <ul class="mb30">
                                <li class="list-inline-item"><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fa fa-instagram"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fa fa-pinterest"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fa fa-dribbble"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fa fa-google"></i></a></li>
                            </ul>
                        </div>
                    </div> */}
                    <div class="col-sm-6 col-md-6 col-lg col-xl">
                        <div class="footer_social_widget home3">
                            <h4>Подписаться</h4>
                            <form class="footer_mailchimp_form home3">
                                <div class="form-row align-items-center">
                                    <div class="col-auto">
                                        <input type="email" class="form-control mb-2" id="inlineFormInput" placeholder="Ваша почта"></input>
                                    </div>
                                    <div class="col-auto">
                                        <button type="submit" class="btn btn-primary mb-2"><i class="fa fa-angle-right"></i></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="footer_middle_area home3 pt30 pb30">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-6 col-xl-6">
                        <div class="footer_menu_widget home3">
                            <ul>
                                <li class="list-inline-item"><a href="#">Главная</a></li>
                                <li class="list-inline-item"><a href="#">Каталог</a></li>
                                <li class="list-inline-item"><a href="#">О нас</a></li>
                                <li class="list-inline-item"><a href="#">Галерея</a></li>
                                <li class="list-inline-item"><a href="#">Контакты</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xl-6">
                        <div class="copyright-widget home3 text-right">
                            <p>© 2020 Доверие.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}