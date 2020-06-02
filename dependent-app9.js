const fns = require('./function.js');

const callerd9 = async () =>{
    console.log("execition started");
    let pa = fns.FirstWaitFunction(5000,1)    
    let ppi = fns.ThirdWaitFunction(8000);
    
    let [a,pi] = await Promise.all([pa, ppi]);
    console.log(`a=${a}`)
    console.log(`pi=${pi}`)
    
    let b = await fns.SecondWaitFunction(2000,a)
    console.log(`b=${b}`)   
    console.log("execution ended")
}
fns.counter(10);
callerd9();
