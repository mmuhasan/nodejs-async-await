const fns = require('./function.js');

const callerd12 = async () =>{
    console.log("execition started");
    let pa = fns.FirstWaitFunction(5000,1)    
    let ppi = fns.ThirdWaitFunction(8000);
    let pgravity = fns.FourthWaitFunction(6000);
    
    let a = await pa;
    console.log(`a=${a}`)
    let pb = fns.SecondWaitFunction(3000,a)

    // Promise.all([ppi,pgravity,pb]);
    // let [pi,gravity,b] = await Promise.all([ppi,pgravity,pb]);
    // console.log(`pi=${pi}`)
    // console.log(`gravity=${gravity}`)
    // console.log(`b=${b}`)
}
fns.counter(10);
callerd12().then(()=>{
    console.log('Application finish');
});

