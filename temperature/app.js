const number = document.getElementById('inp-number')
const display = document.getElementById('display')
number.addEventListener('input', calculatTemp)

let F=0, K=0, C=0 

function calculatTemp () {
    C = number.value
    F = parseFloat(9/5*C+32)
    K = parseFloat(C + 273.15)
    display.innerHTML = `F = ${F}, K = ${K}`
}

calculatTemp()