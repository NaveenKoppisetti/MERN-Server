// const mongoose = require('mongoose')

// describe('MongoDb Connected',()=>{
//     beforeAll(async ()=>{
//         const url = 'mongodb+srv://koppisettinaveen1432:naveen@cluster0.hvokupr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
//         await mongoose.commect(url);
//     })
// });
// //call the test case inside describe and below before al
// test('MonogDB connected to server',()=>{
//     expect(mongoose.connection.readyState).toBe(1)

// });

const mongoose = require('mongoose')

describe("MongoDb connected",()=>{
    beforeAll(async ()=>{
        const url = "mongodb+srv://konniranesh03:QFDqUVX2Hqzmy1ET@cluster0.eykf9o0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        await mongoose.connect(url);
    })

    //call test case inside describe and below before all
    test('MongoDb connected to server',()=>{
        expect(mongoose.connection.readyState).toBe(1)
    })
})