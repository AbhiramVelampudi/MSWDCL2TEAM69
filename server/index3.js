const express=require("express");
const mongoose=require("mongoose");
const StudentModel=require("./models/Student");
const app=express();
app.use(express.json());
mongoose.connect("mongodb+srv://admin123:admin123@cluster0.gw72l5x.mongodb.net/hakuna?retryWrites=true&w=majority",
{useNewUrlParser: true, },()=>console.log("Connected to DB"));
app.get('/gets',(req,res)=>res.json(StudData.find()))
app.post("/newstud",async(req,res)=>{
    const studName=req.body.studName;
    const studNumber=req.body.studNumber;
    const student=new StudentModel({name:studName,htno:studNumber});
    try{
    await student.save();
    res.send("Inserted Values");}

catch(err){
    console.log(err);
}});
app.get("/display",async(req,res)=>{
    StudentModel.find({},(err,result)=>{
        if(err){
            res.send(err);
        }
        res.json(result);
    });
});
    app.listen(3001,()=>console.log("Server Ready."))