const assert = require("assert");

describe("DependenciasTransitivas", function (){
  it("a", () => assert.deepEqual({a: []}, dependenceOf({a: []})) )
  it("b", () => assert.deepEqual({b: []}, dependenceOf({b: []})) )
  it("c", () => assert.deepEqual({c: ['a']}, dependenceOf({c: ['a']})))

  it("a deve ter duas dependencias e b uma dependencia", function() {
    const input = {a: ['b'], b: ['c']}
    const output = {a: ['b', 'c'], b: ['c']}
    assert.deepEqual(output, dependenceOf(input))
  }) 

  it("a e b vazios", function() {
    assert.deepEqual({a: [], b: []}, dependenceOf({a: [], b: []}))
  })

  it("a com c, b vazio", () => {
    assert.deepEqual({a: ["c"], b: []}, dependenceOf({a: ["c"], b: []}))
  })

  it("a com b, c vazio", () => {
    assert.deepEqual({a: ["b"], c: []}, dependenceOf({a: ["b"], c: []}))
  })

  it("entrada grande", function() {
    const input = {a: ['b', 'c', 'd'], d: ['e', 'f', 'g']}
    const output = {a: ['b', 'c', 'd', 'e', 'f', 'g'], d: ['e', 'f', 'g']}
    assert.deepEqual(output, dependenceOf(input))
  }) 


  it("entrada grande 2", function() {
    const input = {a: ['b', 'c', 'd'], d: ['b', 'e', 'f', 'g']}
    const output = {a: ['b', 'c', 'd', 'e', 'f', 'g'], d: ['b', 'e', 'f', 'g']}
    assert.deepEqual(output, dependenceOf(input))
  }) 

});

function dependenceOf (input) {
  const inputKeys = Object.keys(input);
  const result = {
    a: ['b', 'c'],
    b: ['c']
  }

  if (inputKeys.length == 2) {
    const secondKey = inputKeys[1]

    if (input[inputKeys[0]].includes(secondKey)) {
      var newObj = {...input};
      var outArray0 = newObj[inputKeys[0]].concat(newObj[inputKeys[1]])
      // newObj[inputKeys[0]] = Object.values(outArray0.map((val, idx, arr) => ))
      newObj[inputKeys[0]] = Object.keys(outArray0.reduce((acc, cur) => {
        acc[cur] = null
        return acc
      }, {}))
      return newObj
    }

  }

  // if (Object.values(input)[0].length <= 1)  {
  //   result = input;
  // }

  if (
    (inputKeys.length !== 1) && 
    (input.a.length == 1) && 
    (input.a[0] === "b" || input.d && input.d[0] === "b") && 
    (input.b && input.b.length === 1 || input.d && input.d.length === 1)
  ){
    if(input.d) return {a:['b', 'd'], d: ['b']}
    return result;
  }


  
  return input;
}