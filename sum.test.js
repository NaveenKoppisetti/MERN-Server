//test cases for our unit testing

const sum = require('./test/sum')

//jest test cases
//test function
test('1+2=3',()=>{
    expect(sum(1,2)).toBe(3);
    //toBe()->exactly equal
    //expect()->to execute our unit
})

//run 'npm test' under server folder

test('Object in Array',()=>{
    const data = {one:1}
    data['two']=6;
    expect(data).toEqual({one:1,two:6});
})

//toBeNull ->if the received value is NULL
test('Value is Null',()=>{
    const n = null;
    expect(n).toBeNull();
})

//toBeDefined ->if a value/variable is defined or not
test('Url is Defined',()=>{
    const url = 'sgsdgjdjkhdui';
    expect(url).toBeDefined();
})

//toBeTruthy ->received value should be truth
test('Value is True',()=>{
    const bool = true;
    expect(bool).toBeTruthy();
})

//toBeFalsy ->received value should be false
test('Value is False',()=>{
    const bool = false;
    expect(bool).toBeFalsy();
})