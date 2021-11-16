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
        
          <CreateObjectMain/>

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
