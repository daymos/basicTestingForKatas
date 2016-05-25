function crossProduct(v1,v2){
	if(arguments.length != 2)throw new Error('Arguments are not 3D vectors!')
	for (var j in arguments){
		if(arguments[j].length != 3 ){
			throw new Error('Arguments are not 3D vectors!')}

	}

	return [v1[1]*v2[2]-v1[2]*v2[1],v1[2]*v2[0]-v1[0]*v2[2],v1[0]*v2[1]-v1[1]*v2[0]]
}
module.exports = {
	crossProduct:crossProduct
}

