import axios from "axios"
const URL='http://localhost:1800';
const URL1='http://localhost:1801';
export const getUsers=async()=>{
    try{
        return await axios.get(`${URL}/all`);
    }
    catch(error){
        console.log("error in axios",error);
    }
}
export const getUser=async(id)=>{
    try{
        return await axios.get(`${URL}/${id}`);
    }
    catch(error){
        console.log("error in axios api",error);
    }
}
export const editUser1=async(user,id)=>{
    try{
        return await axios.post(`${URL}/${id}`,user);
    }
    catch(error){
        console.log("error in axios api",error);
    }
}
export const deleteUser =async(id)=>
{
    try{
        return await axios.delete(`http://localhost:1800/${id}`);
    }
    catch(error)
    {
        console.log("error in axios api",error);
    }
}

export const getsers=async()=>{
    try{
        return await axios.get(`${URL1}/alls`);
    }
    catch(error){
        console.log("error in axios",error);
    }
}
export const getser=async(sid)=>{
    try{
        return await axios.get(`${URL1}/${sid}`);
    }
    catch(error){
        console.log("error in axios api",error);
    }
}
export const editser1=async(ser,sid)=>{
    try{
        return await axios.post(`${URL1}/${sid}`,ser);
    }
    catch(error){
        console.log("error in axios api",error);
    }
}
export const deleteser =async(sid)=>
{
    try{
        return await axios.delete(`http://localhost:1801/${sid}`);
    }
    catch(error)
    {
        console.log("error in axios api",error);
    }
}