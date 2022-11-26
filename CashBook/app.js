const balance = document.querySelector('.balance')
const moneyPlus = document.getElementById('money-plus')
const moneyMinus = document.getElementById('money-minus')
const list = document.getElementById('list')
const form = document.getElementById('form')
const inpText = document.getElementById('text')
const inpAmount = document.getElementById('amount')
const btn = document.getElementById('btn')

// const dataTransaction = [
//     {
//         id: 1,
//         text: 'ค่าขนม',
//         amount: -100, 
//     },
//     {
//         id: 2,
//         text: 'เงินเดือน',
//         amount: +18000, 
//     },
//     {
//         id: 3,
//         text: 'ค่าไฟ',
//         amount: -500, 
//     },
//     {
//         id: 4,
//         text: 'ค่าอาหารโชยุ',
//         amount: -1000, 
//     },
// ]

// console.log(dataTransaction);
let transactions = []
form.addEventListener('submit', addTransaction)

function init () {
    list.innerHTML = ''
    transactions.forEach(addDataToList)
    calculateMoney()
}

// จัด format ตัวเลข
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function randomID () {
    return Math.floor(Math.random() * 1000000)
}

function addDataToList (transactions) {
    // ถ้า transaction.amount 
    // น้อยกว่า 0 ให้เป็นเครื่องหมายลบ
    // ถ้ามากกว่า 0 ให้เป็นเครื่องหมายบวก
    const symbol = transactions.amount < 0 ? '-' : '+'
    const status = transactions.amount < 0 ? 'minus' : 'plus'
    // สร้าง html tag
    const item = document.createElement('li')
    // แอดชื่อคลาส
    item.classList.add(status)
    item.innerHTML = `${transactions.text}<span>${symbol}฿${Math.abs(transactions.amount)}
                    </span><button class="delete-btn" id="delete-btn" onclick="removeData(${transactions.id})">X</button>`
    //นำข้อมูลจาก tag li ไปใส่ใน list ซึ่งเป็น tag ul 
    list.appendChild(item)
}

function calculateMoney () {
    const amounts = transactions.map((transactions) => transactions.amount)
    // console.log(amounts);
    
    // คำนวณค่าคงเหลือ
    const total = amounts.reduce((result, item) => (result += item), 0).toFixed(2)
    // console.log(total);
    balance.innerHTML = `฿` + formatNumber(total)

    //คำนวณรายรับ
    const income = amounts.filter((item) => item > 0).reduce((result, item) => (result += item), 0).toFixed(2)
    moneyPlus.innerHTML = `฿` + formatNumber(income)

    // คำนวณรายจ่าย
    const expence = (amounts.filter((item) => item < 0).reduce((result, item) => (result += item), 0) * -1).toFixed(2)
    moneyMinus.innerHTML = `฿` + formatNumber(expence)
}

function removeData (id) {
    transactions = transactions.filter((transactions) => transactions.id !== id)
    init()
}

function addTransaction (e) {
    // ทำให้หน้าเว็บไม่มีการกระพริบ เวลาส่งข้อมูลผ่าน form
    e.preventDefault()
    
    if (inpText.value.trim() === '' || inpAmount.value.trim() === '' ) {
        alert('กรุณาใส่ข้อมูลธุระกรรมของท่าน')
    }else{
        const data = {
            id: randomID(),
            text: inpText.value,
            amount: +inpAmount.value
        }
        console.log(data);

        transactions.push(data)
        addDataToList(data)
        calculateMoney()
        inpText.value = ''
        inpAmount.value = ''
    }
}

init()

