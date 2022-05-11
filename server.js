const express = require('express');
const cors = require('cors');
const projects = require('./projects.json');
const about = require('./about.json');
const app = express();

//Middleware ------>

app.use(cors());


////////////////////
//    ROUTES
////////////////////
//home route to test the app
app.get('/', (req, res) =>{
    res.send('hello world!')
})

//route for retrieving projects
app.get('/projects', (req, res) =>{
    res.json(projects);
})

//route for retrieving about info
app.get('/about', (req, res)=>{
    res.json(about);
})

//declare variable for port numer
const PORT = process.env.PORT || 4000;

//turn on the server listner
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))