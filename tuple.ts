let role: [string,string,number,number,boolean?] = ['admin','manager',1,3]

role.push(true);

role[1] = 'user';

// if we dont add question mark with boolean it will show error as array initially didnt have a boolean value


// a tuple is an array with predefined length and types