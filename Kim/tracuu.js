

var doctors = [
    { id: 1, specialty: 'Nhi Khoa', position: 'Giám Đốc', name: 'Dương Ngọc Lam Điền',image :'../Kim/Newimg/womandr.png',info:'PGS - TS - Bác Sĩ' },
    { id: 2, specialty: 'Răng Hàm Mặt', position: 'Phó Giám Đốc', name: 'Hà Văn Khởi' ,image:'../Kim/Newimg/mandr.png',info:'Thạc sĩ - Bác sĩ'},
    { id: 3, specialty: 'Da Liễu', position: 'Bác sĩ cơ bản', name: 'Tống Phi Giang',image:'../Kim/Newimg/mandr.png',info:'Thạc sĩ - Bác sĩ' },
    { id: 4, specialty: 'Tim Mạch', position: 'Bác sĩ cơ bản', name: 'Hà Khắc Nguyên',image:'../Kim/Newimg/mandr.png',info:' Bác sĩ'},
    { id: 5, specialty: 'Tai Mũi Họng', position: 'Bác sĩ chính', name: 'Nguyễn Tuấn Vũ' ,image:'../Kim/Newimg/mandr.png',info:' Tiến sĩ - Bác sĩ'},
    { id: 6, specialty: 'Nội Tiết', position: 'Bác sĩ trưởng khoa', name: 'Vũ Văn Giang' ,image:'../Kim/Newimg/mandr.png',info:' Bác sĩ'},
    { id: 7, specialty: 'Chấn Thương Chỉnh Hình', position: 'Bác sĩ cơ bản', name: 'Nguyễn Quang Huy',image:'../Kim/Newimg/mandr.png',info:' Bác sĩ' },
    { id: 8, specialty: 'Phụ Khoa', position: 'Bác sĩ chuyên khoa', name: 'Nguyễn Hoàng Nguyên',image:'../Kim/Newimg/mandr.png',info:' Bác sĩ' },
    { id: 9, specialty: 'Hô Hấp', position: 'Bác sĩ trưởng khoa', name: 'Tô Ngọc Hân',image:'../Kim/Newimg/womandr.png',info:' Bác sĩ' },
    { id: 10, specialty: 'Thần Kinh', position: 'Trưởng phòng', name: 'Hồ Tấn Phát',image:'../Kim/Newimg/mandr.png',info:' Bác sĩ' },
   { id: 11, specialty: 'Nhi Khoa', position: 'Bác sĩ cơ bản', name: 'Nguyễn Thị Minh Giang',image :'../Kim/Newimg/womandr.png', info:' Bác sĩ'}
];


function timBacSi() {
    var chuyenkhoa = document.getElementById('chuyenkhoa').value;
    var chucvu = document.getElementById('chucvu').value;
    var tenbacsi = document.getElementById('tenbacsi').value;

    var ketqua = document.getElementById('ketqua');
    var results = [];

    doctors.forEach(function(doctor) {

        if (
            (chuyenkhoa === '' || doctor.specialty.toLowerCase() === chuyenkhoa.toLowerCase()) &&
            (chucvu === '' || doctor.position.toLowerCase() === chucvu.toLowerCase()) &&
            (tenbacsi === '' || doctor.name.toLowerCase().includes(tenbacsi.toLowerCase()))
        ) {
            results.push(doctor);
        }
    });

    if (results.length > 0) {
        var resultHTML = '';
        results.forEach(function(result) {
            resultHTML += `
            <div class="doctor-card">
                <img src="${result.image}" alt="${result.name}">
                <h3>${result.name}</h3>
                <p><strong>Chuyên khoa:</strong> ${result.specialty}</p>
                <p><strong>Chức vụ:</strong> ${result.position}</p>
                <p>${result.info}</p>
            </div>
        `;
        });
        ketqua.innerHTML = resultHTML;
    } else {
        ketqua.innerHTML = 'Không tìm thấy bác sĩ phù hợp.';
    }
}