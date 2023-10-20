// function type isdefined as the type of value retutned by function for an addition function it will be numeric type if it adds number string type if it adds  strings
//void functions are functions which return undefined


// unknown type
let data:unknown;
data = 20;
data ='dd';
let item:string;
item = data;

// this shows that with any the power of ts is neglected but with unkown it let us do anything to the variable but we cannot assign it to another variable which has a type assigned to it
//but if we want to assign data to item if its type is string then

if(typeof data === 'string'){
    item = data;
}

//never type are functions which return nothing because they break example api fetching error it can still be used with void but never should be preffered




