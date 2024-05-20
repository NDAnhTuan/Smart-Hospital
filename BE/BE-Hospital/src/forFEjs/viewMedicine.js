import { doctorController } from "../controllers/doctorController";
let uid = localStorage.getItem("uid");

function formatDate(date) {
    var year = date.getFullYear().toString();
    var month = (date.getMonth() + 101).toString().substring(1);
    var day = (date.getDate() + 100).toString().substring(1);
    return month + '/' + day + '/' + year;
}

const data = await (new doctorController).getMedicine();

// var data = [
//     { tenThuoc: "Paracetamol", ngaySX: "01/01/2022", ngayHH: "01/01/2023", gia: 5000, soLuong: 100, hamLuong: "500mg" },
//     { tenThuoc: "Amoxicillin", ngaySX: "01/02/2022", ngayHH: "01/02/2023", gia: 7000, soLuong: 80, hamLuong: "250mg" },
//     { tenThuoc: "Ibuprofen", ngaySX: "01/03/2022", ngayHH: "01/03/2023", gia: 6000, soLuong: 120, hamLuong: "200mg" },
//     { tenThuoc: "Aspirin", ngaySX: "01/04/2022", ngayHH: "01/04/2023", gia: 5500, soLuong: 90, hamLuong: "300mg" },
//     { tenThuoc: "Omeprazole", ngaySX: "01/05/2022", ngayHH: "01/05/2023", gia: 8000, soLuong: 70, hamLuong: "20mg" },
//     { tenThuoc: "Dexamethasone", ngaySX: "01/06/2022", ngayHH: "01/06/2023", gia: 9000, soLuong: 60, hamLuong: "1mg" },
//     { tenThuoc: "Loratadine", ngaySX: "01/07/2022", ngayHH: "01/07/2023", gia: 7500, soLuong: 110, hamLuong: "10mg" },
//     { tenThuoc: "Cetirizine", ngaySX: "01/08/2022", ngayHH: "01/08/2023", gia: 6500, soLuong: 130, hamLuong: "5mg" },
//     { tenThuoc: "Metformin", ngaySX: "01/09/2022", ngayHH: "01/09/2023", gia: 8500, soLuong: 50, hamLuong: "1000mg" },
//     { tenThuoc: "Simvastatin", ngaySX: "01/10/2022", ngayHH: "01/10/2023", gia: 10000, soLuong: 40, hamLuong: "20mg" },
//     { tenThuoc: "Panadol", ngaySX: "10/01/2022", ngayHH: "10/01/2023", gia: 6000, soLuong: 80, hamLuong: "500mg" },
//     { tenThuoc: "Amoxicillin", ngaySX: "12/02/2022", ngayHH: "12/02/2023", gia: 7000, soLuong: 90, hamLuong: "250mg" },
//     { tenThuoc: "Ibuprofen", ngaySX: "15/03/2022", ngayHH: "15/03/2023", gia: 5500, soLuong: 100, hamLuong: "200mg" },
//     { tenThuoc: "Aspirin", ngaySX: "20/04/2022", ngayHH: "20/04/2023", gia: 4500, soLuong: 120, hamLuong: "300mg" },
//     { tenThuoc: "Omeprazole", ngaySX: "25/05/2022", ngayHH: "25/05/2023", gia: 8000, soLuong: 110, hamLuong: "20mg" },
//     { tenThuoc: "Dexamethasone", ngaySX: "30/06/2022", ngayHH: "30/06/2023", gia: 9500, soLuong: 70, hamLuong: "1mg" },
//     { tenThuoc: "Loratadine", ngaySX: "05/07/2022", ngayHH: "05/07/2023", gia: 7500, soLuong: 90, hamLuong: "10mg" },
//     { tenThuoc: "Cetirizine", ngaySX: "10/08/2022", ngayHH: "10/08/2023", gia: 6500, soLuong: 80, hamLuong: "5mg" },
//     { tenThuoc: "Metformin", ngaySX: "15/09/2022", ngayHH: "15/09/2023", gia: 8500, soLuong: 60, hamLuong: "1000mg" },
//     { tenThuoc: "Simvastatin", ngaySX: "20/10/2022", ngayHH: "20/10/2023", gia: 9500, soLuong: 50, hamLuong: "20mg" }
// ];

// Lấy tham chiếu đến tbody của bảng
var tbody = document.querySelector("#dst tbody");

// Hàm thêm dữ liệu
function addData() {
    data.forEach(function(item) {
        // tạo hàng mới
        var row = document.createElement("tr");

        // tạo ô
        var tt = document.createElement("td");
        tt.textContent = item.Name;
        tt.classList.add("h1");
        var nsx = document.createElement("td");
        var date = new Date(item.EXP.seconds * 1000);
        nsx.textContent = formatDate(date);
        nsx.classList.add("h2");
        var nhh = document.createElement("td");
        date = new Date(item.MFG.seconds * 1000);
        nhh.textContent = formatDate(date);
        nhh.classList.add("h3");
        var g = document.createElement("td");
        g.textContent = item.Price;
        g.classList.add("h4");
        var sl = document.createElement("td");
        sl.textContent = item.Quantity;
        sl.classList.add("h5");
        var hl = document.createElement("td");
        hl.textContent = item.Strength;
        hl.classList.add("h6");

        //thêm ô vào bảng
        row.appendChild(tt);
        row.appendChild(nsx);
        row.appendChild(nhh);
        row.appendChild(g);
        row.appendChild(sl);
        row.appendChild(hl);

        //thêm hàng vào tbody
        tbody.appendChild(row);
    })
}

addData();

// Lấy tham chiếu đến ô nhập liệu
var searchInput = document.getElementById("searchInput");

// Hàm tìm kiếm trong bảng
function searchTable() {
    var input, filter, table, tbody, tr, td, i, txtValue;
    input = searchInput.value.toUpperCase();
    table = document.getElementById("dst");
    tbody = table.getElementsByTagName("tbody");
    tr = tbody[0].getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        for (var j = 0; j < td.length; j++) {
            if (td[j]) {
                txtValue = td[j].textContent || td[j].innerText;
                if (txtValue.toUpperCase().indexOf(input) > -1) {
                    tr[i].style.display = "";
                    break;
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var myButton = document.getElementById("mybutton");
    var myLink = document.getElementById("info");

    myButton.addEventListener("click", function(event) {
        event.stopPropagation(); // Ngăn chặn sự kiện click trên nút button lan truyền đến body hoặc document
        if (myLink.style.display === "none") {
            myLink.style.display = "block"; // Hiển thị link nếu đang bị ẩn
        } else {
            myLink.style.display = "none"; // Ẩn link nếu đang hiển thị
        }
    });

    document.addEventListener("click", function(event) {
        if (event.target !== myButton && myLink.style.display !== "none") {
            myLink.style.display = "none"; // Ẩn link khi click vào bất kỳ nơi nào ngoài nút button
        }
    });
});