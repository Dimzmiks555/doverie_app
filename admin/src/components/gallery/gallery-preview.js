import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  Alert,
  AlertTitle,
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography
} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { getInitials } from '../../utils/get-initials';
// import UploadImages from './upload-images';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

export const GalleryPreview = ({ objects, ...rest }) => {

//   console.log(data)

  const router = useRouter()
  const { register, handleSubmit } = useForm();
  




  function handleDeleteImage(e, id) {
    fetch(`http://localhost:5000/gallery/${id}`, {
      method: 'DELETE',
      // body: JSON.stringify({main: true}),
      // headers: {
      //   "Content-Type": "application/json",
      //   "Accept": "application/json",
      // }
    })
    .then(d => {
      console.log(d)
      router.reload()
    });
  }
    


  return (
    
    <Box sx={{ mt: 3 }}>
      <form>
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
                Галерея
            </Typography>
        </Box>
        <Card {...rest} sx={{p: 5}}>
            
            <Typography variant='h5'>Изображения</Typography>
            <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                {
                  objects?.map(image => (
                    <Box sx={{m: 2, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                      <img width={200} height={200} style={{objectFit: 'scale-down', margin: 20, cursor: 'pointer', border: `2px solid ${image.main && 'green'}`}} src={`http://localhost:5000/${image.src}` } onClick={e => {handleMain(image.id)}}></img>
                      <Button fullWidth color='error' variant="contained" onClick={e => {handleDeleteImage(e, image?.id)}}>Удалить</Button>
                    </Box >
                  ))
                }
            </Box>
            
        </Card>
        </form>
        
    </Box>
  );
};

