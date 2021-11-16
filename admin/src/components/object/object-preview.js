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
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

export const ObjectPreview = ({ data, ...rest }) => {

  console.log(data)

  const router = useRouter()
  const { register, handleSubmit } = useForm();
  
  const [ files , setFiles ] = useState();

  function onSubmit(data) {
    console.log(data); 
    console.log(files)


    fetch(`http://localhost:5000/objects/${router.query.id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)

      files.forEach(item => {
        console.log(item.path)
        let formData = new FormData();
          formData.append('files', item);
          
          formData.append('id', router.query.id);
          console.log(formData)
          fetch('http://localhost:5000/images/', {
            method: 'POST',
            body: formData,
          })
          .then(d => {
            console.log(d)
          });
        })

    })
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
            m: -1, 
            mb: 5
        }}
        >
            <Typography
                sx={{ m: 1 }}
                variant="h4"
            >
                Объект № {router.query.id}
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
        <Card {...rest} sx={{p: 5}}>
            <Typography variant='h5'>Адрес</Typography>
            <Box sx={{py: 5, display: 'flex', justifyContent: 'space-between'}}>
                <TextField {...register('city', { required: false })} defaultValue={data?.city} label="Город" />
                <TextField {...register('street', { required: false })} defaultValue={data?.street} label="Улица" />
                <TextField {...register('house', { required: false })} defaultValue={data?.house}label="Дом" />
                <TextField {...register('flat', { required: false })} defaultValue={data?.flat} label="Квартира" />
                <TextField {...register('area', { required: false })} defaultValue={data?.area} label="Район" />
            </Box>
            <Typography variant='h5'>Характеристики</Typography>
            <Box sx={{py: 5, display: 'flex', justifyContent: 'space-between'}}>
                <TextField {...register('type', { required: false })} defaultValue={data?.type} label="Тип" />
                <TextField {...register('kind', { required: false })} defaultValue={data?.kind} label="Вид" />
                <TextField {...register('square', { required: false })} defaultValue={data?.square} label="Площадь" />
                <TextField {...register('rooms', { required: false })} defaultValue={data?.rooms} label="Количество комнат" />
                <TextField {...register('price', { required: false })} defaultValue={data?.price} label="Цена" />
            </Box>
            <Typography variant='h5'>Изображения</Typography>
            <Box>
                {
                  data?.images?.map(image => (
                    <img width={200} height={200} style={{objectFit: 'scale-down', margin: 20}} src={`http://localhost:5000/${image.src}`}></img>
                  ))
                }
            </Box>
            <Box sx={{py: 5, display: 'flex', justifyContent: 'space-between'}}>
                <UploadImages callback={files => {setFiles(files)}}/>
            </Box>
            <Typography variant='h5'>Описание</Typography>
            <Box sx={{py: 5, display: 'flex', justifyContent: 'space-between'}}>
                <TextField {...register('description', { required: false })} label="Описание" defaultValue={data?.description} multiline fullWidth rows={10}/>
            </Box>
        </Card>
        </form>
    </Box>
  );
};

