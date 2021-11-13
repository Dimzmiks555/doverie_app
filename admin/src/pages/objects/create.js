import Head from 'next/head';
import { Box, Button, Container, Typography } from '@mui/material';
import { CustomerListResults } from '../../components/customer/customer-list-results';
import { CustomerListToolbar } from '../../components/customer/customer-list-toolbar';
import { DashboardLayout } from '../../components/dashboard-layout';
import { customers } from '../../__mocks__/customers';
import { CreateObjectMain } from 'src/components/object/create-object';

const CreateObject = () => (
  <>
    <Head>
      <title>
        Создание объекта | Доверие
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
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
                >
                Сохранить
                </Button>
            </Box>
        </Box>
        <Box sx={{ mt: 3 }}>
            <CreateObjectMain/>
        </Box>
      </Container>
    </Box>
  </>
);
CreateObject.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default CreateObject;
