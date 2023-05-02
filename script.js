const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');

const url = "mongodb+srv://chnithin:eiwr1PmPYmJtwfdy@cluster0project.nuoocsc.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url, {useNewUrlParser: true});
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

let Path1 = path.join(__dirname,'public/');
let Path2 = path.join(__dirname,'public/HTML');
let Path3 = path.join(__dirname,'public/CSS/');
let Path4 = path.join(__dirname,'public/Images/');
let Path5 = path.join(__dirname,'public/JS/');
let Path6 = path.join(__dirname,'routes/');
let Path7 = path.join(__dirname,'model/');
// app.use(express.static(Path));
app.use(express.static(Path1));
app.use(express.static(Path2));
app.use(express.static(Path3));
app.use(express.static(Path4));
app.use(express.static(Path5));
app.use(express.static(Path6));
app.use(express.static(Path7));

app.use(express.json());

const routes = require('./routes/routes');
app.use('/api', routes);

app.listen(3000, ()=>{
    console.log("Server started and listening at Port 3000");
});


app.get('/',(req,res)=>{
    let Path = path.join(__dirname,'public','HTML','index.html');
    res.sendFile(Path);
});

