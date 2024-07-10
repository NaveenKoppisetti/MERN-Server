const mongoose = require('mongoose')

describe('MongoDB connection',()=>{
    beforeAll(async ()=>{
        const url = 'mongodb+srv://koppisettinaveen1432:naveen@cluster0.hvokupr.mongodb.net/';
        await mongoose.connect(url);
    });
    //call test case inside describe and below before all
    test('MongoDB connected to server',()=>{
        expect(mongoose.connection.readyState).toBe(1)
    })
});