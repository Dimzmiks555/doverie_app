import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { Divider, TextField } from '@mui/material';
import router from 'next/router';

export default function FilterWidget({query}) {

    const [type, setType] = useState(query?.type);
    const [kind, setKind] = useState(query?.kind);
    const [area, setArea] = useState(query?.area);
    const [priceTo, setPriceTo] = useState(+query?.priceTo);
    const [rooms, setRooms] = useState([...query?.rooms]);
    const [priceFrom, setPriceFrom] = useState(+query?.priceFrom);
    const [squareFrom, setSquareFrom] = useState(+query?.squareFrom);
    const [squareTo, setSquareTo] = useState(+query?.squareTo);


    const handleChangeType = (event) => {
        setType(event.target.value);
        router.query?.type = event.target.value

        router.push({
            pathname: '/catalog',
            query: router.query
        })

    };

    const handleChangeKind = (event) => {
        setKind(event.target.value);
        router.query?.kind = event.target.value

        router.push({
            pathname: '/catalog',
            query: router.query
        })

    };
    const handleChangeRooms = (event) => {
        const {
          target: { value },
        } = event;
        setRooms(
          // On autofill we get a the stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
        
        router.query?.rooms = event.target.value.join(',')
        router.push({
            pathname: '/catalog',
            query: router.query
        })
      };
      const handlePriceTo = (event) => {
            setPriceTo(event.target.value);
            router.query?.priceTo = event.target.value

            router.push({
                pathname: '/catalog',
                query: router.query
            })

        };

      const handlePriceFrom = (event) => {
            setPriceFrom(event.target.value);
            router.query?.priceFrom = event.target.value

            router.push({
                pathname: '/catalog',
                query: router.query
            })

        };
    const handleArea = (event) => {
        setArea(event.target.value);
        router.query?.area = event.target.value

        router.push({
            pathname: '/catalog',
            query: router.query
        })

    };

    const handleSquareTo = (event) => {
        setSquareTo(event.target.value);
        router.query?.squareTo = event.target.value

        router.push({
            pathname: '/catalog',
            query: router.query
        })

    };

  const handleSquareFrom = (event) => {
        setSquareFrom(event.target.value);
        router.query?.squareFrom = event.target.value

        router.push({
            pathname: '/catalog',
            query: router.query
        })

    };

    return (
        <div className="sidebar_listing_list">
            <div className="sidebar_advanced_search_widget">
                <h4 style={{marginBottom: 30}}>Фильтры</h4>
                <ul className="sasw_list mb0">
                    <li>
                        <FormControl fullWidth sx={{mb:2}}> 
                            <InputLabel id="demo-simple-select-label">Вид</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={kind}
                                label="Вид"
                                onChange={handleChangeKind}
                                // multiple
                            >
                                <MenuItem value={'Продажа'}>Продажа</MenuItem>
                                <MenuItem value={'Аренда'}>Аренда</MenuItem>
                            </Select>
                        </FormControl>
                    </li>
                    <li>
                        <FormControl fullWidth sx={{mb:2}}>
                            <InputLabel id="demo-simple-select-label">Тип</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={type}
                                label="Тип"
                                onChange={handleChangeType}
                                // multiple
                            >
                                <MenuItem value={"Квартира"}>Квартира</MenuItem>
                                <MenuItem value={"Дом"}>Дом</MenuItem>
                            </Select>
                        </FormControl>
                    </li>
                    <li>
                        <FormControl fullWidth sx={{mb:2}}>
                            <InputLabel id="demo-simple-select-label">Количество комнат</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={rooms}
                                label="Количество комнат"
                                multiple
                                onChange={handleChangeRooms}
                                multiple
                            >
                                {/* <MenuItem >нет</MenuItem> */}
                                <MenuItem value={"1"}>1</MenuItem>
                                <MenuItem value={"2"}>2</MenuItem>
                                <MenuItem value={"3"}>3</MenuItem>
                                <MenuItem value={"4"}>4</MenuItem>
                                <MenuItem value={"5"}>5</MenuItem>
                                <MenuItem value={"6"}>6</MenuItem>
                            </Select>
                        </FormControl>
                    </li>
                    <li>
                        <FormControl fullWidth sx={{mb:2}}>
                            <InputLabel id="demo-simple-select-label">Район</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={area}
                                label="Район"
                                onChange={handleArea}
                                // multiple
                            >
                                <MenuItem>нет</MenuItem>
                                <MenuItem value={"Интернат"}>Интернат</MenuItem>
                                <MenuItem value={"Мелбугор"}>Мелбугор</MenuItem>
                                <MenuItem value={"Сах. завод"}>Сах. завод</MenuItem>
                                <MenuItem value={"Песковатка"}>Песковатка</MenuItem>
                            </Select>
                        </FormControl>
                    </li>
                    <Divider sx={{mb:2, width: '80%', mx: '10%'}}>Цена</Divider>
                    <li>
                    <TextField label="Цена от, руб." type="number" value={+priceFrom} onChange={handlePriceFrom}  fullWidth sx={{mb:2}}></TextField>
                    </li>
                    <li>
                    <TextField label="Цена до, руб."  type="number" value={+priceTo} onChange={handlePriceTo} fullWidth sx={{mb:2}}></TextField>
                    </li>
                    <Divider sx={{mb:2, width: '80%', mx: '10%'}}>Площадь</Divider>
                    <li>
                    <TextField label="Площадь от, м²" type="number" value={+squareFrom} onChange={handleSquareFrom} fullWidth sx={{mb:2}}></TextField>
                    </li>
                    <li>
                    <TextField label="Площадь до, м²"  type="number" value={+squareTo} onChange={handleSquareTo} fullWidth sx={{mb:4}}></TextField>
                    </li>
                    {/* <li>
                        <div className="search_option_button">
                            <button type="submit" style={{background: 'green', color: '#fff', fontWeight: 'bold'}} className="btn btn-block btn-thm">Найти</button>
                        </div>
                    </li> */}
                </ul>
            </div>
        </div>
    )
}