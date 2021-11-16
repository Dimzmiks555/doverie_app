export default function FilterWidget() {
    return (
        <div className="sidebar_listing_list">
            <div className="sidebar_advanced_search_widget">
                <ul className="sasw_list mb0">
                    <li>
                        <div className="search_option_two">
                            <div className="candidate_revew_select">
                                <select className="selectpicker w100 show-tick">
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
                        <div className="search_option_two">
                            <div className="candidate_revew_select">
                                <select className="selectpicker w100 show-tick">
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
                        <div className="small_dropdown2">
                            <div id="prncgs2" className="btn dd_btn">
                                <span>Цена</span>
                                <label htmlFor="exampleInputEmail2"><span className="fa fa-angle-down"></span></label>
                            </div>
                            <div className="dd_content2">
                                <div className="pricing_acontent">
                                    <input type="text" className="amount" placeholder="$52,239"></input>
                                    <input type="text" className="amount2" placeholder="$985,14"></input>
                                    <div className="slider-range"></div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="search_option_two">
                            <div className="candidate_revew_select">
                                <select className="selectpicker w100 show-tick">
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
                        <div className="search_option_two">
                            <div className="candidate_revew_select">
                                <select className="selectpicker w100 show-tick">
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
                        <div className="search_option_two">
                            <div className="candidate_revew_select">
                                <select className="selectpicker w100 show-tick">
                                    <option>Гараж</option>
                                    <option>Да</option>
                                    <option>Нет</option>
                                </select>
                            </div>
                        </div>
                    </li>
                    {/* <li>
                        <div className="search_option_two">
                            <div className="candidate_revew_select">
                                <select className="selectpicker w100 show-tick">
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
                    <li className="min_area list-inline-item">
                        <div className="htmlForm-group">
                            <input type="text" className="htmlForm-control" id="exampleInputName2" placeholder="Мин. площадь"></input>
                        </div>
                    </li>
                    <li className="max_area list-inline-item">
                        <div className="htmlForm-group">
                            <input type="text" className="htmlForm-control" id="exampleInputName3" placeholder="Макс. площадь"></input>
                        </div>
                    </li>
                    <li>
                        <div id="accordion" className="panel-group">
                            <div className="panel">
                                <div className="panel-heading">
                                    <h4 className="panel-title">
                                        <a href="#panelBodyRating" className="accordion-toggle link" data-toggle="collapse" data-parent="#accordion"><i className="flaticon-more"></i> Ещё</a>
                                    </h4>
                                </div>
                                <div id="panelBodyRating" className="panel-collapse collapse">
                                    <div className="panel-body row">
                                        <div className="col-lg-12">
                                            <ul className="ui_kit_checkbox selectable-list float-left fn-400">
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck16"></input>
                                                        <label className="custom-control-label" htmlFor="customCheck16">Air Conditioning</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck17"></input>
                                                        <label className="custom-control-label" htmlFor="customCheck17">Barbeque</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck18"></input>
                                                        <label className="custom-control-label" htmlFor="customCheck18">Gym</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck19"></input>
                                                        <label className="custom-control-label" htmlFor="customCheck19">Microwave</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck20"></input>
                                                        <label className="custom-control-label" htmlFor="customCheck20">TV Cable</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck21"></input>
                                                        <label className="custom-control-label" htmlFor="customCheck21">Lawn</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck22"></input>
                                                        <label className="custom-control-label" htmlFor="customCheck22">Refrigerator</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck23"></input>
                                                        <label className="custom-control-label" htmlFor="customCheck23">Swimming Pool</label>
                                                    </div>
                                                </li>
                                            </ul>
                                            <ul className="ui_kit_checkbox selectable-list float-right fn-400">
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck24"></input>
                                                        <label className="custom-control-label" htmlFor="customCheck24">WiFi</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck25"></input>
                                                        <label className="custom-control-label" htmlFor="customCheck25">Sauna</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck26"></input>
                                                        <label className="custom-control-label" htmlFor="customCheck26">Dryer</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck27"></input>
                                                        <label className="custom-control-label" htmlFor="customCheck27">Washer</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck28"></input>
                                                        <label className="custom-control-label" htmlFor="customCheck28">Laundry</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck29"></input>
                                                        <label className="custom-control-label" htmlFor="customCheck29">Outdoor Shower</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck30"></input>
                                                        <label className="custom-control-label" htmlFor="customCheck30">Window Coverings</label>
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
                        <div className="search_option_button">
                            <button type="submit" className="btn btn-block btn-thm">Найти</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}