const fns = require('./function.js');

const caller2 = async () =>{
    console.log("execition started");
    let a = fns.FirstWaitFunction(5000);
    let b = fns.SecondWaitFunction(2000);
    await a;
    await b;
    console.log("execution ended")
}
fns.counter(10);
caller2();



