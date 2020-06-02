const fns = require('./function.js');

const callerd8 = async () =>{
    console.log("execition started");
    let pa = fns.FirstWaitFunction(7000,1)    
    let ppi = fns.ThirdWaitFunction(5000);
    
    let [a,pi] = await Promise.all([pa, ppi]);
    console.log(`a=${a}`)
    console.log(`pi=${pi}`)
    
    let b = await fns.SecondWaitFunction(2000,a)
    console.log(`b=${b}`)   
    console.log("execution ended")
}
fns.counter(10);
callerd8();
