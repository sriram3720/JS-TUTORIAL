
function getServer(){
    console.log('data is received..')
}


function hocDebounce(func,timeout){
    let timer;
    return function(){
        
         if(timer){
             clearTimeout(timer);
            }
            timer= setTimeout(()=>func(),t
            timeout);
               console.log(timer)
            
}
}

let res = hocDebounce(getServer,1000);

res()