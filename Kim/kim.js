// appointment

function acceptPatient(name) {
    
    var patientInfo = getPatientInfo(name);

    var patient = document.createElement("li");
    patient.innerHTML = `
        <strong>Tên bệnh nhân:</strong> ${patientInfo.name}<br>
        <strong>Mã bệnh ICD 10:</strong> ${patientInfo.icdCode}<br>
        <strong>Ngày tháng năm sinh:</strong> ${patientInfo.dob}<br>
        <strong>Giới tính:</strong> ${patientInfo.gender}<br>
        <strong>Mã số BHYT:</strong> ${patientInfo.bhytCode}<br>
        <strong>Địa chỉ nhà:</strong> ${patientInfo.address}<br>
        <strong>Số điện thoại:</strong> ${patientInfo.phone}<br>
    `;
    document.getElementById("accepted-list").appendChild(patient);

    var patientItem = document.querySelector("#patient-list li:first-of-type");
    patientItem.remove();
}

function getPatientInfo(name) {
 
    return {
        name: name,
        icdCode: "XYZ456",
        dob: "ABC123",
        gender: "nam",
        bhytCode: "987654321",
        address: "Khu B DDHQG",
        phone: "0987654321"
    };
}
   // end


   // tim bac si
   function timBacSi() {
    var chuyenkhoa = document.getElementById('chuyenkhoa').value;
    var chucvu = document.getElementById('chucvu').value;
    var tenbacsi = document.getElementById('tenbacsi').value;
  
    var ketqua = document.getElementById('ketqua');
    ketqua.innerHTML = `Tìm bác sĩ có chuyên khoa ${chuyenkhoa}, chức vụ ${chucvu}, tên là ${tenbacsi}`;
  }

   // end