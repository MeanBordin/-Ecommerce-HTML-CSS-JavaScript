const currency_one = document.getElementById('currency-one')
const currency_two = document.getElementById('currency-two')

const amount_one = document.getElementById('amount-one')
const amount_two = document.getElementById('amount-two')

const swap = document.getElementById('btn')
const rate = document.getElementById('rate')


currency_one.addEventListener('click', calculateMoney)
currency_two.addEventListener('click', calculateMoney)

amount_one.addEventListener('input', calculateMoney)
amount_two.addEventListener('input', calculateMoney)


function calculateMoney (){
    const cur_one = currency_one.value
    const cur_two = currency_two.value
    const url = `https://api.exchangerate-api.com/v4/latest/${cur_one}`
    
    fetch(url).then((res)=>res.json()).then((data)=>{
        let result = data.rates[cur_two]
        rate.innerText = `1 ${cur_one} = ${result} ${cur_two}`
        amount_two.value = (amount_one.value * result).toFixed(2)
    })
}

// เข้าหน้าเว็บมาให้ฟังชั้นนี้ทำงานเลย
calculateMoney()

swap.addEventListener('click', ()=>{
    const temp = currency_one.value

    currency_one.value = currency_two.value
    currency_two.value = temp

    calculateMoney()
})