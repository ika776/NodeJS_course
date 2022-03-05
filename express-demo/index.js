const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
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