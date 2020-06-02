const fns = require('./function.js');

const caller3 = async () =>{
    console.log("execition started");
    let a = fns.FirstWaitFunction(5000);
    let b = fns.SecondWaitFunction(2000);
    await b;
    await a;
    console.log("execution ended")
}

fns.counter(10);
caller3();