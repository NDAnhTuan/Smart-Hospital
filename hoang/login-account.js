let userAPI = "linkkkkkkkkkkkkk"

function login() {
    getUser(handleLogin) //truyen function vao
}

function getUser(callback) {
    fetch(userAPI).then(function (res) {
        return res.json().then(callback)
    })
}

function handleLogin(data) {
    var username = document.getElementById('#User-name').value
    var password = document.getElementById('#Password').value
    data.forEach(data => {
        if (data.username == username && data.password == password) {
            alert("Đăng nhập thành công")
            if (data.type == 1) { //vô tk của quản lý
                window.location.href = "./homequanli.html"
            }
            else {//vô tk của bác sĩ
                window.location.href = "./homebacsi.html"
            }
        }
        else {
            alert("Vui lòng kiểm tra lại Username hoặc Password")
        }
    });
}