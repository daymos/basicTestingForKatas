function lowercaseCount(str){
	var res = 0;
	str.split('').forEach(((el)=>{
			if(/[A-Z]/.test(el))res++	
	}))
	return res	
	
}

console.log(lowercaseCount('Ciao'))
