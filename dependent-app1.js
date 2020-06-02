const fns = require('./function.js');

const callerd1 = async () =>{
    console.log("execition started");
    let a = await fns.FirstWaitFunction(5000,1)
    console.log(`a=${a}`)
    let b = await fns.SecondWaitFunction(2000,a)
    console.log(`b=${b}`)
    console.log("execution ended")
}
fns.counter(10);
callerd1();


