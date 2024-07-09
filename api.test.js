const fetchData = require('./test/api');
// fetchData = jest.fn();
// fetchData.mockReturnValue={
//     getAllUsers:[{
//         id:"value",
//         name:"value",
//         email:"value",
//         password:"value"
//     }]
// }
test('GET /users api data',async()=>{
    const data = await fetchData();
     //function calling from api.js
    console.log(data);
    expect(data).toHaveProperty('getAllUsers');
    data.getAllUsers.forEach(user=>{
        expect(user).toHaveProperty('id');
        expect(user).toHaveProperty('name');
        expect(user).toHaveProperty('email');
    })
})


// const fetchData = require('./test/api');
// fetchData = jest.fn();
// fetchData.mockReturnValue={
//     getAllUsers:[{
//         id:"value",
//         name:"value",
//         email:"value",
//         password:"value"
//     }]
// }
// test('GET /users api data',async()=>{
//     const data = await fetchData();
//      //function calling from api.js
//     console.log(data);
//     expect(data).toHaveProperty('getAllUsers');
//     data.getAllUsers.forEach(user=>{
//         expect(user).toHaveProperty('id');
//         expect(user).toHaveProperty('name');
//         expect(user).toHaveProperty('email');
//     })
// })