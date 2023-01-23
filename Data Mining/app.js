const age = document.getElementById('Age')
const student = document.getElementById('Student')
const credit = document.getElementById('Credit')
const submit = document.getElementById('btn-submit')
const display = document.getElementById('display')

submit.addEventListener('click', () => {
  const Age = Number(age.value)
  const Student = student.value
  const Credit = credit.value

  if (Age !== '') {
    if (Age !== 0) {
      if (Age <= 30 && Student === 'yes') {
        Swal.fire({
          icon: 'success',
          title: 'ผลการทำนาย: ซื้อ'
        })
      }
      else if (Age > 30 && Age <= 40) {
        Swal.fire({
          icon: 'success',
          title: 'ผลการทำนาย: ซื้อ'
        })
      }
      else if (Age > 40 && Credit === 'fair') {
        Swal.fire({
          icon: 'success',
          title: 'ผลการทำนาย: ซื้อ'
        })
      }
      else if (Age > 40 && Credit === 'excellent') {
        Swal.fire({
          icon: 'error',
          title: 'ผลการทำนาย: ไม่ซื้อ'
        })
      }
    }
    else {
      // Swal -> SweetAlert2 used SweetAlert CDN
      Swal.fire({
        icon: 'warning',
        title: 'เกิดข้อผิดพลาด',
        text: 'กรุณากรอกข้อมูลอายุของท่านให้ถูกต้อง'
      })
    }
  }
})