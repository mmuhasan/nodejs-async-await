const fns = require('./function.js');

const callerd3 = async () =>{
    console.log("execition started");
    let pa = fns.FirstWaitFunction(5000,1)    
    let pi = await fns.ThirdWaitFunction(2000);
    console.log(`pi=${pi}`)
    let a = await pa;
    console.log(`a=${a}`)
    let b = await fns.SecondWaitFunction(2000,a)
    console.log(`b=${b}`)
    
    console.log("execution ended")
}
fns.counter(10);
callerd3();


