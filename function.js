const sleep = (ms) => new Promise( resolve => setTimeout(resolve,ms));

const hello = () =>{console.log("hello")}

const FirstWaitFunction = async (tm,val=0) =>{
    console.log("function 1 started: Time required: "+ (tm/1000)+" sec")
    await sleep(tm);
    console.log("function 1 finish")
    return 5-val;
}

const SecondWaitFunction = async (tm,val) =>{
    console.log("function 2 started: Time required: "+ (tm/1000)+" sec")
    await sleep(tm);
    
    if (val==0)
        throw new Error("val cannot be zero");
    
    console.log("function 2 finish");
    return 100/val;
}

const ThirdWaitFunction = async (tm) =>{
    console.log("function 3 started: Time required: "+ (tm/1000)+" sec")
    await sleep(tm);
    console.log("function 3 finish");
    return 3.14;
}

const FourthWaitFunction = async (tm) =>{
    console.log("function 4 started: Time required: "+ (tm/1000)+" sec")
    await sleep(tm);
    console.log("function 4 finish");
    return 9.8;
}


const counter = async val=>{

    let i= 0;
    while(i++ <val){
        console.log(`${i}.`);
        await sleep(1000);
    }

};


module.exports = {
    FirstWaitFunction,
    SecondWaitFunction,
    hello,
    counter,
    ThirdWaitFunction,
    FourthWaitFunction
}