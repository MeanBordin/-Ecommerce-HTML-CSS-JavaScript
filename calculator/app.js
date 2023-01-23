const display = document.querySelector('h1')
const btn = document.querySelectorAll('button') // querySelectorAll return array
const clearBtn = document.querySelector('.clear-btn')


function setNumberValue(inputNumber) {
    // console.log(inputNumber);
    //  ถ้า displayValue = 0 ถ้าเป็นจริง ให้นำค่าที่รับเข้ามาไป show ที่ display แต่ถ้าไม่ ก็ให้ทำการนำค่าที่มีอยู่แล้วมาต่อกัน 
    //  displayValue + inputNumber เป็นการนำ String มาต่อกัน
    const displayValue = display.textContent
    display.textContent = displayValue === '0' ? inputNumber : displayValue + inputNumber
}

function callOperator(operator) {
    // แปลง str ให้เป็น ตัวเลขโดยใช้ Number()
    const currentValue = Number(display.textContent)

    if (!firstValue) {
        firstValue = currentValue
    }
}

function addDecimal() {
    // includes คือฟังก์ชันกับการค้นหา String 
    if (!display.textContent.includes(".")) {
        display.textContent = `${display.textContent}.`
    } else {
        alert("ใส่ทศนิยมเกินแล้วครับ")
    }
}

// console.log(btn);
btn.forEach((inputBtn) => {
    // เราจะทำการกรองปุ่มจากชื่อคลาสเพื่อแยกประเภทของปุ่ม
    // classList = เข้าถึงชื่อคลาส
    // length = หาคงามยาว String 
    console.log(inputBtn.classList.length)

    // ถ้า classList.lenght = 0 แสดงว่าเป็นนปุ่มของตัวเลข
    if (inputBtn.classList.length === 0) {
        inputBtn.addEventListener('click', () => setNumberValue(inputBtn.value))
        // ทำการ add event และเมื่แกดปุ่มมให้ไปเรียกใช้ function setNumberValue
    }
    // ถ้า inputBtn.classList.contains("operator") มีชื่อคลาสที่ชื่อว่า operator
    else if (inputBtn.classList.contains("operator")) {
        inputBtn.addEventListener('click', () => callOperator(inputBtn.value))
    }
    else if (inputBtn.classList.contains("decimal")) {
        inputBtn.addEventListener('click', () => addDecimal())
    }
})

clearBtn.addEventListener('click', () => {
    display.textContent = '0'
})