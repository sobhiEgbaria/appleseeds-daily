function outerFunction(outerVariable) {
    let outer2 = 'Hi'
    return function innerFunction(innerVariable) {
    console.log('Outer Variable: ' + outerVariable)
    console.log('Inner Variable:'    + innerVariable)
    console.log(outer2)
   
    }
    }
    outer2 = 'lolo'
    const newFunction = outerFunction('outside')
    newFunction('inner')
