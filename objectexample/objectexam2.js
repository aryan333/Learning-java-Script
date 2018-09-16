let name = {
	firstName : 'virat',
	lastName  : 'Kholi'
}
let firstName = 'ms';
let lastName = 'dhoni';

/**
 @param object, which contain fist and last namne
 @return string
 this function concat first nad last name and return full name
*/
function fullName(data){

	data.firstName = data.firstName+" Jai"

	return data.firstName+" "+data.lastName; 
}


console.log(fullName({...name}));
console.log(fullName({
	firstName,
	lastName 
}));

console.log(name);