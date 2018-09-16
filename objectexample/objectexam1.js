let iscertified = true;

let vechile = {
	'engine': false
}

let creta = {
	'price' : 7,
	'model' : {
		'name' : 'rrv100'
	}
}

let suv = {
	'price' : 10,
	'model' : {
		'name' : 'suv1102'
	}
}

creta.vechile = {...vechile};
suv.vechile = {...vechile};
suv.vechile.engine = true;


console.log("creta object");

console.log(creta);

console.log("suv object");

console.log(suv);
