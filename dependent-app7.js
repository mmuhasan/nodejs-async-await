const fns = require('./function.js');

const callerd6 = async () =>{
    console.log("execition started");
    let pa = fns.FirstWaitFunction(7000,1)    
    let ppi = fns.ThirdWaitFunction(5000);
    
    let a = await pa;
    console.log(`a=${a}`)
    
    
    let pb = fns.SecondWaitFunction(2000,a)
    let pi = await ppi;
    console.log(`pi=${pi}`)
    
    let b = await pb;
    console.log(`b=${b}`)
    
    console.log("execution ended")
}
fns.counter(10);
callerd6();
