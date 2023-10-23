// access modifiers are present in all object oriented programming languages

// public access modifiers can be used in and outside of a class but private access modifiers can only be  used inside a class

// protectedaccess modifiers can only be use din child claases which are inherited

// to change a public property of class to private property you can add private keyword before property name

class Users{
name =''; // public
private email = '';  //  private
setName(name){
    this.name = name;
}
setEmail(email){
    this.email = email;
}
}
const u1 = new Users;
u1.setName('anil'); // possible
u1.name = 'naman'; // possible
u1.setEmail('dsfwd'); //possible
u1.email = 'sdfsd';// not possible
// same with functions



// readonlly property can be used with a property of an object to make it only be able to read outside class unlike as in private we can neither read noe write
