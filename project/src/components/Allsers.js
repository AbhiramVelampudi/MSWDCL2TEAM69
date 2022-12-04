import { Table, TableBody, TableCell, TableHead, TableRow,styled, Button } from '@mui/material'
import { useEffect,useState } from 'react';
import { getsers } from '../backend/api';
import { deleteser } from '../backend/api';

const styledTable =styled(Table)`
width: 90%;
margin: 50px auto 0 auto ;
`
const Thead=styled(TableRow)`
background: #000000;
& > th{
  color:#fff;
  font-size:20px;
}
`
const Tbody=styled(TableRow)`
& > td{
  font-size: 20px;
}
`

const Allsers=() =>{

  const [sers,setsers]=useState([]);

  useEffect(()=>{
    getAllsers();
  },[]);
  const getAllsers=async()=>{
    let response= await getsers();
    console.log(response.data.teams);
    setsers(response.data.teams);
  
   
  }
  const deleteserDetails=async(sid)=>{
    await deleteser(sid);
    getAllsers();
  }
  return (
    <div>
     
      <br/>
      <h1 >RENEWED CARS</h1>
      <br/>
      <h2>PLEASE CHOOSE AMONG THE CARS TO YOUR LIKING </h2>
      <br/>
       <styledTable>
        <TableHead>
          <Thead>
            <TableCell>ownername</TableCell>
            <TableCell>model name</TableCell>
            <TableCell>license_no</TableCell>
            <TableCell>no_of_kms travelled</TableCell>
            <TableCell>petrol/diesel</TableCell>
            <TableCell>price</TableCell>      
          </Thead>
        </TableHead>
        <TableBody>      
          {
            sers.map(ser=>(
              <Tbody skey={ser._sid}>
                <TableCell>{ser.sname}</TableCell>
                <TableCell>{ser.sid}</TableCell>
                <TableCell>{ser.sTeamNumber}</TableCell>
                <TableCell>{ser.ssubj}</TableCell>
                <TableCell>{ser.spname}</TableCell>
                <TableCell>{ser.sstartdate}</TableCell>
                <TableCell>
                  {/* <Button variant='contained'style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button> */}
                  <Button variant='contained' color="secondary"onClick={()=>deleteserDetails(ser._sid)} >Cancel Order</Button> 
                </TableCell>
              </Tbody>
            ))
          }
          
        </TableBody>
       </styledTable>
    </div>
  )
}

export default Allsers