import Head from 'next/head';
import { GetServerSideProps } from 'next'
import { Box, Container } from '@mui/material';
import { CustomerListResults } from '../components/customer/customer-list-results';
import { CustomerListToolbar } from '../components/customer/customer-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { customers } from '../__mocks__/customers';

const Customers = ({objects}) => (
  <>
    <Head>
      <title>
        Объекты | Доверие
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
        <CustomerListToolbar />
        <Box sx={{ mt: 3 }}>
          <CustomerListResults objects={objects} />
        </Box>
      </Container>
    </Box>
  </>
);
Customers.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);


export async function getServerSideProps({query}) {
  // Fetch data from external API
  let url = new URL(`${process.env.NEXT_PUBLIC_API_HOST}/objects?limit=10`)

	// var params = {lat:35.696233, long:139.570431} // or:
	// var params = [['lat', '35.696233'], ['long', '139.570431']]
	// query.kind == 'Купить' ? query.kind = 'Продажа' : query.kind = 'Аренда'
	
	url.search = new URLSearchParams(query).toString();

  const res = await fetch(url)
  const objects = await res.json()

  // Pass data to the page via props
  return { props: { objects } }
}

export default Customers;
