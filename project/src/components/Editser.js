import React from 'react'
import { FormGroup,FormControl, InputLabel, Input,styled} from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { editser1, getser } from '../backend/api';
import { NavLink } from 'react-router-dom';
import { useHistory } from "react-router-dom"
const defaultvalue={
sname:"",
sid:"",
sTeamNumber:"",
ssubj:"",
spname:"",
sstartdate:"",
sstatus1:""
}
const Container =styled(FormGroup)`
width:50%;
margin:5% auto ;
`
function Editser() {
    const [ser,setser]=useState(defaultvalue);
    const {sid}=useParams();
    const histor = useHistory()
    useEffect(()=>{
        loadUserDetails();
    },[])
    
    const loadUserDetails=async()=>{
        const response=await getser(sid);
        setser(response.data.teams);
    }
    const onsValueChange=(e)=>{
        setser({ ...ser,[e.target.sname]:e.target.svalue});
        // console.log(user);
    }
    const editserDetails=async()=>{
        await editser1(ser,sid);

            histor.push("/alls")   }
        
  return (
    <div>
        <Container>
        <h1>Edit USER</h1>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onsValueChange(e)} sname="name" svalue={ser.sname}/>
            </FormControl>
            <br/>
            <FormControl>
                <InputLabel>Id</InputLabel>
                <Input onChange={(e)=>onsValueChange(e)} sname="id" svalue={ser.sid}/>
            </FormControl>
            <br/>
            <FormControl>
                <InputLabel>Team Number</InputLabel>
                <Input onChange={(e)=>onsValueChange(e)} sname="TeamNumber" svalue={ser.sTeamNumber}/>
            </FormControl>
            <br/>
            <FormControl>
                <InputLabel>MSWD/PFSD</InputLabel>
                <Input onChange={(e)=>onsValueChange(e)} sname="subj" svalue={ser.ssubj}/>
            </FormControl>
            <br/>
            <FormControl>
                <InputLabel>Project Name</InputLabel>
                <Input onChange={(e)=>onsValueChange(e)} sname="pname" svalue={ser.spname}/>
            </FormControl>
            <br/>
            <FormControl>
                <InputLabel>StartDate</InputLabel>
                <Input onChange={(e)=>onsValueChange(e)} sname="startdate" svalue={ser.sstartdate}/>
            </FormControl>
            <br/>
            <FormControl>
                <InputLabel>Status</InputLabel>
                <Input onChange={(e)=>onsValueChange(e)} sname="status" svalue={ser.sstatus1}/>
            </FormControl>
            <br/>
            <FormControl>
                <Button varient="contained" onClick={()=>editserDetails()}>Edit User</Button>
            </FormControl>
            <br/>
        </Container>
    </div>
  )
}

export default Editser