import Link from 'next/link';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { SeverityPill } from '../severity-pill';

const orders = [
  {
    id: uuid(),
    ref: 'CDD1049',
    amount: 30.5,
    customer: {
      name: 'Ekaterina Tankova'
    },
    createdAt: 1555016400000,
    status: 'pending'
  },
  {
    id: uuid(),
    ref: 'CDD1048',
    amount: 25.1,
    customer: {
      name: 'Cao Yu'
    },
    createdAt: 1555016400000,
    status: 'delivered'
  },
  {
    id: uuid(),
    ref: 'CDD1047',
    amount: 10.99,
    customer: {
      name: 'Alexa Richardson'
    },
    createdAt: 1554930000000,
    status: 'refunded'
  },
  {
    id: uuid(),
    ref: 'CDD1046',
    amount: 96.43,
    customer: {
      name: 'Anje Keizer'
    },
    createdAt: 1554757200000,
    status: 'pending'
  },
  {
    id: uuid(),
    ref: 'CDD1045',
    amount: 32.54,
    customer: {
      name: 'Clarke Gillebert'
    },
    createdAt: 1554670800000,
    status: 'delivered'
  },
  {
    id: uuid(),
    ref: 'CDD1044',
    amount: 16.76,
    customer: {
      name: 'Adam Denisov'
    },
    createdAt: 1554670800000,
    status: 'delivered'
  }
];

export const PopularObjects = (props) => (
  <Card {...props}>
    <CardHeader title="Популярные объекты" />
    <PerfectScrollbar>
        {console.log}
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                ID
              </TableCell>
              <TableCell>
                Адрес
              </TableCell>
              <TableCell>
                Статус
              </TableCell>
              <TableCell sortDirection="desc">
                Дата создания
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props?.objects?.rows?.map((order) => (
              <Link href={`/objects/${order.id}`}>
                <TableRow
                    hover
                    key={order.id}
                    sx={{cursor: 'pointer'}}
                >
                    <TableCell>
                    {order.id}
                    </TableCell>
                    <TableCell>
                    г. {order.city} ул. {order.street} д. {order.house}  {order.room}
                    </TableCell>
                    <TableCell>
                    <SeverityPill
                        color={(order.status === '1' && 'success')
                        || (order.status === '0' && 'error')
                        || 'warning'}
                    >
                        {(order.status === '1' && 'Активно')
                        || (order.status === '0' && 'Не активно')
                        || 'Ошибка'}
                    </SeverityPill>
                    </TableCell>
                    <TableCell>
                    {new Date(order.createdAt)?.toLocaleDateString()}
                    </TableCell>
                </TableRow>
              </Link>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      {/* <Button
        color="primary"
        endIcon={<ArrowRightIcon fontSize="small" />}
        size="small"
        variant="text"
      >
        View all
      </Button> */}
    </Box>
  </Card>
);
