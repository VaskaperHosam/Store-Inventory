import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StoreTable = ({ store }) => {
  //console.log(store)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1000 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell align="center">Item</TableCell>
            <TableCell align="center">Brand&nbsp;(g)</TableCell>
            <TableCell align="center">Quantity&nbsp;(g)</TableCell>
            <TableCell align="center">Operations&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {store.map((stores,index) => (
            <TableRow
              key={stores._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index+1}
              </TableCell>
              <TableCell align="center">{stores.item}</TableCell>
              <TableCell align="center">{stores.brand}</TableCell>
              <TableCell align="center">{stores.quantity}</TableCell>
              <TableCell align="center">
              <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                <Link to={`/store/details/${stores._id}`}>
                  <BsInfoCircle className='text-2xl text-green-800'/>
                </Link>
                <Link to={`/store/edit/${stores._id}`}>
                  <AiOutlineEdit className='text-2xl text-yellow-600' />
                </Link>
                <Link to={`/store/delete/${stores._id}`}>
                  <MdOutlineDelete className='text-2xl text-red-600' />
                </Link>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StoreTable;
