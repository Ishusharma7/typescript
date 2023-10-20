// different ways of object types

const User = {   
    name:'Ishu',
    ag:23,
    email:'abc@test.com'
}

type obj ={name:string,age:number}
const person:obj={
    name:'ishu',
    age:23
}

const peron:{name:string,age:number}={
    name:'ishu',
    age:23
}

 type thesetypes = string |number | undefined;   //this is type alias as User can be reused anywhere for this type

 let a : thesetypes =10;
 let b :thesetypes ='esfsd';
 let c : thesetypes = undefined;