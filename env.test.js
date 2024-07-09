let dataSets=[];
//execute my env before all
beforeAll(()=>{
    dataSets = ['raju','Naveen'];
})

beforeEach(()=>{
    console.log('Before Each setup is called');
})

afterEach(()=>{
    console.log('After Each Setup is Called');
})

afterAll(()=>{
    dataSets=[];
})

test('Test Case',()=>{
    expect(dataSets.length).toBe(2);
})

test('Data set Contains',()=>{
    expect(dataSets).toContain('Naveen')
})