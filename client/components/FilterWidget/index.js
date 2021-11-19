import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { Divider, TextField } from '@mui/material';

export default function FilterWidget() {

    const [kind, setKind] = useState('')


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
                                // onChange={handleChangeRooms}
                                // multiple
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
                    <li>
                        <FormControl fullWidth sx={{mb:2}}>
                            <InputLabel id="demo-simple-select-label">Тип</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={kind}
                                label="Тип"
                                // onChange={handleChangeRooms}
                                // multiple
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
                    <li>
                        <FormControl fullWidth sx={{mb:2}}>
                            <InputLabel id="demo-simple-select-label">Количество комнат</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={kind}
                                label="Количество комнат"
                                // onChange={handleChangeRooms}
                                // multiple
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
                    <li>
                        <FormControl fullWidth sx={{mb:2}}>
                            <InputLabel id="demo-simple-select-label">Район</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={kind}
                                label="Район"
                                // onChange={handleChangeRooms}
                                // multiple
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
                    <Divider sx={{mb:2, width: '80%', mx: '10%'}}>Цена</Divider>
                    <li>
                    <TextField label="Цена от, руб." type="number" fullWidth sx={{mb:2}}></TextField>
                    </li>
                    <li>
                    <TextField label="Цена до, руб."  type="number" fullWidth sx={{mb:2}}></TextField>
                    </li>
                    <Divider sx={{mb:2, width: '80%', mx: '10%'}}>Площадь</Divider>
                    <li>
                    <TextField label="Площадь от, м²" type="number" fullWidth sx={{mb:2}}></TextField>
                    </li>
                    <li>
                    <TextField label="Площадь до, м²"  type="number" fullWidth sx={{mb:4}}></TextField>
                    </li>
                    <li>
                        <div className="search_option_button">
                            <button type="submit" style={{background: 'green', color: '#fff', fontWeight: 'bold'}} className="btn btn-block btn-thm">Найти</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}