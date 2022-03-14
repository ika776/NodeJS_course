const mongoose= require('mongoose')
mongoose.connect('mongodb://localhost/demo')
.then(()=> console.log('connected to mongodb'))
.catch(err =>console.error('could not connect',err))

//build schema

const courseSchema= new mongoose.Schema({
    name:String,
    author:String,
    tags:[String],
    date:{type:Date,default:Date.now},
    isPublished:Boolean
})

//models

const Course= mongoose.model('Course',courseSchema);
// const course= new Course({
//     name:'Node JS Course',
//     author:'Ika',
//     tags:['node','backend'],
//     isPublished:true
// })
// async function createCourse(){
//     const course= new Course({
//         name:'Node JS Course',
//         author:'Ika',
//         tags:['node','backend'],
//         isPublished:true
//     })
//     const result=await course.save()
//     console.log(result);
// }
// createCourse()

//query document

// async function getCourse() {
//     const courses = await Course.find({
//         author: 'Ika',
//         isPublished: true
//         })
//         .limit(10)
//         .sort({ name: 1})
//         .select({ name: 1,tags:1 });
//         console.log(courses);
// }
// getCourse()

// //update document
// async function updateCourse(id) {
//     const course=await Course.findByIdAndUpdate(id,{
//         $set:{
//             author:'John',
//             isPublished:false
//         }
//     },{new :true});
//     console.log(course);
// }
// updateCourse('58a68hfkjd87ndhh89fn8fngm')

//Removing document
async function removeCourse(id) {
    const courses= await Course.findByIdAndRemove(id);
    console.log(courses);
}
removeCourse('622e7b3f97e9e6ee96c8b632')