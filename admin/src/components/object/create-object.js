import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography
} from '@mui/material';
import { getInitials } from '../../utils/get-initials';
import UploadImages from './upload-images';
import { useForm } from 'react-hook-form'

export const CreateObjectMain = ({ customers, ...rest }) => {

  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data); 
    fetch(`http://localhost:5000/objects`, {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
    // { username: 'test', email: 'test', password: 'test' }
  }

  return (
    <Box sx={{ mt: 3 }}>
      
      <form onSubmit={handleSubmit(onSubmit)}>
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
              Создание объекта
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
              <Button
              color="primary"
              variant="contained"
              type="submit"
              >
              Сохранить
              </Button>
          </Box>
      </Box>
      <Card {...rest} sx={{p: 5, mt: 5}} >
            <Typography variant='h5'>Адрес</Typography>
            <Box sx={{py: 5, display: 'flex', justifyContent: 'space-between'}}>
                <TextField {...register('city', { required: true })} label="Город" />
                <TextField {...register('street', { required: true })} label="Улица" />
                <TextField {...register('house', { required: true })} label="Дом" />
                <TextField {...register('flat', { required: true })} label="Квартира" />
                <TextField {...register('area', { required: true })} label="Район" />
            </Box>
            <Typography variant='h5'>Характеристики</Typography>
            <Box sx={{py: 5, display: 'flex', justifyContent: 'space-between'}}>
                <TextField {...register('type', { required: true })} label="Тип" />
                <TextField {...register('kind', { required: true })} label="Вид" />
                <TextField {...register('square', { required: true })} label="Площадь" />
                <TextField {...register('rooms', { required: true })} label="Количество комнат" />
                <TextField {...register('price', { required: true })} label="Цена" />
            </Box>
            <Typography variant='h5'>Изображения</Typography>
            <Box sx={{py: 5, display: 'flex', justifyContent: 'space-between'}}>
                <UploadImages/>
            </Box>
            <Typography variant='h5'>Описание</Typography>
            <Box sx={{py: 5, display: 'flex', justifyContent: 'space-between'}}>
                <TextField {...register('description', { required: false })} label="Описание" multiline fullWidth rows={10}/>
            </Box>
      </Card>
      
      </form>
    </Box>
  );
};

