import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { Budget } from '../components/dashboard/budget';
import { LatestOrders } from '../components/dashboard/latest-orders';
import { LatestProducts } from '../components/dashboard/latest-products';
import { Sales } from '../components/dashboard/sales';
import { TasksProgress } from '../components/dashboard/tasks-progress';
import { TotalCustomers } from '../components/dashboard/total-customers';
import { TotalProfit } from '../components/dashboard/total-profit';
import { TrafficByDevice } from '../components/dashboard/traffic-by-device';
import { DashboardLayout } from '../components/dashboard-layout';
import { PopularObjects } from 'src/components/dashboard/popular-objects';
import { GalleryPreview } from 'src/components/gallery/gallery-preview';
import GalleryUpload from 'src/components/gallery/gallery-upload';

const Gallery = ({objects}) => (
  <>
    <Head>
      <title>
        Галерея | Доверие - панель управления
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
        <Grid
          container
          spacing={3}
        >
          {/* <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Budget />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalCustomers />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TasksProgress />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalProfit sx={{ height: '100%' }} />
          </Grid> */}
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <GalleryPreview objects={objects}/>
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <GalleryUpload />
          </Grid>
          {/* <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            
          </Grid> */}
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            {/* <LatestOrders /> */}
            {/* {console.log(objects)} */}
            {/* <PopularObjects sx={{ height: '100%' }} objects={objects}/> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Gallery.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export async function getServerSideProps() {

  const res = await fetch(`${process.env.API_HOST}/gallery`)

  const objects = await res.json()

  return {
    props: {
      objects
    }
  }

}


export default Gallery;



