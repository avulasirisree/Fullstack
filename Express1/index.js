const express=require('express')
const MongoClient=require('mongoose')
const bodyParser=require('body-parser')
const dotEnv=require('dotenv')
const employeeRoute=require('../route/employeeRoutes')
const app=express();

dotEnv.config();
app.use(bodyParser.json());

const PORT=process.env.PORT||7788;

MongoClient.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB atlas connected successfully")
})
.catch((err)=>{
    console.log(err);
})

app.use("/employees",employeeRoute);

app.listen(PORT,()=>{
 console.log(`My Project working on ${PORT} number`);
})