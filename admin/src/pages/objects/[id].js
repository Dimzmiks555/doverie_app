import Head from 'next/head';
import { useRouter } from 'next/router'
import { Box, Button, Container, Typography } from '@mui/material';
import { CustomerListResults } from '../../components/customer/customer-list-results';
import { CustomerListToolbar } from '../../components/customer/customer-list-toolbar';
import { DashboardLayout } from '../../components/dashboard-layout';
import { customers } from '../../__mocks__/customers';
import { CreateObjectMain } from 'src/components/object/create-object';
import { ObjectPreview } from 'src/components/object/object-preview';



const ObjectOne = ({data}) => {
  


  return (
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
          
              <ObjectPreview data={data}/>
          
        </Container>
      </Box>
    </>
  )


};
ObjectOne.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);


export async function getServerSideProps({params}) {
  // Fetch data from external API
  const res = await fetch(`${process.env.API_HOST}/objects/${params.id}`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default ObjectOne;
