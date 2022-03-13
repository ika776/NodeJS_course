const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  authors:[authorSchema]
}));

async function createCourse(name, authors) {
  const course = new Course({
    name, 
    authors
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function listCourses() { 
  const courses = await Course.find();
  console.log(courses);
}

async function update(courseId) { 
  const course = await Course.findById(courseId);
  course.author.name="Ika sari apriliyani";
  course.save()
  console.log(course);
}

async function addAuthor(courseId,author) {
   const course=await Course.findById(courseId);
   course.authors.push(author)
   course.save()
}
async function removeAuthor(courseId,authorId) {
  const course=await Course.findById(courseId);
  const author = await course.authors.id(authorId)
  author.remove()
  course.save()
}
// update('622cc20af81c5e7c38e80a3a')
// createCourse('Node Course', [new Author({ name: 'Ika' })]);
// addAuthor('622ccaa98004b2252cee4310', new Author({ name: 'Amy' }));
// removeAuthor('622ccaa98004b2252cee4310','622ccb54ec686c07c6038c18')