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

    hg = Math.pow(((hg * 100) / 100), 2)
    bmi = (wg / hg) * 10000

    if (bmi > 30.0) {
        Swal.fire({
            icon: 'warning',
            title: 'ผลการคำนวณ',
            text: 'อ้วนมาก'

        })
    }
    else if (bmi >= 25.0 && bmi <= 29.9) {
        Swal.fire({
            icon: 'warning',
            title: 'ผลการคำนวณ',
            text: 'อ้วน'
        })
    }
    else if (bmi >= 18.6 && bmi <= 24.0) {
        Swal.fire({
            icon: 'success',
            title: 'ผลการคำนวณ',
            text: 'น้ำหนักปกติ'
        })
    }
    else {
        Swal.fire({
            icon: 'warning',
            title: 'ผลการคำนวณ',
            text: 'ผอมเกินไป'
        })
    }

    weight.value = ''
    height.value = ''
}

    //    console.log(`W = ${wg} H = ${hg} ${bmi}`);
