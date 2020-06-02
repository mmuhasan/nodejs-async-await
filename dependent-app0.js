const fns = require('./function.js');

const callerd0 = async () =>{
    console.log("execition started");
    let a = fns.FirstWaitFunction(5000,1)
    console.log(`a=${a}`)
    let b = fns.SecondWaitFunction(2000,a)
    console.log(`b=${b}`)
    console.log("execution ended")
}
fns.counter(10);
callerd0();


