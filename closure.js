
let result=(function outer(){
    let count =0;

    function inner(){
        return count+=1;
    }

    return inner;
})();

console.log(result());