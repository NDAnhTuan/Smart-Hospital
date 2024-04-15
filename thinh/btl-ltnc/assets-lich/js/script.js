var currentday = new Date();
var day = currentday.getDate();
var month = currentday.getMonth() + 1;
var year = currentday.getFullYear();

var dateelement = document.getElementById('currentday');
dateelement.textContent = 'Ngày '+day+' Tháng '+month+' Năm '+year;

// Biến lichLamViec được khai báo ở ngoài hàm
var lichLamViec = [
    ["", "Khám bệnh", "Khám bệnh", "Nghỉ", "Phẫu thuật", "Khám bệnh", "Nghỉ"],
    ["", "Nghỉ", "Khám bệnh", "Dọn dẹp", "Nghỉ", "Điều trị", "Nghỉ"],
    ["", "Khám bệnh", "Nghỉ", "Nghỉ", "Hội nghị", "Khám bệnh", "Nghỉ"],
    ["", "Khám bệnh", "Khám bệnh", "Khám bệnh", "Nghỉ", "Khám bệnh", "Nghỉ"],
    ["", "Nghỉ", "Khám bệnh", "Nghỉ", "Đào tạo", "Khám bệnh", "Nghỉ"],
    ["", "Khám bệnh", "Khám bệnh", "Khám bệnh", "Nghỉ", "Khám bệnh", "Nghỉ"],
    ["Nghỉ", "Nghỉ", "Nghỉ", "Nghỉ", "Nghỉ", "Nghỉ", "Nghỉ"]
];

// Hàm addDataToScheduleTable nhận biến lichLamViec như một đối số
function addDataToScheduleTable(lichLamViec) {
    // Lấy tham chiếu đến tbody của bảng
    var tbody = document.getElementById("lich").getElementsByTagName("tbody")[0];

    // Thêm dữ liệu vào bảng
    for (var i = 0; i < lichLamViec.length; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < lichLamViec[i].length; j++) {
            var cell = document.createElement("td");
            cell.textContent = lichLamViec[i][j];
            cell.classList.add("h");
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }
}

// Gọi hàm và truyền biến lichLamViec vào
addDataToScheduleTable(lichLamViec);