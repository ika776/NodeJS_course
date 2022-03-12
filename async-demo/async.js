// console.log('before');
// setTimeout(() => {
//     console.log('reading user in db...');
// }, 2000);

// console.log('after');

// console.log('before');
// const user= getUser(1);
// console.log(user);

// console.log('after');

// function getUser(id) {
//     setTimeout(() => {
//         console.log('reading user in db...');
//         return {id : id, name : "Ika"}
//     }, 2000);
//     return 1;
// }


// // console.log(getUser(1));\

// console.log('Before');
// getUser(1,function(user){
//     console.log('user',user);
// })
// console.log('After');

// function getUser(id,callback){
//     setTimeout(()=>{
//         console.log('Reading a user from DB...');
//         callback({id:id,name:'Ika'})
//     },2000)
// }


//CALLBSCK HELL
// console.log('Before');
// getUser(1 ,user => {
//     getRepository(user.name,(repos)=>{
//        getCommits(repos, (commits)=>{})
//     })
// })
// console.log('After');

// function getUser(id,callback){
//     setTimeout(()=>{
//         console.log('Reading a user from DB...');
//         callback({id:id,name:'Ika'})
//     },2000)
// }

// function getRepository(user,callback) {
//     setTimeout(() => {
//         console.log('calling data...');
//         callback(['data1','data2','data3'])
//     }, 2000);
// }
// function getCommits(repo,callback) {
//     setTimeout(() => {
//         console.log(repo[0]);
//         callback('commits')
//     }, 2000);
// }

// getUser(1 ,getRepository)




// function getRepository(user) {
//     getRepository(user.name,getCommits)
// }
// function getCommits(repos) {
//     getCommits(repo,displayCommits)
// }
// function displayCommits(commits){
//     console.log('commits');
// }
// function getUser(id,callback){
//     setTimeout(()=>{
//         console.log('Reading a user from DB...');
//         callback({id:id,name:'Ika'})
//     },2000)
// }

//ASYNC AWAIT
// getUser(1)
// .then(user=> getRepository(user.name))
// .then(repos => getCommits(repos[0]))
// .then(commit => console.log('Commit ',commit))
// .catch(err=> console.log('error', err.message))

function getUser(id){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            console.log('Reading a user from DB...');
            resolve({id:id, name:'Ika'})
        },2000)
    })
}

function getRepository(user) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('calling data...');
            resolve(['data1','data2','data3'])
        }, 2000);
    })

}
function getCommits(repo) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('Calling API...');
            resolve(['commits'])
        }, 2000);
    })

}

async function displayCommits(params) {
    try {
        const user = await getUser(1)
        const repos= await getRepository(user.name)
        const commit= await getCommits(repos[0])
        console.log(commit);
    } catch (error) {
        console.log(error.message);
    }
}
displayCommits()