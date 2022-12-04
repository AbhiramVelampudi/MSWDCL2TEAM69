import React, { useState } from "react"
import Button from '@mui/material/Button';
import axios from "axios"
import "./teams.css"
import { useHistory } from "react-router-dom"
import { FormGroup,FormControl, InputLabel, Input,styled} from '@mui/material';
const  AddsTeams= () => {

    const histor = useHistory()

    const [ ser, setser] = useState({
        sname:"",
        sid:"",
        sTeamNumber:"",
        ssubj:"",
        spname:"",
        sstartdate:""
    })

    const handleChange = e => {
        const { sname, svalue } = e.target
        setser({ ...ser,[sname]: svalue})
    }

    const registers = () => {
        const {sid} = ser
        if(sid){
            axios.post("http://localhost:1801/adds", ser)
            .then( res => {
                alert(res.data.message)
                histor.push("/alls")
            })
        } else {
            alert("invlid input")
        }
        
    }
    return (
        <div className="registers">
            
            {console.log("ser", ser)}
            <br/>
            <br/>
            <h1>RENEWD CAR DETAILS</h1>
            
        <div className="Control">
        
          <FormControl>
                <InputLabel>ownername</InputLabel>
                <Input  sname="sname" svalue={ser.sname} onChange={ handleChange }/>
            </FormControl>
           <br/>
           <br/>
            <FormControl>
                <InputLabel>model name</InputLabel>
                <Input  sname="sid" svalue={ser.sid} onChange={ handleChange }/>
            </FormControl>
            <br/>
            <br/>
            <FormControl>
                <InputLabel>license_no</InputLabel>
            <Input  sname="sTeamNumber" svalue={ser.sTeamNumber} onChange={ handleChange }/>
            </FormControl>
            <br/>
            <br/>
            <FormControl>
                <InputLabel>no_of_kms travelled</InputLabel>
                <Input  sname="ssubj" svalue={ser.ssubj} onChange={ handleChange }/>
            </FormControl>
            <br/>
            <br/>
            <FormControl>
                <InputLabel>petrol/diesel</InputLabel>
                <Input  sname="spname" svalue={ser.spname }onChange={ handleChange }/>
            </FormControl>
            <br/>
            <br/>
            <FormControl>
                <InputLabel>price</InputLabel>
                <Input  sname="sstartdate" svalue={ser.sstartdate}onChange={ handleChange }/>
            </FormControl>
            <br/>
            <br/>
            
                <Button className="Button" onClick={registers}>RENEW</Button>
          
            <br/>

            </div>
        </div>
    )
}

export default AddsTeams