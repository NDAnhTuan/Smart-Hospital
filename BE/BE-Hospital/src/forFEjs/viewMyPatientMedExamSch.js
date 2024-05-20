import { doctorController } from "../controllers/doctorController";
let uid = localStorage.getItem("uid");

function formatDate(date) {
    var year = date.getFullYear().toString();
    var month = (date.getMonth() + 101).toString().substring(1);
    var day = (date.getDate() + 100).toString().substring(1);
    return month + '/' + day + '/' + year;
}

// Lấy ra tbody của table
var tbody = document.getElementById("table-body");
var form = document.getElementsByClassName("form-kethuoc")[0];

// Tạo một mảng chứa các dữ liệu mới
const newData = await (new doctorController).viewMyPatientMedExamSch(uid);

// var newData = [
//     {
//         k3: "123456789",
//         k1: "01/01/2024",
//         k2: "Sốttt",
//         k4: "Cảm cúm"
//     },
//     {
//         k3: "987654321",
//         k1: "02/01/2024",
//         k2: "Đau họng",
//         k4: "Viêm họng"
//     },
//     {
//         k3: "246813579",
//         k1: "03/01/2024",
//         k2: "Đau bụng",
//         k4: "Tiêu chảy"
//     },
//     {
//         k3: "555555555",
//         k1: "04/01/2024",
//         k2: "Đau đầu",
//         k4: "Migraine"
//     },
//     {
//         k3: "777777777",
//         k1: "05/01/2024",
//         k2: "Mệt mỏi",
//         k4: "Stress"
//     },
//     {
//         k3: "999999999",
//         k1: "06/01/2024",
//         k2: "Đau lưng",
//         k4: "Đau cơ"
//     },
//     {
//         k3: "111111111",
//         k1: "07/01/2024",
//         k2: "Chóng mặt",
//         k4: "Cao huyết áp"
//     },
//     {
//         k3: "222222222",
//         k1: "08/01/2024",
//         k2: "Đau răng",
//         k4: "Sâu răng"
//     },
//     {
//         k3: "333333333",
//         k1: "09/01/2024",
//         k2: "Ho",
//         k4: "Viêm phế quản"
//     },
//     {
//         k3: "444444444",
//         k1: "10/01/2024",
//         k2: "Đau bụng",
//         k4: "Sỏi thận"
//     },
//     // Thêm các dữ liệu còn lại ở đây...
// ];


// Lặp qua mảng dữ liệu và thêm dòng mới vào tbody
newData.forEach(function(data) {
    var row = document.createElement("tr");

        // Thêm cột cho "Ngày"
        var cell1 = document.createElement("td");
        var date = new Date(data.Date.seconds * 1000);
        cell1.textContent = formatDate(date);
        cell1.classList.add("k1");
        row.appendChild(cell1);

        // Thêm cột cho "Triệu chứng"
        var cell2 = document.createElement("td");
        cell2.textContent = data.DescSymptoms;
        cell2.classList.add("k2");
        row.appendChild(cell2);

        // Thêm cột cho "ID bệnh nhân"
        var cell3 = document.createElement("td");
        cell3.textContent = data.ID_Patient;
        cell3.classList.add("k3");
        row.appendChild(cell3);

        // Thêm cột cho "Chẩn đoán"
        var cell4 = document.createElement("td");
        cell4.textContent = data.Diagnosis;
        cell4.classList.add("k4");
        row.appendChild(cell4);

    // Thêm nút button cho cột k5
    var buttonCell = document.createElement("td");
    buttonCell.classList.add("k5");
    var button = document.createElement("button");
    button.textContent = "Kê đơn";
    button.setAttribute("value", data.ID_Patient)
    buttonCell.appendChild(button);
    row.appendChild(buttonCell);
    
    // Thêm dòng mới vào tbody
    tbody.appendChild(row);
});

document.getElementById("toggle-table-btn").addEventListener("click", function() {
    var table = document.getElementById("thuoc");
    var tbody = table.getElementsByTagName("tbody")[0];

    // Tạo một hàng mới
    var newRow = tbody.insertRow();
    var cell0 = newRow.insertCell(0);
    var cell1 = newRow.insertCell(1);
    var cell2 = newRow.insertCell(2);
    cell0.classList.add("h0");
    cell1.classList.add("h1");
    cell2.classList.add("h2");

    // Thêm input vào các ô
    cell0.innerHTML = "<div class='deleteRow' onclick='xoaHang(this)'><span class='xoa ti-trash'></span></div>";
    cell1.innerHTML = "<input type='text' class ='tenthuoc' placeholder='Nhập tên thuốc'>";
    cell2.innerHTML = "<input type='text' class ='soluong' placeholder='Nhập số lượng'>";

    //tăng chiều cao
    var vien = document.getElementById("bgr");
    var currenth = parseInt(window.getComputedStyle(vien).height, 10);
    vien.style.height = (currenth + 43) + "px";

    var giua = document.getElementById("don");
    var currentH = parseInt(window.getComputedStyle(giua).height, 10);
    giua.style.height = (currentH + 43) + "px";
});

// Lấy button có class "k5"
// var k5Button = document.querySelectorAll("#kham .k5 button");

// Lấy div có id "bgr"
var bgrDiv = document.getElementById("bgr");

// Lấy div có id "don"
var donDiv = document.getElementById("don");

// Lấy tất cả các nút có class ".k5 button"
var k5Buttons = document.querySelectorAll(".k5 button");
var xuatDiv = document.querySelector(".xuat p");



// Lặp qua từng nút và thêm sự kiện click
k5Buttons.forEach(function(button) {
    button.addEventListener("click", async function() {
        // Lấy tham chiếu đến div có id "bgr"
        console.log('hêhhe',button.parentElement)
        var bgrDiv = document.getElementById("bgr");
        const patientList = await (new doctorController).getPatient()
        const patient = patientList.find(patientList => patientList.id === button.value); 
        console.log(patient)
        const firstNameForm = document.getElementById("fn")
        firstNameForm.value = patient.FirstName + patient.LastName
        const lastNameForm = document.getElementById("ln")
        lastNameForm.value = patient.LastName
        const seForm = document.getElementById("se")
        seForm.value = patient.Gender
        const idForm = document.getElementById("id")
        idForm.value = patient.id
        const emailForm = document.getElementById("em")
        emailForm.value = patient.Email
        const phoneForm = document.getElementById("ph")
        phoneForm.value = patient.Phone

        const cdForm = document.getElementById("cd")
        // Ẩn div có id "bgr
        bgrDiv.style.display = "block";
        
        
    });
});

xuatDiv.addEventListener("click", async function() {
    const idForm = document.getElementById("id")
    const cdForm = document.getElementById("cd")
    const tenThuoc = document.getElementsByClassName("tenthuoc");
    const soLuong = document.getElementsByClassName("soluong");
    try {
        for (let i = 0; i < tenThuoc.length; i++) {
            await (new doctorController).decreaseQuantityMedicine(tenThuoc[i].value, soLuong[i].value)
        }
        await (new doctorController).addDiagnosis(idForm.value.toString(), cdForm.value.toString()) 
            bgrDiv.style.display = "none";
            button.parentElement.parentElement.remove();
        
        
        
    }
    
    catch (error) {
        console.log(error)
    }
})

//tim kiem
function timKiem() {
    var input, filter, table, tbody, tr, td, i, j, txtValue;
    input = document.getElementById("searchInput").value.toUpperCase();
    table = document.getElementById("kham");
    tbody = table.getElementsByTagName("tbody")[0];
    tr = tbody.getElementsByTagName("tr");

    // Hiển thị lại tất cả các hàng trước khi tìm kiếm
    for (i = 0; i < tr.length; i++) {
        tr[i].style.display = "";
    }

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        var found = false;
        for (j = 0; j < td.length; j++) {
            if (td[j]) {
                txtValue = td[j].textContent || td[j].innerText;
                if (txtValue.toUpperCase().indexOf(input) > -1) {
                    found = true;
                    break;
                }
            }
        }
        // Ẩn hoặc hiển thị hàng tùy thuộc vào kết quả tìm kiếm
        if (found) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
}

// Thêm sự kiện click cho div "don"
// donDiv.addEventListener("click", function(event) {
//     // Kiểm tra xem sự kiện có phát sinh từ div "don" hay không
//     if (event.target === donDiv) {
//         // Ẩn div khi nhấp vào vùng ngoài của div "don"
//         bgrDiv.style.display = "none";
//     }
// });

// Lấy tham chiếu đến div có class "huy"
var huyDiv = document.querySelector(".huy");


// Lấy tham chiếu đến div có id "bgr"
var bgrDiv = document.getElementById("bgr");

// Thêm sự kiện click cho div "huy"
huyDiv.addEventListener("click", function() {
    // Ẩn div có id "bgr"
    
    console.log(huyDiv.innerHTML);
    bgrDiv.style.display = "none";
});

function xoaHang(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);

    //giảm chiều cao
    var vien = document.getElementById("bgr");
    var currenth = parseInt(window.getComputedStyle(vien).height, 10);
    vien.style.height = (currenth - 43) + "px";

    var giua = document.getElementById("don");
    var currentH = parseInt(window.getComputedStyle(giua).height, 10);
    giua.style.height = (currentH - 43) + "px";
}


function showXuatDon(button) {
    var patientId = button.closest("tr").querySelector(".k3").textContent;
    sessionStorage.setItem("selectedPatientId", patientId); // Save patient ID to session storage
}

function xoaHang_xd() {
    var selectedPatientId = sessionStorage.getItem("selectedPatientId");
    var rows = document.querySelectorAll("#table-body tr");
    rows.forEach(function(row) {
        var patientId = row.querySelector(".k3").textContent;
        if (patientId === selectedPatientId) {
            row.remove();
            sessionStorage.removeItem("selectedPatientId"); // Remove saved patient ID from session storage
            document.getElementById("bgr").style.display = "none"; // Hide the "Xuất đơn" container
        }
    });
}

// Add onclick event to "Kê đơn" buttons
var keDonButtons = document.querySelectorAll(".k5");
keDonButtons.forEach(function(button) {
    button.onclick = function() {
        showXuatDon(this);
    };
});

// document.addEventListener("DOMContentLoaded", function() {
//     var myButton = document.getElementById("mybutton");
//     var myLink = document.getElementById("info");

//     myButton.addEventListener("click", function(event) {
//         event.stopPropagation(); // Ngăn chặn sự kiện click trên nút button lan truyền đến body hoặc document
//         if (myLink.style.display === "none") {
//             myLink.style.display = "block"; // Hiển thị link nếu đang bị ẩn
//         } else {
//             myLink.style.display = "none"; // Ẩn link nếu đang hiển thị
//         }
//     });

//     document.addEventListener("click", function(event) {
//         if (event.target !== myButton && myLink.style.display !== "none") {
//             myLink.style.display = "none"; // Ẩn link khi click vào bất kỳ nơi nào ngoài nút button
//         }
//     });
// });