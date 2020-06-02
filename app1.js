const fns = require('./function.js');

const caller1 = async () =>{
    console.log("execition started");
    await fns.FirstWaitFunction(5000);
    await fns.SecondWaitFunction(2000);
    console.log("execution ended")
}
console.log('New session..')
fns.counter(10);
caller1();

