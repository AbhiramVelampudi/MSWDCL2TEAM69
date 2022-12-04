import React, {Component, useState} from 'react';

class ViewResult1 extends Component{
    
    constructor(){
        super();
        this.state={

           show:false, 
        }
    }
    render(){
        
        const {data} =this.props.location;
        
        return <div>
            <><br></br><br></br><br></br><br></br><h1>USER SURVEY RESULTS</h1></>
            
             <button onClick={() => {this.setState({show:true})}}>ViewResult</button> 
             {
                this.state.show?
                <p>
           UserName: {data[0].Username}<br></br>
            Rating: {data[0].Rating}<br></br>
           satisfied:  {data[0].satisfied} <br></br>
          Address:  {data[0].address}<br></br>
          Email ID:  {data[0].email}<br></br>
          ContactInfo:  {data[0].phone}<br></br>
           Type of sevice: {data[0].userType}
            </p>:null
             }
             
        </div>
    }
}
export default ViewResult1;