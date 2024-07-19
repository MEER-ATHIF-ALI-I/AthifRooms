const express = require('express')
const cors = require("cors");
const app = express()
const db=require('./db')
app.use(express.json())
app.use(cors({
  origin:["https://athif-rooms.vercel.app/"],
  methods:["GET","POST", "PUT", "DELETE"],
  credentials: true
}))
const path = require('path')
const roomsRoutes = require('./routes/roomsRoute')
const userRoute = require('./routes/userRoute')
const bookingsRoute=require('./routes/bookingsRoute')
app.use('/api/rooms',roomsRoutes)
app.use('/api/users' , userRoute)
app.use('/api/bookings' , bookingsRoute)

//----------deployment-----------------

__dirname = path.resolve();

if(process.env.NODE_ENV==="production") {
 app.use(express.static(path.join(__dirname,"/frontend/build")));

 app.get('*',(req,res)=>{
   res.sendFile(path.resolve(__dirname,"frontend","build","index.html"));
 });
}else{
	app.get("/", (req, res)=>{
      res.send("API is running..");
	});
}


//----------deployment-----------
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Node JS Server Started`));