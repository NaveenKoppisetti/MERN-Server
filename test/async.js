// //test/async.js
// //how we can perfome unit tests on async function

// function fetchData(callBack){
//     setTimeout(()=>{
//         callBack('admin')
//     },1000);
// }
// //returns admin after 4 sec
// function myData(callBack){
//     setTimeout(()=>{
//         callBack({id:10001})
//     },1000);
// }
// module.exports = {fetchData,myData};

//how we can perform unit test on async func
//function

function fetchData(callback){
    setTimeout(()=>{
        callback('admin')
    },1000);
}


function MyData(callback){
    setTimeout(()=>{
        callback({id:10001});
    },1000)
}
//calls admin after 1sec

module.exports = {fetchData,MyData};
