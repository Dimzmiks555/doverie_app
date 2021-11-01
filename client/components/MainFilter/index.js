export default function MainFilter() {
    return (
        <div class="home_adv_srch_opt home3">
            <ul class="nav nav-pills" id="pills-tab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Купить</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Снять</a>
                </li>
            </ul>
            <div class="tab-content home1_adsrchfrm" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div class="home1-advnc-search home3" style={{width: '100%'}}>
                        <ul class="h1ads_1st_list mb0" style={{display: 'flex'}} >
                            <li class="list-inline-item">
                                <div class="form-group">
                                    {/* <input type="text" class="form-control" id="exampleInputName1" placeholder="Enter keyword..."></input> */}
                                </div>
                            </li>
                            <li class="list-inline-item">
                                <div class="search_option_two">
                                    <div class="candidate_revew_select">
                                        <select class="selectpicker w100 show-tick">
                                            <option>Тип </option>
                                            <option>Дом</option>
                                            <option>Квартира</option>
                                            <option>Коттедж</option>
                                        </select>
                                    </div>
                                </div>
                            </li>
                            <li class="list-inline-item">
                                <div class="search_option_two">
                                    <div class="candidate_revew_select">
                                        <select class="selectpicker w100 show-tick">
                                            <option>Количество комнат</option>
                                            <option>Студия</option>
                                            <option>1 комната</option>
                                            <option>2 комнаты</option>
                                            <option>3 комнаты</option>
                                        </select>
                                    </div>
                                </div>
                            </li>
                            <li class="list-inline-item"  style={{marginLeft: 'auto', display: 'block', marginRight: '60px'}} >
                                <div class="small_dropdown2 home3">
                                    <div id="prncgs" class="btn dd_btn">
                                        <span>Цена, руб.</span>
                                        <label for="exampleInputEmail2"><span class="fa fa-angle-down"></span></label>
                                    </div>
                                    <div class="dd_content2">
                                        <div class="pricing_acontent">
                                            <input type="text" class="amount" placeholder="52000"></input>
                                            <input type="text" class="amount2" placeholder="9850000"></input>
                                            <div class="slider-range"></div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="list-inline-item" style={{marginLeft: '60px', display: 'block', marginRight: '60px'}}>
                                <div class="search_option_button">
                                    <button type="submit" class="btn btn-thm3">Поиск</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <div class="home1-advnc-search home3">
                        <ul class="h1ads_1st_list mb0" style={{display: 'flex'}}>
                            <li class="list-inline-item">
                                {/* <div class="form-group">
                                    <input type="text" class="form-control" id="exampleInputName2" placeholder="Enter keyword..."></input>
                                </div> */}
                            </li>
                            <li class="list-inline-item">
                                <div class="search_option_two">
                                    <div class="candidate_revew_select">
                                        <select class="selectpicker w100 show-tick">
                                            <option>Тип</option>
                                            <option>Дом</option>
                                            <option>Квартира</option>
                                        </select>
                                    </div>
                                </div>
                            </li>
                            {/* <li class="list-inline-item">
                                <div class="form-group">
                                    <input type="text" class="form-control" id="exampleInputEmail3" placeholder="Location"></input>
                                    <label for="exampleInputEmail3"><span class="flaticon-maps-and-flags"></span></label>
                                </div>
                            </li> */}
                            <li class="list-inline-item">
                                <div class="small_dropdown2 home3">
                                    <div id="prncgs2" class="btn dd_btn">
                                        <span>Цена</span>
                                        <label><span class="fa fa-angle-down"></span></label>
                                    </div>
                                    <div class="dd_content2">
                                        <div class="pricing_acontent">
                                            <input type="text" class="amount" placeholder="$52,239"></input>
                                            <input type="text" class="amount2" placeholder="$985,14"></input>
                                            <div class="slider-range"></div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="custome_fields_520 list-inline-item" style={{display: 'block', marginLeft: 'auto'}}>
                                <div class="navbered">
                                    <div class="mega-dropdown home3">
                                        <span id="show_advbtn2" class="dropbtn">Ещё <i class="flaticon-more pl10 flr-520"></i></span>
                                        <div class="dropdown-content">
                                            <div class="row p15">
                                                <div class="col-lg-12">
                                                    <h4 class="text-thm3">Amenities</h4>
                                                </div>
                                                <div class="col-xxs-6 col-sm col-lg col-xl">
                                                    <ul class="ui_kit_checkbox selectable-list">
                                                        <li>
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="customCheck16"></input>
                                                                <label class="custom-control-label" for="customCheck16">Air Conditioning</label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="customCheck17"></input>
                                                                <label class="custom-control-label" for="customCheck17">Lawn</label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="customCheck18"></input>
                                                                <label class="custom-control-label" for="customCheck18">Swimming Pool</label>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="col-xxs-6 col-sm col-lg col-xl">
                                                    <ul class="ui_kit_checkbox selectable-list">
                                                        <li>
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="customCheck19"></input>
                                                                <label class="custom-control-label" for="customCheck19">Barbeque</label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="customCheck20"></input>
                                                                <label class="custom-control-label" for="customCheck20">Microwave</label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="customCheck21"></input>
                                                                <label class="custom-control-label" for="customCheck21">TV Cable</label>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="col-xxs-6 col-sm col-lg col-xl">
                                                    <ul class="ui_kit_checkbox selectable-list">
                                                        <li>
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="customCheck22"></input>
                                                                <label class="custom-control-label" for="customCheck22">Dryer</label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="customCheck23"></input>
                                                                <label class="custom-control-label" for="customCheck23">Outdoor Shower</label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="customCheck24"></input>
                                                                <label class="custom-control-label" for="customCheck24">Washer</label>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="col-xxs-6 col-sm col-lg col-xl">
                                                    <ul class="ui_kit_checkbox selectable-list">
                                                        <li>
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="customCheck25"></input>
                                                                <label class="custom-control-label" for="customCheck25">Gym</label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="customCheck26"></input>
                                                                <label class="custom-control-label" for="customCheck26">Refrigerator</label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="customCheck27"></input>
                                                                <label class="custom-control-label" for="customCheck27">WiFi</label>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="col-xxs-6 col-sm col-lg col-xl">
                                                    <ul class="ui_kit_checkbox selectable-list">
                                                        <li>
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="customCheck28"></input>
                                                                <label class="custom-control-label" for="customCheck28">Laundry</label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="customCheck29"></input>
                                                                <label class="custom-control-label" for="customCheck29">Sauna</label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="customCheck30"></input>
                                                                <label class="custom-control-label" for="customCheck30">Window Coverings</label>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="row p15 pt0-xsd">
                                                <div class="col-lg-11 col-xl-10">
                                                    <ul class="apeartment_area_list mb0">
                                                        <li class="list-inline-item">
                                                            <div class="candidate_revew_select">
                                                                <select class="selectpicker w100 show-tick">
                                                                    <option>Bathrooms</option>
                                                                    <option>1</option>
                                                                    <option>2</option>
                                                                    <option>3</option>
                                                                    <option>4</option>
                                                                    <option>5</option>
                                                                    <option>6</option>
                                                                    <option>7</option>
                                                                    <option>8</option>
                                                                </select>
                                                            </div>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <div class="candidate_revew_select">
                                                                <select class="selectpicker w100 show-tick">
                                                                    <option>Bedrooms</option>
                                                                    <option>1</option>
                                                                    <option>2</option>
                                                                    <option>3</option>
                                                                    <option>4</option>
                                                                    <option>5</option>
                                                                    <option>6</option>
                                                                    <option>7</option>
                                                                    <option>8</option>
                                                                </select>
                                                            </div>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <div class="candidate_revew_select">
                                                                <select class="selectpicker w100 show-tick">
                                                                    <option>Year built</option>
                                                                    <option>2013</option>
                                                                    <option>2014</option>
                                                                    <option>2015</option>
                                                                    <option>2016</option>
                                                                    <option>2017</option>
                                                                    <option>2018</option>
                                                                    <option>2019</option>
                                                                    <option>2020</option>
                                                                </select>
                                                            </div>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <div class="candidate_revew_select">
                                                                <select class="selectpicker w100 show-tick">
                                                                    <option>Built-up Area</option>
                                                                    <option>Adana</option>
                                                                    <option>Ankara</option>
                                                                    <option>Antalya</option>
                                                                    <option>Bursa</option>
                                                                    <option>Bodrum</option>
                                                                    <option>Gaziantep</option>
                                                                    <option>İstanbul</option>
                                                                    <option>İzmir</option>
                                                                    <option>Konya</option>
                                                                </select>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="col-lg-1 col-xl-2">
                                                    <div class="mega_dropdown_content_closer">
                                                        <h5 class="text-thm text-right mt15"><span id="hide_advbtn2" class="curp">Скрыть</span></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="list-inline-item">
                                <div class="search_option_button">
                                    <button type="submit" class="btn btn-thm3">Поиск</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}