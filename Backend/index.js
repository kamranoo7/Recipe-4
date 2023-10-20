let express=require("express")
const { connection } = require("./db")
const { userRouter } = require("./Routes/user.routes")
let app=express()
let cors=require("cors")
const { savedRouter } = require("./routes/preference.route")
const { auth } = require("./Middleware/auth.middleware")
require("dotenv").config()
app.use(cors())
app.use(express.json())


// API Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Recipe API' });
});

app.use("/users",userRouter)
app.use(auth)
app.use("/get",savedRouter)
app.listen(process.env.port,async()=>{
    try{
await connection
console.log("Connected to DB")
    }catch(err){
        console.log(err)
        console.log("Not Connected To DB")
    }
    console.log("Server is running")
})