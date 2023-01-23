const coupon = document.querySelector('.coupon')
const btn = document.querySelector('.btn')

function success() {
    setTimeout(() => {
        btn.textContent = "Copy Success!!"
        btn.classList.add('success')
    },500)

}

btn.addEventListener('click', (e) => {
    // console.log('Copy sucess!');
    // select() เก็บค่า text ทั้งหมดใน input หรือ textarea
    // หรือ ก็คือ คุมดำทั้งหมดใน input หรือ textarea
    coupon.select()
    coupon.setSelectionRange(0, 999999)
    navigator.clipboard.writeText(coupon.value)
    success()
})