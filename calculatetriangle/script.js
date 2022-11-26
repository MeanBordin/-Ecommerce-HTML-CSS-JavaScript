const NumberA = document.getElementById('number-A')
const NumberB = document.getElementById('number-B')
const NumberC = document.getElementById('number-C')
const formula = document.querySelector('.formula')
const spanResult = document.querySelector('.span-result')
const btn = document.querySelector('button')

NumberA.addEventListener('input', calcTraingle)
NumberB.addEventListener('input', calcTraingle)
NumberC.addEventListener('input', calcTraingle)

let a, b, c, result, newc;
let equal

function calcTraingle () {
    a = NumberA.value
    b = NumberB.value
    c = NumberC.value

    newc = parseFloat(Math.pow(c, 2))
    a = Math.pow(a, 2)
    b = Math.pow(b, 2)

    result = parseFloat(a + b)

    checkType(newc, result)
}

function checkType (newc, result) {
    // console.log('C = '+ newc + ' : A+B = ' + result);
    if (newc === result) {
        formula.innerHTML = `${newc} = ${result}`
        spanResult.innerHTML = 'สามเหลี่ยมุมฉาก'
    }else if (newc > result) {
        formula.innerHTML = `${newc} > ${result}`
        spanResult.innerHTML = 'สามเหลี่ยมุมป้าน'
    }else if (newc < result) {
        formula.innerHTML = `${newc} < ${result}`
        spanResult.innerHTML = 'สามเหลี่ยมุมแหลม'
    }
}


