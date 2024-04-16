// Dữ liệu mẫu
var data = [
    {
        idCard: "123456789",
        ho: "Nguyễn",
        ten: "Văn A",
        gioiTinh: "Nam",
        ngaySinh: "01/01/1990",
        dienThoai: "0987654321",
        email: "nguyenvana@example.com"
    },
    {
        idCard: "987654321",
        ho: "Trần",
        ten: "Thị B",
        gioiTinh: "Nữ",
        ngaySinh: "15/05/1995",
        dienThoai: "0123456789",
        email: "tranthib@example.com"
    },
    {
        idCard: "246813579",
        ho: "Lê",
        ten: "Đức C",
        gioiTinh: "Nam",
        ngaySinh: "10/10/1985",
        dienThoai: "0976543210",
        email: "leducc@example.com"
    },
    {
        idCard: "555555555",
        ho: "Phạm",
        ten: "Thị D",
        gioiTinh: "Nữ",
        ngaySinh: "20/02/2000",
        dienThoai: "0909090909",
        email: "phamthid@example.com"
    },
    {
        idCard: "777777777",
        ho: "Hoàng",
        ten: "Văn E",
        gioiTinh: "Nam",
        ngaySinh: "05/05/1998",
        dienThoai: "0666666666",
        email: "hoangvane@example.com"
    },
    {
        idCard: "999999999",
        ho: "Trần",
        ten: "Văn F",
        gioiTinh: "Nam",
        ngaySinh: "30/09/1993",
        dienThoai: "0555555555",
        email: "tranvanf@example.com"
    },
    {
        idCard: "123456789",
        ho: "Nguyễn",
        ten: "Văn A",
        gioiTinh: "Nam",
        ngaySinh: "01/01/1990",
        dienThoai: "0987654321",
        email: "nguyenvana@example.com"
    },
    {
        idCard: "987654321",
        ho: "Trần",
        ten: "Thị B",
        gioiTinh: "Nữ",
        ngaySinh: "15/05/1995",
        dienThoai: "0123456789",
        email: "tranthib@example.com"
    },
    {
        idCard: "246813579",
        ho: "Lê",
        ten: "Đức C",
        gioiTinh: "Nam",
        ngaySinh: "10/10/1985",
        dienThoai: "0976543210",
        email: "leducc@example.com"
    },
    {
        idCard: "555555555",
        ho: "Phạm",
        ten: "Thị D",
        gioiTinh: "Nữ",
        ngaySinh: "20/02/2000",
        dienThoai: "0909090909",
        email: "phamthid@example.com"
    },
    {
        idCard: "777777777",
        ho: "Hoàng",
        ten: "Văn E",
        gioiTinh: "Nam",
        ngaySinh: "05/05/1998",
        dienThoai: "0666666666",
        email: "hoangvane@example.com"
    },
    {
        idCard: "999999999",
        ho: "Trần",
        ten: "Văn F",
        gioiTinh: "Nam",
        ngaySinh: "30/09/1993",
        dienThoai: "0555555555",
        email: "tranvanf@example.com"
    },
    {
        idCard: "135792468",
        ho: "Đinh",
        ten: "Thị G",
        gioiTinh: "Nữ",
        ngaySinh: "12/12/1988",
        dienThoai: "0333333333",
        email: "dinhthig@example.com"
    },
    {
        idCard: "246824680",
        ho: "Vũ",
        ten: "Đức H",
        gioiTinh: "Nam",
        ngaySinh: "08/08/1996",
        dienThoai: "0444444444",
        email: "vuduch@example.com"
    },
    {
        idCard: "777777888",
        ho: "Trần",
        ten: "Thị K",
        gioiTinh: "Nữ",
        ngaySinh: "25/04/1994",
        dienThoai: "0777777777",
        email: "tranthik@example.com"
    },
    {
        idCard: "999888777",
        ho: "Lý",
        ten: "Văn M",
        gioiTinh: "Nam",
        ngaySinh: "18/06/1992",
        dienThoai: "0888888888",
        email: "lyvanm@example.com"
    },
    {
        idCard: "555555777",
        ho: "Phan",
        ten: "Thị N",
        gioiTinh: "Nữ",
        ngaySinh: "07/03/1997",
        dienThoai: "0999999999",
        email: "phanthin@example.com"
    },
    {
        idCard: "123123123",
        ho: "Nguyễn",
        ten: "Văn P",
        gioiTinh: "Nam",
        ngaySinh: "29/11/1987",
        dienThoai: "0111111111",
        email: "nguyenvanp@example.com"
    }
];

// Lấy tham chiếu đến tbody của bảng và container chứa bảng
var tbody = document.querySelector("#ttcn tbody");
var tableContainer = document.getElementById("tableContainer");

// Hàm thêm dữ liệu vào bảng
function addDataToTable() {
    // Lặp qua mỗi đối tượng trong mảng data và thêm vào bảng
    data.forEach(function(item) {
        // Tạo một hàng mới
        var row = document.createElement("tr");

        // Tạo các ô trong hàng
        var idCell = document.createElement("td");
        idCell.textContent = item.idCard;
        idCell.classList.add("h1");
        var hoTenCell = document.createElement("td");
        hoTenCell.classList.add("h2");
        hoTenCell.textContent = item.ho;
        var gioiCell = document.createElement("td");
        gioiCell.textContent = item.ten;
        gioiCell.classList.add("h3");
        var namSinhCell = document.createElement("td");
        namSinhCell.textContent = item.gioiTinh;
        namSinhCell.classList.add("h4");
        var diaChiCell = document.createElement("td");
        diaChiCell.textContent = item.ngaySinh;
        diaChiCell.classList.add("h5");
        var dienThoaiCell = document.createElement("td");
        dienThoaiCell.textContent = item.dienThoai;
        dienThoaiCell.classList.add("h6");
        var emailCell = document.createElement("td");
        emailCell.textContent = item.email;
        emailCell.classList.add("h7");

        // Thêm các ô vào hàng
        row.appendChild(idCell);
        row.appendChild(hoTenCell);
        row.appendChild(gioiCell);
        row.appendChild(namSinhCell);
        row.appendChild(diaChiCell);
        row.appendChild(dienThoaiCell);
        row.appendChild(emailCell);

        // Thêm hàng vào tbody của bảng
        tbody.appendChild(row);

        // Tăng chiều cao của container chứa bảng lên 50px sau mỗi lần thêm dữ liệu
    });
}

// Thêm dữ liệu vào bảng khi trang được tải
addDataToTable();


// Lấy tham chiếu đến ô nhập liệu
var searchInput = document.getElementById("searchInput");

// Hàm tìm kiếm trong bảng
function searchTable() {
    var input, filter, table, tbody, tr, td, i, txtValue;
    input = searchInput.value.toUpperCase();
    table = document.getElementById("ttcn");
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