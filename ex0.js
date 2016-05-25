function lowercaseCount(str){
	var res = 0;
	str.split('').forEach(((el)=>{
			if(/[a-z]/.test(el))res++	
	}))
	return res	
	
}







module.exports = {
	lowercaseCount:lowercaseCount}

