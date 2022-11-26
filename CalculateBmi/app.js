const weight = document.getElementById('weight')
const height = document.getElementById('height')
const display1 = document.querySelector('.display1')
const display2 = document.querySelector('.display2')
const submit = document.querySelector('.submit')


submit.addEventListener('click', calculateBmi)

function calculateBmi() {
    weight.addEventListener('input', calculateBmi)
    height.addEventListener('input', calculateBmi)

    let wg = weight.value
    let hg = height.value
    let bmi = 0;

    hg = Math.pow(( (hg * 100) /100 ), 2)
    bmi = (wg / hg)*10000

    // display
    display1.innerHTML = bmi

    if (bmi > 30.0) {
        display2.innerText = 'อ้วนมาก'
    } 
    else if (bmi >= 25.0 && bmi <= 29.9) {
        display2.innerText = 'อ้วน'
    }
    else if (bmi >= 18.6 && bmi <= 24.0) {
        display2.innerText = 'อ้วนน้ำหนักปกติ'
    }
    else {
        display2.innerText = 'ผอมเกินไป'
    }
//    console.log(`W = ${wg} H = ${hg} ${bmi}`);
}
 