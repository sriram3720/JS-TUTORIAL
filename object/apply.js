let person={
    fname:"sam",
    lname:"currran",
    getFullName:function(city){
        return this.fname+" "+this.lname+ " from "+city;
    }
}

let student={
    fname:"john",
    lname:"wick"
}
let result=person.getFullName.apply(student,["madurai"]);

console.log(result);