
const express=require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB=require('./db/connect')
require('dotenv').config()
const notFound=require('./middleware/not-found')
const errorHandlerMiddleware=require('./middleware/error-handler')

//middleware
app.use(express.static('./public'))
app.use(express.json())

//routes

app.use('/api/V1/tasks',tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

//app.get('/api/v1/tasks')-get all the tasks
//app.post('api/v1/tasks')-to create a new tasks 
//app.get('api/v1/tasks/:id')-get single tasks 
//app.patch('api/v1/tasks/:id')-update task
//app.delete('api/v1/tasks/:id')-delete the tasks

const port = process.env.PORT || 3000

const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log(`server is listening on the port ${port}...`))

    }catch(error){
        console.log(error)
    }
}

start()
