import React, { useState } from "react"
import Button from '@mui/material/Button';
import axios from "axios"
import "./teams.css"
import { useHistory } from "react-router-dom"
import { FormGroup,FormControl, InputLabel, Input,styled} from '@mui/material';
const  AddTeams= () => {

    const history = useHistory()

    const [ user, setUser] = useState({
        name:"",
        id:"",
        TeamNumber:"",
        subj:"",
        pname:"",
        startdate:"",
        status1:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({ ...user,[name]: value})
    }

    const register = () => {
        const { id} = user
        if(id){
            axios.post("http://localhost:1800/add", user)
            .then( res => {
                alert(res.data.message)
                history.push("/all")
            })
        } else {
            alert("invlid input")
        }
        
    }
    return (
        <div className="register">
            
            {console.log("User", user)}
            <br/>
            <br/>
            <h1>SERVICE DETAILS</h1>
            {/* <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <div className="button" onClick={register} >Register</div> */}
        <div className="Control">
        
          <FormControl>
                <InputLabel>service required</InputLabel>
                <Input  name="name" value={user.name} onChange={ handleChange }/>
            </FormControl>
           <br/>
           <br/>
            <FormControl>
                <InputLabel>ownername</InputLabel>
                <Input  name="id" value={user.id} onChange={ handleChange }/>
            </FormControl>
            <br/>
            <br/>
            <FormControl>
                <InputLabel>vehichleType</InputLabel>
            <Input  name="TeamNumber" value={user.TeamNumber} onChange={ handleChange }/>
            </FormControl>
            <br/>
            <br/>
            <FormControl>
                <InputLabel>Petrol/diesel</InputLabel>
                <Input  name="subj" value={user.subj} onChange={ handleChange }/>
            </FormControl>
            <br/>
            <br/>
            <FormControl>
                <InputLabel>location</InputLabel>
                <Input  name="pname" value={user.pname }onChange={ handleChange }/>
            </FormControl>
            <br/>
            <br/>
            <FormControl>
                <InputLabel>Registration_no</InputLabel>
                <Input  name="startdate" value={user.startdate}onChange={ handleChange }/>
            </FormControl>
            <br/>
            <br/>
            <br/>
            
                <button className="Button" onClick={register}>CONFIRM SERVICE</button>
          
            <br/>

            </div>
        </div>
    )
}

export default AddTeams