const users =["sam","kumar","lalit"];

function sentGreet(person){
    return new Promise(res=>{
        setTimeout(()=>{
            res(`good morning ${person}`)
        },1000);
    })
}

async function greet(){
    for(user of users){
        const result = await sentGreet(user);
        console.log(result);
    }
    
} 

greet();