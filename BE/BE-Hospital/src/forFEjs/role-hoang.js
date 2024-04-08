
const clickSearch = document.querySelector('.ti-search')
const jsSearch = document.querySelector('.js-show-search')
const jsHides = document.querySelectorAll('.js-hide')
const jsRight = document.querySelector('.js-right')
const closeSomething = document.querySelector('#main')
const propagationSearch_1 = document.querySelector('.ti-search')
const propagationSearch_2 = document.querySelector('.js-show-search')

const clickInfo = document.querySelector('.js-info')
const jsInfo = document.querySelector('#info-personal')
const clickSave = document.querySelector('.js-saveInfo')

const clickHome = document.querySelector('#back-home') //chinh lai ve home dung nghia



const clickLogout = document.querySelector('.js-logout') // thoat all chưa xong

const clickContact = document.querySelector('.js-contact')
const jsContact = document.querySelector('#sent-info')
const clickSent = document.querySelector('.js-sent')

const clickForgetMK = document.querySelector('.js-forgetmk')



function showSearch() {
    jsSearch.classList.add('show')
    for (const i of jsHides) {
        i.classList.add('hide')
    }
    jsRight.classList.add('right')
}
function hideSearch() {
    jsSearch.classList.remove('show')
    for (const i of jsHides) {
        i.classList.remove('hide')
    }
    jsRight.classList.remove('right')
}

function saveInfo() {
    alert("Success");
}
function showInfo() {
    jsInfo.classList.add('show')
}

function backHome() {
    jsInfo.classList.remove('show')
}

function showContact(){
    jsContact.classList.add('show')
}
function hideContact(){
    jsContact.classList.remove('show')
}


clickSearch.addEventListener('click', showSearch)
propagationSearch_1.addEventListener('click', function (event) {
    event.stopPropagation()
})
propagationSearch_2.addEventListener('click', function (event) {
    event.stopPropagation()
})
closeSomething.addEventListener('click', hideSearch)

clickSave.addEventListener('click', saveInfo)
clickInfo.addEventListener('click', showInfo)

clickHome.addEventListener('click', backHome)


const jsLogin = document.querySelector('#modal-login')
const propagationLogin_3 = document.querySelector('#info-summary')
window.onclick = function(event) {// When the user clicks anywhere outside of the modal, close it
    if (event.target == jsLogin) {
        jsLogin.style.display = "none";
    }
}
propagationLogin_3.addEventListener('click', function (event) {//bấm vào con của button login ko dc mở
    event.stopPropagation()
})
clickForgetMK.addEventListener('click', function(){
    alert("Gọi vào số quản trị viên: 0819.170.504")
})


clickContact.addEventListener('click', showContact)
closeSomething.addEventListener('click', hideContact)
clickContact.addEventListener('click', function(event){
    event.stopPropagation()
})
jsContact.addEventListener('click', function(event){
    event.stopPropagation()
})
clickSent.addEventListener('click', function(){
    alert("Đã gửi thành công")
})


document.querySelector('.js-service').addEventListener('click', function(){
    document.querySelector('.Services').classList.add('show')
    document.querySelector('.Introduce').classList.add('hide')
})
document.querySelector('.js-introduce').addEventListener('click', function(){
    document.querySelector('.Services').classList.remove('show')
    document.querySelector('.Introduce').classList.remove('hide')
})
document.querySelector('.js-doctor').addEventListener('click', function(){
    document.querySelector('.Doctors').classList.add('show')
    document.querySelector('.Achievements').classList.add('hide')
})
document.querySelector('.js-achievement').addEventListener('click', function(){
    document.querySelector('.Doctors').classList.remove('show')
    document.querySelector('.Achievements').classList.remove('hide')
})



// JavaScript for button click handling
// Giả sử có 2 thẻ, bạn có thể điều chỉnh số lượng tùy ý
var totalRows = 2;
var currentRow = 1; // Bắt đầu từ thẻ đầu tiên

document.getElementById('nextSv').addEventListener('click', function() {
  if (currentRow < totalRows) {
    document.querySelector('.row-' + currentRow).style.transform = 'translateX(-100%)';
    currentRow++;
    document.querySelector('.row-' + currentRow).style.transform = 'translateX(0)';
  } else {
    // Quay về thẻ đầu tiên
    document.querySelector('.row-' + currentRow).style.transform = 'translateX(-100%)';
    currentRow = 1;
    document.querySelector('.row-' + currentRow).style.transform = 'translateX(0)';
  }
});

document.getElementById('prevSv').addEventListener('click', function() {
  if (currentRow > 1) {
    document.querySelector('.row-' + currentRow).style.transform = 'translateX(100%)';
    currentRow--;
    document.querySelector('.row-' + currentRow).style.transform = 'translateX(0)';
  } else {
    // Quay về thẻ cuối cùng
    document.querySelector('.row-' + currentRow).style.transform = 'translateX(100%)';
    currentRow = totalRows;
    document.querySelector('.row-' + currentRow).style.transform = 'translateX(0)';
  }
});

  