import express, { response } from "express"
import cors from "cors"
import mongoose from "mongoose"
import autoIncrement from'mongoose-auto-increment';
import { request } from "http";

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb+srv://admin123:admin123@cluster0.gw72l5x.mongodb.net/backend?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("MongoDB connected")
})

const serSchema = new mongoose.Schema({
    sname: String,
    sid:String,
    sTeamNumber:String,
    ssubj:String,
    spname:String,
    sstartdate:String
})
autoIncrement.initialize(mongoose.connection);
serSchema.plugin(autoIncrement.plugin,'ser');
const ser = new mongoose.model("ser", serSchema)

//Routes
app.post("/adds", (req, res)=> {
    const {sname,sid,sTeamNumber,ssubj,spname,sstartdate} = req.body
    ser.findOne({sid:sid}, (err, ser) => {
        if(ser){
            res.send({message: "user already registerd"})
        } else {
            const ser = new ser({
                sname,
                sid,
                sTeamNumber,
                ssubj,
                spname,
                sstartdate
           
            })
            ser.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Created," })
                }
            })
        }
    })
    
}) 
app.get('/alls',async(req, res)=>{
    const teams=await ser.find({});
    res.status(200).json({teams})});
app.get('/:sid',async(req,res)=>{
    const teams=await ser.findById(req.params.sid);
    res.status(200).json({teams})});
app.post('/:sid',async(req,res)=>{
   let urse=req.body;
    const editser =new ser(urse);
    try{
        await ser.updateOne({ _sid: req.params.sid},editser);
        res.status(200).json(editu);
    }
    catch(error)
    {
        res.status(409).json({message: error.message});
    }
})
app.delete('/:sid',async(req,res)=>{

     try{
         await ser.deleteOne({ _sid: req.params.sid});
        res.status(200).json({message:'Deleted Sucessfully'});
     }
     catch(error)
     {
         res.status(409).json({message: error.message});
     }
 })

app.listen(1801,() => {
    console.log("Express server (Web Server) started at port 1801")
})