import { doc } from "firebase/firestore";

const formAddMed = document.querySelector('.info-cus')
const clickSent = document.querySelector('.js-sent')
// const fullName = "Nguyễn Văn A";
// const parts = fullName.split(" ");
// const firstName = parts.slice(0, parts.length - 1).join(" ");
// const lastName = parts[parts.length - 1];
// console.log(firstName); // "Nguyễn Văn"
// console.log(lastName); // "A"


clickSent.addEventListener('click', function(){
    
    var fullName = document.getElementById('Họ & Tên').value
    const parts = fullName.split(" ");
    const firstName = parts.slice(0, parts.length - 1).join(" ");
    const lastName = parts[parts.length - 1];
    var Gender = document.getElementById('Giới tính').value;
    var Email = document.getElementById('email').value;
    var Phone = document.getElementById('Số điện thoại').value;
    var IDCard = document.getElementById('Số bảo hiểm y-tế').value;
    var DateOfBirth = document.getElementById('Ngày Sinh').value;
    var Schedule = document.getElementById('Đặt lịch').value.split("T");

    
})
