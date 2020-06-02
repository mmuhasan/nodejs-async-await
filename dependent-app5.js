const fns = require('./function.js');

const callerd5 = async () =>{
    console.log("execition started");
    let pa = fns.FirstWaitFunction(5000,1)    
    let ppi = fns.ThirdWaitFunction(7000);
    
    let a = await pa;
    console.log(`a=${a}`)
       
    let pi = await ppi;
    console.log(`pi=${pi}`)
    
    let b = await fns.SecondWaitFunction(2000,a)
    console.log(`b=${b}`)
    
    console.log("execution ended")
}
fns.counter(10);
callerd5();
