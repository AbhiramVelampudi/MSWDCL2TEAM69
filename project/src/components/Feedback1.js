import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Button , FormControl, InputLabel, Select, MenuItem, Input} from "@mui/material";
var data=[
    {
        Username:"",
        Rating:"",
        satisfied:"",
        address:"", 
        email:"",
        phone:"", 
        userType:""
    }
]

class Feedback1 extends Component{
    storeName=event=>{
        data[0].Username=event.target.value;
    }
    storeAge=event=>{
        data[0].Rating=event.target.value;
    }
    storeGender=event=>{
        data[0].satisfied=event.target.value;
    }
    storeAddress=event=>{
        data[0].address=event.target.value;
    }
    storeEmail=event=>{
        data[0].email=event.target.value;
    }
    storePhone=event=>{
        data[0].phone=event.target.value;
    }
    storeUserType=event=>{
        data[0].userType=event.target.value;
    }

    
    render(){
        return <div>
            <><br></br><br></br><br></br><h1>ENTER FEEDBACK</h1></><br></br><br></br>
            
            <label>UserName:</label>{"\u00a0\u00a0"}
            <Input variant='filled' type="text" placeholder="UserName" onChange={this.storeName}/><br></br>
            <label>Rating:</label>{"\u00a0\u00a0"}
            <Input type="text" placeholder="Rating" onChange={this.storeAge}/><br></br>
            <br/>
            <br/>
            <label>satisfied:</label>{"\u00a0\u00a0"}
            <input type="checkbox" id="yes" name="yes" value="yes" lable="yes" onChange={this.storeGender}/>yes
            <input type="checkbox" id="No" name="No" value="No" onChange={this.storeGender}/>No<br></br>
            <br/>
            <label>address:</label>{"\u00a0\u00a0"}
            <Input type="text" placeholder="address" onChange={this.storeAddress}/><br></br>
            <br/>
            <label>email:</label>{"\u00a0\u00a0"}
            <Input type="text" placeholder="Email ID" onChange={this.storeEmail}/><br></br>
            <br/>
            <label>contactInfo:</label>{"\u00a0\u00a0"}
            <Input type="text" placeholder="ContactInfo" onChange={this.storePhone}/><br></br><br></br>
            <br/>
            <FormControl  >
  <InputLabel >Type of Service Taken</InputLabel>
  <Select
     labelId="demo-simple-select-label"
     id="demo-simple-select"
    style={{width:200, height:40}}
    label="UserType"
    onChange={this.storeUserType}
  >
    <MenuItem value="Interium">Interium</MenuItem>
    <MenuItem value="Full">Full</MenuItem>
    <MenuItem value="Major">Major</MenuItem>
  </Select>
</FormControl>
            
            <br></br><br></br>
         <center>
        <b/>to ViewResult{"\u00a0\u00a0"}
            <Link to={{
                pathname:"ViewResult1",
                data:data
            }}><Button variant="contained" color="success" className="button" onClick={() => alert("Thankyou for submitting feedback!")}>Submit</Button></Link>
            </center>
        </div>
    }
}

export default Feedback1;