
function getFullName(city){
    return this.fname+" "+this.lname+ " from "+city;
}

let person={
    fname:"sam",
    lname:"currran",
  
}

let student={
    fname:"john",
    lname:"wick"
}

let result=getFullName.bind(student,"chennai");
console.log(result())