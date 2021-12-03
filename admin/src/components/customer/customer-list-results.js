import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import Link from 'next/link'
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
  Typography
} from '@mui/material';
import { getInitials } from '../../utils/get-initials';
import { SeverityPill } from '../severity-pill';

export const CustomerListResults = ({ objects, ...rest }) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = customers.map((customer) => customer.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, id);
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
    router.query?.page = newPage

    router.push({
        pathname: '/objects',
        query: router.query
    })
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCustomerIds.length === objects.length}
                    color="primary"
                    indeterminate={
                      selectedCustomerIds.length > 0
                      && selectedCustomerIds.length < objects.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  ID
                </TableCell>
                <TableCell>
                  Изображение
                </TableCell>
                <TableCell>
                  Адрес
                </TableCell>
                <TableCell>
                  Тип
                </TableCell>
                <TableCell>
                  Вид
                </TableCell>
                <TableCell>
                  Цена
                </TableCell>
                <TableCell>
                  Дата создания
                </TableCell>
                <TableCell>
                  Статус
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {objects?.rows?.map((object) => (
                <TableRow
                  hover
                  key={object.id}
                  selected={selectedCustomerIds.indexOf(object.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCustomerIds.indexOf(object.id) !== -1}
                      onChange={(event) => handleSelectOne(event, object.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    {object.id}
                  </TableCell>
                  <TableCell sx={{display: 'flex', justifyContent: 'center'}}>
                    <img style={{height: 100, objectFit: 'scale-down', borderRadius: 8}} src={`${process.env.NEXT_PUBLIC_API_HOST}/${object?.images?.find(item => {return item.main}) ? object?.images?.find(item => {return item.main})?.src : object?.images?.[0]?.src}`}></img>
                  </TableCell>
                  <TableCell>
                    <Link href={`/objects/${object?.id}`}>
                      {`${object.city}, ${object.street}, ${object.house}, ${object.flat}`}
                    </Link>
                  </TableCell>
                  <TableCell>
                    {object.type}
                  </TableCell>
                  <TableCell>
                    {object.kind}
                  </TableCell>
                  <TableCell>
                    {object.price}
                  </TableCell>
                  <TableCell>
                    {new Date(object.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <SeverityPill color={object.status == '1' ? 'success' : 'error'}>
                      {object.status == '1' ? 'Активно' : 'Не активно'}
                    </SeverityPill>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={objects.count}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[10]}
      />
    </Card>
  );
};

// CustomerListResults.propTypes = {
//   customers: PropTypes.array.isRequired
// };
