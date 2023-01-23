const form = document.getElementById('form')
const search = document.getElementById('search')
const result = document.getElementById('result')
const more = document.getElementById('more')


const apiUrl = 'https://api.lyrics.ovh/v1'

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const songTxt = search.value.trim(); //trim() คือฟังก์ชั้นที่ใช้ในการลบช่องว่าง ซ้าย-ขวา
     
    if (!songTxt) {
        alert('กรุณาใส่ข้อมูลให้ถูกต้อง')
    } else {
        searchLyrics(songTxt);
        test(songTxt)
    }
})


// async และ await คือการสั่งให้รอ ในที่นี้คือรอการดึงข้อมูลมาจาก api ให้เสร็จหมดก่อน
// และค่อยทำงานในขั้นตอนต่อไป
async function searchLyrics (songTxt) {
   const res = await fetch(`${apiUrl}/${songTxt}`)
   console.log(res.json());
}

