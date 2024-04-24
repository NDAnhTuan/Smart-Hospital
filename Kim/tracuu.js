

var doctors = [
    { id: 1, specialty: 'Nhi Khoa', position: 'Giám Đốc', name: 'Minh Trương',image :'../Kim/Newimg/666.jpg',info:'ROT-BK' },
    { id: 2, specialty: 'Răng Hàm Mặt', position: 'Phó Giám Đốc', name: 'Nguyễn Hoàng Nguyên' ,image:'../Kim/Newimg/222.jpg'},
    { id: 3, specialty: 'Da Liễu', position: 'Bác sĩ cơ bản', name: 'Cristian Messi',image:'../Kim/Newimg/222.jpg' },
    { id: 4, specialty: 'Tim Mạch', position: 'Bác sĩ cơ bản', name: 'Giải Tích 2',image:'../Kim/Newimg/222.jpg'},
    { id: 5, specialty: 'Tai Mũi Họng', position: 'Bác sĩ chính', name: 'Giải Tích 1' ,image:'../Kim/Newimg/222.jpg'},
    { id: 6, specialty: 'Nội Tiết', position: 'Bác sĩ trưởng', name: 'Lập trình nâng cao' ,image:'../Kim/Newimg/6.jpeg'},
    { id: 7, specialty: 'Chấn Thương Chỉnh Hình', position: 'Bác sĩ cơ bản', name: 'Nguyễn Quang Huy',image:'../Kim/Newimg/4.jpg' },
    { id: 8, specialty: 'Phụ Khoa', position: 'Bác sĩ chuyên khoa', name: 'Anh chịu thua em rồi',image:'../Kim/Newimg/333.jpg' },
    { id: 9, specialty: 'Hô Hấp', position: 'Bác sĩ trưởng khoa', name: 'DCOD GANGZ',image:'../Kim/Newimg/222.jpg' },
    { id: 10, specialty: 'Thần Kinh', position: 'Trưởng phòng', name: 'GLIMPSE OF US',image:'../Kim/Newimg/222.jpg' },
   { id: 11, specialty: 'Nhi Khoa', position: 'Giám Đốc', name: 'Minh',image :'../Kim/Newimg/doctor.png', }
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