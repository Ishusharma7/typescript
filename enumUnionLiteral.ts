enum Role{   //doesnt have to give index to the role manually
    'Admin','Manager', 'User'
}

console.log(Role.Manager)  //Helps avoid spelling mistake and gives index as output 1 in this case
console.log(Role) //prints the role as an array with index

let side:string|number = 'ere'  //this is union type which lets us use both string and number

//between union and any union is preffered as with any the benefits of ts will dissapear

//literals are when we assign values rather then type to the variable or parameter

