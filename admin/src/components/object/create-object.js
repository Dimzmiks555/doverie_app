import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  Avatar,
  Box,
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

export const CreateObjectMain = ({ customers, ...rest }) => {

  return (
    <Card {...rest} sx={{p: 5}}>
        <Typography variant='h5'>Адрес</Typography>
        <Box sx={{py: 5, display: 'flex', justifyContent: 'space-between'}}>
            <TextField label="Город" />
            <TextField label="Улица" />
            <TextField label="Дом" />
            <TextField label="Квартира" />
            <TextField label="Район" />
        </Box>
        <Typography variant='h5'>Характеристики</Typography>
        <Box sx={{py: 5, display: 'flex', justifyContent: 'space-between'}}>
            <TextField label="Тип" />
            <TextField label="Вид" />
            <TextField label="Площадь" />
            <TextField label="Количество комнат" />
            <TextField label="Цена" />
        </Box>
        <Typography variant='h5'>Изображения</Typography>
        <Box sx={{py: 5, display: 'flex', justifyContent: 'space-between'}}>
            <UploadImages/>
        </Box>
        <Typography variant='h5'>Описание</Typography>
        <Box sx={{py: 5, display: 'flex', justifyContent: 'space-between'}}>
            <TextField label="Описание" multiline fullWidth rows={10}/>
        </Box>
    </Card>
  );
};

