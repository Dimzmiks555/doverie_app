import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import {useDropzone} from 'react-dropzone';




const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};



export default function GalleryUpload() {

  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
      
    //   callback(acceptedFiles)
    }
  });
  
  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
        />
      </div>
    </div>
  ));

  function handleSubmit() {
    if (files?.length > 0) {
        files.forEach(item => {
          console.log(item.path)
          let formData = new FormData();
            formData.append('files', item);
            
            // formData.append('id', router.query.id);
            console.log(formData)
            fetch(`${process.env.NEXT_PUBLIC_API_HOST}/gallery`, {
              method: 'POST',
              body: formData,
            })
            .then(d => {
              console.log(d)
    
            });
          })
      }
}

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
    
    // callback(files)
  }, [files]);

  return (
    <section className="container">
        <Button fullWidth color="success" variant="contained" sx={{mb: 4}} onClick={handleSubmit}>Загрузить</Button>
      <div {...getRootProps({className: 'dropzone'})} style={{border: '2px dashed #aaa', padding: 80, cursor: 'pointer'}}>
        <input {...getInputProps()} />
        <p>Перебросьте для загрузки сразу все файлы</p>
      </div>
      <aside style={thumbsContainer}>
        {thumbs}
      </aside>
    </section>
  );
}
