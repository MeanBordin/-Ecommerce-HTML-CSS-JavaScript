const amount_one = document.querySelector('.amount-one')
const amount_two = document.querySelector('.amount-two')
const submit = document.querySelector('.submit')
const display1 = document.querySelector('.display1')
const display2 = document.querySelector('.display2')


submit.addEventListener('click', ()=>{
    let number
    
    amount_one.addEventListener('input', number)
    amount_two.addEventListener('input', number)
    
    let number1 = parseFloat(amount_one.value)
    let number2 = parseFloat(amount_two.value)
    let meter, centimeter = 0;

    if (isNaN(number1) !== true){
        // calculate meter to centimeter
        meter = (number1 * 100).toFixed(2)
        display1.innerHTML = `${number1} เมตร = ${meter} เซนติเมตร`;

        // calculate centimeter to meter
        centimeter = (number2 / 100).toFixed(2)
        display2.innerHTML = `${number2} เซนติเมตร = ${centimeter} เมตร`;
    }
    else{
        alert('กรุณาใส่ตัวเลขที่ท่านต้องการ');
    }
})


