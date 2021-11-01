export default function FilterWidget() {
    return (
        <div class="sidebar_listing_list">
            <div class="sidebar_advanced_search_widget">
                <ul class="sasw_list mb0">
                    <li>
                        <div class="search_option_two">
                            <div class="candidate_revew_select">
                                <select class="selectpicker w100 show-tick">
                                    <option>Статус</option>
                                    <option>Apartment</option>
                                    <option>Bungalow</option>
                                    <option>Condo</option>
                                    <option>House</option>
                                    <option>Land</option>
                                    <option>Single Family</option>
                                </select>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="search_option_two">
                            <div class="candidate_revew_select">
                                <select class="selectpicker w100 show-tick">
                                    <option>Тип</option>
                                    <option>Apartment</option>
                                    <option>Bungalow</option>
                                    <option>Condo</option>
                                    <option>House</option>
                                    <option>Land</option>
                                    <option>Single Family</option>
                                </select>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="small_dropdown2">
                            <div id="prncgs2" class="btn dd_btn">
                                <span>Цена</span>
                                <label for="exampleInputEmail2"><span class="fa fa-angle-down"></span></label>
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
                    <li>
                        <div class="search_option_two">
                            <div class="candidate_revew_select">
                                <select class="selectpicker w100 show-tick">
                                    <option>Ванные</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                </select>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="search_option_two">
                            <div class="candidate_revew_select">
                                <select class="selectpicker w100 show-tick">
                                    <option>Кровати</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                </select>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="search_option_two">
                            <div class="candidate_revew_select">
                                <select class="selectpicker w100 show-tick">
                                    <option>Гараж</option>
                                    <option>Да</option>
                                    <option>Нет</option>
                                </select>
                            </div>
                        </div>
                    </li>
                    {/* <li>
                        <div class="search_option_two">
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
                        </div>
                    </li> */}
                    <li class="min_area list-inline-item">
                        <div class="form-group">
                            <input type="text" class="form-control" id="exampleInputName2" placeholder="Мин. площадь"></input>
                        </div>
                    </li>
                    <li class="max_area list-inline-item">
                        <div class="form-group">
                            <input type="text" class="form-control" id="exampleInputName3" placeholder="Макс. площадь"></input>
                        </div>
                    </li>
                    <li>
                        <div id="accordion" class="panel-group">
                            <div class="panel">
                                <div class="panel-heading">
                                    <h4 class="panel-title">
                                        <a href="#panelBodyRating" class="accordion-toggle link" data-toggle="collapse" data-parent="#accordion"><i class="flaticon-more"></i> Ещё</a>
                                    </h4>
                                </div>
                                <div id="panelBodyRating" class="panel-collapse collapse">
                                    <div class="panel-body row">
                                        <div class="col-lg-12">
                                            <ul class="ui_kit_checkbox selectable-list float-left fn-400">
                                                <li>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck16"></input>
                                                        <label class="custom-control-label" for="customCheck16">Air Conditioning</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck17"></input>
                                                        <label class="custom-control-label" for="customCheck17">Barbeque</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck18"></input>
                                                        <label class="custom-control-label" for="customCheck18">Gym</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck19"></input>
                                                        <label class="custom-control-label" for="customCheck19">Microwave</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck20"></input>
                                                        <label class="custom-control-label" for="customCheck20">TV Cable</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck21"></input>
                                                        <label class="custom-control-label" for="customCheck21">Lawn</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck22"></input>
                                                        <label class="custom-control-label" for="customCheck22">Refrigerator</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck23"></input>
                                                        <label class="custom-control-label" for="customCheck23">Swimming Pool</label>
                                                    </div>
                                                </li>
                                            </ul>
                                            <ul class="ui_kit_checkbox selectable-list float-right fn-400">
                                                <li>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck24"></input>
                                                        <label class="custom-control-label" for="customCheck24">WiFi</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck25"></input>
                                                        <label class="custom-control-label" for="customCheck25">Sauna</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck26"></input>
                                                        <label class="custom-control-label" for="customCheck26">Dryer</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck27"></input>
                                                        <label class="custom-control-label" for="customCheck27">Washer</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck28"></input>
                                                        <label class="custom-control-label" for="customCheck28">Laundry</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck29"></input>
                                                        <label class="custom-control-label" for="customCheck29">Outdoor Shower</label>
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
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="search_option_button">
                            <button type="submit" class="btn btn-block btn-thm">Найти</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}