// Lấy ra tbody của table
var tbody = document.getElementById("table-body");

// Tạo một mảng chứa các dữ liệu mới
var newData = [
    {
        k3: "123456789",
        k1: "01/01/2024",
        k2: "Sốt",
        k4: "Cảm cúm"
    },
    {
        k3: "987654321",
        k1: "02/01/2024",
        k2: "Đau họng",
        k4: "Viêm họng"
    },
    {
        k3: "246813579",
        k1: "03/01/2024",
        k2: "Đau bụng",
        k4: "Tiêu chảy"
    },
    {
        k3: "555555555",
        k1: "04/01/2024",
        k2: "Đau đầu",
        k4: "Migraine"
    },
    {
        k3: "777777777",
        k1: "05/01/2024",
        k2: "Mệt mỏi",
        k4: "Stress"
    },
    {
        k3: "999999999",
        k1: "06/01/2024",
        k2: "Đau lưng",
        k4: "Đau cơ"
    },
    {
        k3: "111111111",
        k1: "07/01/2024",
        k2: "Chóng mặt",
        k4: "Cao huyết áp"
    },
    {
        k3: "222222222",
        k1: "08/01/2024",
        k2: "Đau răng",
        k4: "Sâu răng"
    },
    {
        k3: "333333333",
        k1: "09/01/2024",
        k2: "Ho",
        k4: "Viêm phế quản"
    },
    {
        k3: "444444444",
        k1: "10/01/2024",
        k2: "Đau bụng",
        k4: "Sỏi thận"
    },
    // Thêm các dữ liệu còn lại ở đây...
];


// Lặp qua mảng dữ liệu và thêm dòng mới vào tbody
newData.forEach(function(data) {
    var row = document.createElement("tr");

        // Thêm cột cho "Ngày"
        var cell1 = document.createElement("td");
        cell1.textContent = data.k1;
        cell1.classList.add("k1");
        row.appendChild(cell1);

        // Thêm cột cho "Triệu chứng"
        var cell2 = document.createElement("td");
        cell2.textContent = data.k2;
        cell2.classList.add("k2");
        row.appendChild(cell2);

        // Thêm cột cho "ID bệnh nhân"
        var cell3 = document.createElement("td");
        cell3.textContent = data.k3;
        cell3.classList.add("k3");
        row.appendChild(cell3);

        // Thêm cột cho "Chẩn đoán"
        var cell4 = document.createElement("td");
        cell4.textContent = data.k4;
        cell4.classList.add("k4");
        row.appendChild(cell4);

    // Thêm nút button cho cột k5
    var buttonCell = document.createElement("td");
    buttonCell.classList.add("k5");
    var button = document.createElement("button");
    button.textContent = "Kê đơn";
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
    cell1.innerHTML = "<input type='text' placeholder='Nhập tên thuốc'>";
    cell2.innerHTML = "<input type='text' placeholder='Nhập số lượng'>";

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
var xuatDiv = document.querySelector(".xuat button");



// Lặp qua từng nút và thêm sự kiện click
k5Buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        // Lấy tham chiếu đến div có id "bgr"
        console.log('hêhhe',button.parentElement)
        var bgrDiv = document.getElementById("bgr");

        // Ẩn div có id "bgr
        bgrDiv.style.display = "block";
        
        xuatDiv.addEventListener("click", function() {
            bgrDiv.style.display = "none";
            button.parentElement.parentElement.remove();
        })
    });
});

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

document.addEventListener("DOMContentLoaded", function() {
    // Lấy tất cả các nút có class "k5"
    var buttons = document.querySelectorAll(".k5 button");

    // Lặp qua từng nút và gán sự kiện click
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            // Lấy giá trị k3 tương ứng từ hàng chứa nút đã nhấn
            var id = this.parentNode.parentNode.querySelector(".k3").textContent;
            // In giá trị k3 tương ứng ra console
            console.log("Giá trị k3 tương ứng:", id);
            // Hoặc bạn có thể làm bất kỳ điều gì với giá trị id ở đây
            for (var i = 0; i < data.length; i++) {
                if (data[i].idCard === id) {
                    document.getElementById("id").value = data[i].idCard;
                    document.getElementById("id").readOnly = true;
                    document.getElementById("fn").value = data[i].ho;
                    document.getElementById("fn").readOnly = true;
                    document.getElementById("ln").value = data[i].ten;
                    document.getElementById("ln").readOnly = true;
                    document.getElementById("se").value = data[i].gioiTinh;
                    document.getElementById("se").readOnly = true;
                    document.getElementById("em").value = data[i].email;
                    document.getElementById("em").readOnly = true;
                    document.getElementById("ph").value = data[i].dienThoai;
                    document.getElementById("ph").readOnly = true;
                    document.getElementById("ns").value = data[i].ngaySinh;
                    document.getElementById("ns").readOnly = true;
                    break;
                }
                else {
                    document.getElementById("id").value = '';
                    document.getElementById("fn").value = '';
                    document.getElementById("ln").value = '';
                    document.getElementById("se").value = '';
                    document.getElementById("em").value = '';
                    document.getElementById("ph").value = '';
                    document.getElementById("ns").value = '';
                }
            }
        });
    });
});