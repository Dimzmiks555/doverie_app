import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { TextField } from '@mui/material';
import Link from 'next/link'

export default function MainFilter() {

    const [type, setType] = useState('Квартира');
    const [kind, setKind] = useState('Продажа');
    const [priceTo, setPriceTo] = useState(null);
    const [rooms, setRooms] = useState(['1','2','3', '4']);
    const [priceFrom, setPriceFrom] = useState(null);

    const handleChangeType = (event) => {
        setType(event.target.value);
    };

    const handleChangePriceFrom = (event) => {
        setPriceFrom(event.target.value);
    };

    const handleChangePriceTo = (event) => {
        setPriceTo(event.target.value);
    };

    const handleChangeRooms = (event) => {
        const {
          target: { value },
        } = event;
        setRooms(
          // On autofill we get a the stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
        console.log(rooms)
      };

    


    return (
        <div className="home_adv_srch_opt home3">
            <ul className="nav nav-pills" id="pills-tab" role="tablist">
                <li className="nav-item" onClick={e => {setKind('Продажа')}}>
                    <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Купить</a>
                </li>
                <li className="nav-item" onClick={e => {setKind('Аренда')}}>
                    <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Снять</a>
                </li>
            </ul>
            <div className="tab-content home1_adsrchfrm" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div className="home1-advnc-search home3">
                        
                        <ul className="h1ads_1st_list mb0" style={{display: 'flex', flexWrap: 'wrap'}} >
                            
                            <li style={{minWidth: 200, marginBottom: 10}}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Тип</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={type}
                                        label="Тип"
                                        onChange={handleChangeType}
                                    >
                                        <MenuItem value={"Квартира"}>Квартира</MenuItem>
                                        <MenuItem value={"Дом"}>Дом</MenuItem>
                                        <MenuItem value={"Коттедж"}>Коттедж</MenuItem>
                                        <MenuItem value={"Половина дома"}>Половина дома</MenuItem>
                                        <MenuItem value={"Участок"}>Участок</MenuItem>
                                    </Select>
                                </FormControl>
                            </li> 
                            <li style={{minWidth: 200, marginBottom: 10}}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Количество комнат</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={rooms}
                                        label="Количество комнат"
                                        onChange={handleChangeRooms}
                                        multiple
                                    >
                                        <MenuItem value={"1"}>1</MenuItem>
                                        <MenuItem value={"2"}>2</MenuItem>
                                        <MenuItem value={"3"}>3</MenuItem>
                                        <MenuItem value={"4"}>4</MenuItem>
                                        <MenuItem value={"5"}>5</MenuItem>
                                        <MenuItem value={"6"}>6</MenuItem>
                                    </Select>
                                </FormControl>
                            </li>
                            <li style={{minWidth: 200, marginBottom: 10}}>
                                <TextField label="Цена от" value={priceFrom} type="number" onChange={handleChangePriceFrom}></TextField>
                            </li>
                            <li style={{minWidth: 200, marginBottom: 10}}>
                                <TextField label="Цена до" value={priceTo} type="number" onChange={handleChangePriceTo}></TextField>
                            </li>
                            <li className="list-inline-item" style={{display: 'block', marginLeft: 'auto'}}>
                                <div className="search_option_button" style={{marginLeft: 'auto'}}>
                                {
                                    rooms?.length > 0 ? (
                                        <Link href={`/catalog?type=${type}&kind=${kind}&rooms=${rooms.join(',')}&priceFrom=${priceFrom}&priceTo=${priceTo}`}><button type="submit" style={{marginLeft: 'auto'}} className="btn btn-thm3">Поиск</button></Link>
                                    ) : (
                                        <button type="submit" style={{marginLeft: 'auto', background: '#ccc', cursor: 'default'}} className="btn btn-thm3">Поиск</button>
                                    )
                                }
                                </div>
                            </li>   
                        </ul>
                    </div>
                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <div className="home1-advnc-search home3">
                    <ul className="h1ads_1st_list mb0" style={{display: 'flex', flexWrap: 'wrap'}} >
                            
                            <li style={{minWidth: 200, marginBottom: 10}}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Тип</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={type}
                                        label="Тип"
                                        onChange={handleChangeType}
                                    >
                                        <MenuItem value={"Квартира"}>Квартира</MenuItem>
                                        <MenuItem value={"Дом"}>Дом</MenuItem>
                                    </Select>
                                </FormControl>
                            </li> 
                            <li style={{minWidth: 200, marginBottom: 10}}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Количество комнат</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={rooms}
                                        label="Количество комнат"
                                        onChange={handleChangeRooms}
                                        multiple
                                    >
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                        <MenuItem value={4}>4</MenuItem>
                                        <MenuItem value={5}>5</MenuItem>
                                        <MenuItem value={6}>6</MenuItem>
                                    </Select>
                                </FormControl>
                            </li>
                            <li style={{minWidth: 200, marginBottom: 10}}>
                                <TextField label="Цена от" value={priceFrom} type="number" onChange={handleChangePriceFrom}></TextField>
                            </li>
                            <li style={{minWidth: 200, marginBottom: 10}}>
                                <TextField label="Цена до" value={priceTo} type="number" onChange={handleChangePriceTo}></TextField>
                            </li>
                            <li className="list-inline-item" style={{display: 'block', marginLeft: 'auto'}}>
                                <div className="search_option_button" style={{marginLeft: 'auto'}}>
                                {
                                    rooms?.length > 0 ? (
                                        <Link href={`/catalog?type=${type}&kind=${kind}&rooms=${encodeURIComponent(rooms.join(','))}&priceFrom=${priceFrom}&priceTo=${priceTo}`}><button type="submit" style={{marginLeft: 'auto'}} className="btn btn-thm3">Поиск</button></Link>
                                    ) : (
                                        <button type="submit" style={{marginLeft: 'auto', background: '#ccc', cursor: 'default'}} className="btn btn-thm3">Поиск</button>
                                    )
                                }
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}