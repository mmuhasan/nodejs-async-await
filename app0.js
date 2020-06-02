const fns = require('./function.js');

const caller0 = async () =>{
    console.log("execition started");
    fns.FirstWaitFunction(5000);
    fns.SecondWaitFunction(2000);
    console.log("execution ended")
}

fns.counter(10);
caller0();