const express = require('express');


const app = express();


app.get('/', (req,res)=>{
    res.send('i know how to open Node...yay!')
})

app.listen(4200,()=> console.log('Listening to port 4200'))
