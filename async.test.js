//async.test.js
const {fetchData,MyData} = require('./test/async');


//done()->to checks the test cse is done or not
//done function can be only used in async functions only
test('call back Data',done=>{
    function callBack(data){
        try {
            expect(data).toBe('admin');
            done();
        } catch (error) {
            done(error)
        }
    }
    fetchData(callBack);
})

test('Call back MyData',done=>{
    function callback(data){
        try{
            expect(data.id).toBe(10001)
            done();
        }
        catch(error){
            done(error);
        }
    }
    MyData(callback);
})

//mock function
test('Mocking call Back function',done=>{
    const MockFunction = jest.fn(data=>{
        expect(data).toBe('admin');
        done();
    })
    fetchData(MockFunction);
})