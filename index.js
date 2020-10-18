const express = require('express');
const cors = require('cors');


const app = express();

app.use(cors())

const users = ["Asad", "Moin", "Sabed", "Susmita", "Sohana"];


app.get('/', (req,res)=>{
    const fruit ={
        product: 'ada',
        price:220
    }
    res.send(fruit)
});
app.get('/fruits/banana', (req,res)=>{
    res.send({fruit: 'banana', quantity: 1000, price:200})
})
app.get('/users/:id', (req,res) =>{
    const id= req.params.id;
    console.log(req.query.sort);
    const name = users[id];
    res.send({id, name});
})

// post
add.post('./addUser', (req, res)=> {
    console.log('Post req send');
})

app.listen(4200,()=> console.log('Listening to port 4200'))
