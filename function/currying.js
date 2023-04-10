
const user={
    firstName:"sam",
    lastName:"curran",
    city:"delhi"
}

function getUserDetail(data){
    return function(key){
        return data[key];
    }
}

let userInfo= getUserDetail(user);

let result= userInfo("city");

console.log(result);
console.log(getUserDetail(user)("firstName"));
