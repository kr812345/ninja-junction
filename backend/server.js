import express from  'express';
import connectDb from  './utils/db.js';

const app = express();

app.get('/',(req,res)=> {
    res.send('Ninja server is running..');
})

connectDb();

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Ninja server is running at ${port}`)
})