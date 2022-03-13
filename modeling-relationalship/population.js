const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const Author = mongoose.model('Author', new mongoose.Schema({
  name: String,
  bio: String,
  website: String
}));

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  authorId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Author'
  }
}));

async function createAuthor(name, bio, website) { 
  const author = new Author({
    name, 
    bio, 
    website 
  });

  const result = await author.save();
  console.log(result);
}

async function createCourse(name, authorId) {
  const course = new Course({
    name, 
    authorId
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function listCourses() { 
  const courses = await Course
    .find()
    .populate('authorId')
    .select('name');
  console.log(courses);
}

createAuthor('Ika', 'My bio', 'My Website');

// createCourse('Node Course', '622ca66b6ccc1e4de7cb3a92')

// listCourses();