const assert = require('assert');
var tested = require('./ex3.js')

//assert.equal(tested.f1(),'ciao','FAIL THE TEST ')
//assert.deepEqual(tested.crossProduct([1,0,0], [0,1,0]),[0,0,1],'FAIL THE TEST ')
//assert.deepEqual(tested.crossProduct([3,2,1], [1,2,3]),[4,-8,4],'FAIL THE TEST ')
//assert.deepEqual(tested.crossProduct([0,2,1], [1,2,3]),[4,-8,4],'FAIL THE TEST ')

assert.fail(tested.crossProduct(),'Arguments are not 3D vectors!')

//assert.deepEqual(tested.crossProduct('ciao','error'))


 //console.log(tested.f1() === 'ciao')
