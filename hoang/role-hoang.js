
const clickSearch = document.querySelector('.ti-search')
const jsSearch = document.querySelector('.js-show-search')
const jsHides = document.querySelectorAll('.js-hide')
const jsRight = document.querySelector('.js-right')
const closeSearch = document.querySelector('#slider, #container, #logo')

const clickInfo = document.querySelector('.js-info')
const jsInfo = document.querySelector('#info-personal')
const clickSave = document.querySelector('.js-saveInfo')

const clickHome = document.querySelector('#back-home') //chinh lai ve home dung nghia


const clickLogin = document.querySelector('.js-login, .js-logout') // thoat all
const jsLogin = document.querySelector('#modal-login')
const closeLogin = document.querySelector('#navigation')



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

function backHome(){
    jsInfo.classList.remove('show')
}

function showLogin(){
    jsLogin.classList.add('show')
}
function hideLogin(){
    jsLogin.classList.remove('show')
}



clickSearch.addEventListener('click', showSearch)
closeSearch.addEventListener('click', hideSearch)

clickSave.addEventListener('click', saveInfo)
clickInfo.addEventListener('click', showInfo)

clickHome.addEventListener('click', backHome)

clickLogin.addEventListener('click', showLogin)
closeLogin.addEventListener('click', hideLogin)