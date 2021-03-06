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
import UploadImages from './upload-images';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

export const ObjectPreview = ({ data, ...rest }) => {

  console.log(data)

  const router = useRouter()
  const { register, handleSubmit } = useForm();
  
  const [ files , setFiles ] = useState([]);
  const [ accessAlert , setAccessAlert ] = useState(false);
  
  const [ disabled , setDisabled ] = useState(false);


  function onSubmit(data) {
    console.log(data); 
    console.log(files)


    fetch(`${process.env.NEXT_PUBLIC_API_HOST}/objects/${router.query.id}`, {
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

      setAccessAlert(true)

      setTimeout(() => {setAccessAlert(false)}, 5000)

    })
    
    let success = []

    if (files?.length > 0) {
      setDisabled(true)
      files.forEach(item => {
        console.log(item.path)
        let formData = new FormData();
          formData.append('files', item);
          
          formData.append('id', router.query.id);
          console.log(formData)
          fetch(`${process.env.NEXT_PUBLIC_API_HOST}/images/`, {
            method: 'POST',
            body: formData,
          })
          .then(d => {
            console.log(d)
            success.push(d)

            if (success.length == files?.length) {
                setDisabled(false)
                window.location.reload()
            }
  
          });
        })
    }
  }

  const handleMain = (id) => {

      let ImageNotMain = data?.images?.find((item) => {return item.id == id && (item.main == false || item.main == null)})
      let ImageMain = data?.images?.find((item) => {return item.main == true})

      if (ImageNotMain && ImageMain) {
        fetch(`${process.env.NEXT_PUBLIC_API_HOST}/images/${ImageNotMain.id}`, {
          method: 'PATCH',
          body: JSON.stringify({main: true}),
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          }
        })
        .then(d => {
          console.log(d)
          
          router.reload()
        });
        fetch(`${process.env.NEXT_PUBLIC_API_HOST}/images/${ImageMain.id}`, {
          method: 'PATCH',
          body: JSON.stringify({main: false}),
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          }
        })
        .then(d => {
          console.log(d)
          
          router.reload()
        });
        console.log('change image')
      } else if (ImageNotMain && !ImageMain) {
        fetch(`${process.env.NEXT_PUBLIC_API_HOST}/images/${ImageNotMain.id}`, {
          method: 'PATCH',
          body: JSON.stringify({main: true}),
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          }
        })
        .then(d => {
          console.log(d)
          router.reload()
        });
        
        console.log('new image')
      }
      
      console.log( id)
  }

  function handleDeleteImage(e, id) {
    fetch(`${process.env.NEXT_PUBLIC_API_HOST}/images/${id}`, {
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
                ???????????? ??? {router.query.id}
            </Typography>
            <FormGroup>
              <FormControlLabel control={<Switch defaultChecked={data?.featured} {...register('featured', { required: false })}/>} label="???????????????????? ????????????" />
              
              <FormControlLabel control={<Switch defaultChecked={+data?.status} {...register('status', { required: false })}/>} label="?? ??????????????" />
            </FormGroup>
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
                disabled={disabled}
                >
                ??????????????????
                </Button>
            </Box>
        </Box>
        <Card {...rest} sx={{p: 5}}>
            <Typography variant='h5'>??????????</Typography>
            <Box sx={{py: 5, display: 'flex', justifyContent: 'space-between'}}>
                <TextField {...register('city', { required: false })} defaultValue={data?.city} label="??????????" />
                <TextField {...register('street', { required: false })} defaultValue={data?.street} label="??????????" />
                <TextField {...register('house', { required: false })} defaultValue={data?.house}label="??????" />
                <TextField {...register('flat', { required: false })} defaultValue={data?.flat} label="????????????????" />
                <TextField {...register('area', { required: false })} defaultValue={data?.area} label="??????????" />
            </Box>
            <Typography variant='h5'>????????????????????????????</Typography>
            <Box sx={{py: 5, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                <FormControl sx={{ minWidth: 200, mb: 2 }}>
                    <InputLabel id="demo-controlled-open-select-label">??????</InputLabel>
                    <Select
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      label="??????"
                      defaultValue={data?.type}
                      {...register('type', { required: false })}
                    >
                      <MenuItem value={'????????????????'}>????????????????</MenuItem>
                      <MenuItem value={'??????'}>??????</MenuItem>
                      <MenuItem value={"??????????????"}>??????????????</MenuItem>
                      <MenuItem value={"???????????????? ????????"}>???????????????? ????????</MenuItem>
                      <MenuItem value={"??????????????"}>??????????????</MenuItem>
                    </Select>
                </FormControl>
                {/* <TextField  defaultValue={data?.type} label="??????" /> */}
                <FormControl sx={{ minWidth: 200 }}>
                    <InputLabel id="demo-controlled-open-select-label">??????</InputLabel>
                    <Select
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      label="??????"
                      defaultValue={data?.kind}
                      {...register('kind', { required: false })}
                    >
                      <MenuItem value={'????????????'}>????????????</MenuItem>
                      <MenuItem value={'??????????????'}>??????????????</MenuItem>
                    </Select>
                </FormControl>
                {/* <TextField  defaultValue={} label="" /> */}
                <TextField {...register('square', { required: false })} defaultValue={data?.square} label="??????????????" />
                <TextField {...register('rooms', { required: false })} defaultValue={data?.rooms} label="???????????????????? ????????????" />
                <TextField {...register('price', { required: false })} defaultValue={data?.price} label="????????" />
                <TextField {...register('place_square', { required: false })} defaultValue={data?.place_square} label="?????????????? ??????????????" />
                <TextField {...register('level', { required: false })}  defaultValue={data?.level} label="??????????????????" />
            </Box>
            <Typography variant='h5'>??????????????????????</Typography>
            <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                {
                  data?.images?.map(image => (
                    <Box sx={{m: 2, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                      <img width={200} height={200} style={{objectFit: 'scale-down', margin: 20, cursor: 'pointer', border: `2px solid ${image.main && 'green'}`}} src={`${process.env.NEXT_PUBLIC_API_HOST}/${image.src}` } onClick={e => {handleMain(image.id)}}></img>
                      <Button fullWidth color='error' variant="contained" onClick={e => {handleDeleteImage(e, image?.id)}}>??????????????</Button>
                    </Box >
                  ))
                }
            </Box>
            <Box sx={{py: 5, display: 'flex', justifyContent: 'space-between'}}>
                <UploadImages callback={files => {setFiles(files)}}/>
            </Box>
            <Typography variant='h5'>????????????????</Typography>
            <Box sx={{py: 5, display: 'flex', justifyContent: 'space-between'}}>
                <TextField {...register('description', { required: false })} label="????????????????" defaultValue={data?.description} multiline fullWidth rows={10}/>
            </Box>
        </Card>
        </form>
        
        {
          accessAlert && (
            <Alert sx={{position: 'fixed', top: 70, left: '45%', width: '30%'}} severity="success">
              <AlertTitle>??????????</AlertTitle>
              ?????????????????? ?????????????? <strong>??????????????????!</strong>
            </Alert>
          )
        }
    </Box>
  );
};

