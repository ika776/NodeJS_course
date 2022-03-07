const express = require('express');
const logger =  require('./logger');
const startupDebugger =require('debug')('app:startup');
const dbDebugger =require('debug')('app:db');
const morgan = require('morgan')
const config = require('config')
const pug =require('pug')
const app = express()
const port = 3000


app.set('view engine','pug');
app.set('views','./views');

app.use(express.json())
app.use(express.urlencoded());
app.use(express.static('public'));


//DB Work
dbDebugger('Connected to the db...');

startupDebugger('Application Name: '+ config.get('name'));
console.log('Mail Server : '+ config.get('mail.host'));

if(app.get('env') === 'development'){
    app.use(morgan('tiny'));
    console.log('Morgan Enabled...');
}

app.use(logger);

app.get('/', (req, res) => {
  res.render('index',{title:'My express', message:'Hello'})
})

//Handling HTTP GET Request
const courses =[
    {id:1, name:'course1'},
    {id:2, name:'course2'},
    {id:3, name:'course3'}
];

//Handling HTTP GET Request

//get all data
app.get('/api/courses', (req,res)=> {
    res.send(courses);
})

//get data by filter id
app.get('/api/courses/:id', (req,res)=> {
    const course = courses.find( c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course is not available');
    else res.send(course);
})

//Handling HTTP POST Request
app.post('/api/courses',(req,res)=>{
    const course={
        id:courses.length+1,
        name: req.body.name
    }
    courses.push(course)
    res.send(course)
})

//Handling PUT Request
app.put('/api/courses/:id',(req,res)=>{
    const course = courses.find( c => c.id === parseInt(req.params.id));
    course.name = req.body.name
    res.send(course)
})

//Handling DELETE Request
app.delete('/api/courses/:id',(req,res)=>{
    const course = courses.find( c => c.id === parseInt(req.params.id));
    const index = courses.indexOf(course);
    courses.splice(index,1)
    res.send(`${course.name} success deleted`)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})