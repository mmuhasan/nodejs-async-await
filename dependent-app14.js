const fns = require('./function.js');

const callerd14 = async () =>{
    console.log("execition started");
    try{
        let pa = fns.FirstWaitFunction(5000,5)    
        let ppi = fns.ThirdWaitFunction(8000);
        let pgravity = fns.FourthWaitFunction(6000);
        
        let a = await pa;
        console.log(`a=${a}`)
        let pb = fns.SecondWaitFunction(3000,a)

        let [pi,gravity,b] = await Promise.all([ppi,pgravity,pb]);
        console.log(`pi=${pi}`)
        console.log(`gravity=${gravity}`)
        console.log(`b=${b}`)
    }
    catch(e){
        //console.log(e)
        console.log('Catch error...move on...')
    }
}
fns.counter(10);
callerd14().then(()=>{
    console.log('Application finish');
});
