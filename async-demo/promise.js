// // const p = new Promise((resolve,reject)=>{
// //     setTimeout(() => {
// //         reject(new Error('message'))
// //     }, 2000);
// // })
// // .then(result =>{
// //     console.log('Result', result);
// // })
// // .catch(err=>{
// //     console.log('Erorr', err.message);
// // })

// function getUser(id){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('Reading a user from DB...');
//             resolve({id:id,name:'Ika'})
//         },2000)
//     })
// }

// getUser(1)    
// .then(result =>{
//     console.log('Result', result);
// })
// .catch(err=>{
//     console.log('Erorr', err.message);
// })

const p1= new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('Async operation 1...');
        resolve(1)
    }, 2000);
})

const p2= new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('Async operation 2...');
        resolve(2)
    }, 2000);
})

Promise.all([p1,p2])
.then(result=>{
    console.log(result);
})

