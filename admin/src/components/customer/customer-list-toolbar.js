
import Link from 'next/link'

import { useRouter } from 'next/router';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon, Typography
} from '@mui/material';
import { Search as SearchIcon } from '../../icons/search';
import { Upload as UploadIcon } from '../../icons/upload';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Download as DownloadIcon } from '../../icons/download';

export const CustomerListToolbar = (props) => {
  
  const router = useRouter()

  function handleID(prop, value) {
    router.query?.[prop] = value

    router.push({
        pathname: '/objects',
        query: router.query
    })
  }


  return (
    <Box {...props}>
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        m: -1
      }}
    >
      <Typography
        sx={{ m: 1 }}
        variant="h4"
      >
        Объекты
      </Typography>
      <Box sx={{ m: 1 }}>
        {/* <Button
          startIcon={(<UploadIcon fontSize="small" />)}
          sx={{ mr: 1 }}
        >
          Import
        </Button>
        <Button
          startIcon={(<DownloadIcon fontSize="small" />)}
          sx={{ mr: 1 }}
        >
          Export
        </Button> */}
        <Link href='objects/create'>
          <Button
            color="primary"
            variant="contained"
          >
            Добавить объект
          </Button>
        </Link>
      </Box>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon
                      color="action"
                      fontSize="small"
                    >
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              onChange={e => {handleID('id', e.target.value)}}
              placeholder="Найти объект по ID"
              variant="outlined"
            />
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon
                      color="action"
                      fontSize="small"
                    >
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              
              onChange={e => {handleID('street', e.target.value)}}
              placeholder="Улица"
              variant="outlined"
            />
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon
                      color="action"
                      fontSize="small"
                    >
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              placeholder="Дом"
              variant="outlined"
              
              onChange={e => {handleID('house', e.target.value)}}
            />
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon
                      color="action"
                      fontSize="small"
                    >
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              
              onChange={e => {handleID('flat', e.target.value)}}
              placeholder="Квартира"
              variant="outlined"
            />
            <FormControl sx={{width: 200, mb: 2}}>
              <InputLabel id="demo-simple-select-label">Тип</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Тип"
                onChange={e => {handleID('type', e.target.value)}}
              >
                <MenuItem >нет</MenuItem>
                <MenuItem value={'Квартира'}>Квартира</MenuItem>
                <MenuItem value={'Дом'}>Дом</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{width: 200}}>
              <InputLabel id="demo-simple-select-label">Вид</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Вид"
                
              onChange={e => {handleID('kind', e.target.value)}}
              >
                <MenuItem >нет</MenuItem>
                <MenuItem value={'Продажа'}>Продажа</MenuItem>
                <MenuItem value={'Аренда'}>Аренда</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </CardContent>
      </Card>
    </Box>
  </Box>
  )


};
