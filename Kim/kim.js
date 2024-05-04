// appointment

   // end


   // tim bac si
  //  function timBacSi() {
  //   var chuyenkhoa = document.getElementById('chuyenkhoa').value;
  //   var chucvu = document.getElementById('chucvu').value;
  //   var tenbacsi = document.getElementById('tenbacsi').value;
  
  //   var ketqua = document.getElementById('ketqua');
  //   ketqua.innerHTML = `Tìm bác sĩ có chuyên khoa ${chuyenkhoa}, chức vụ ${chucvu}, tên là ${tenbacsi}`;
  // }





  // Dữ liệu các bản ghi của bệnh nhân
 var patientRecords = [
    {
        date: new Date("8 April 2022 at 07:00:00 UTC+7"),
        symptoms: "hi", 
        diagnosis: "hi",
        doctorId: "3goKrkzQIqSCoP1t64kNieRh8AG2",
        patientId:"TpRNzUISBRITgWOzawIZ"
    },
    {
      date: new Date("18 March 2024 at 00:00:00 UTC+7"),
      symptoms: "Sore throat, coughing, fever",
      diagnosis: "Common cold",
      doctorId: "gxPxbnWm4Qfa1LjNnX0FwV8tlJq1",
      patientId: "3fm3mImSmW01mOTxZyI8"
    },
    {
      date: new Date("April 12, 2022 09:45:00 UTC+7"),
      symptoms: "Symptoms 3",
      diagnosis: "Diagnosis 3",
      doctorId: "DoctorID3",
      patientId: "PatientID3"
    },
    {
      date: new Date("April 15, 2022 10:15:00 UTC+7"),
      symptoms: "Symptoms 4",
      diagnosis: "Diagnosis 4",
      doctorId: "DoctorID4",
      patientId: "PatientID4"
    },
    {
      date: new Date("April 18, 2022 11:00:00 UTC+7"),
      symptoms: "Symptoms 5",
      diagnosis: "Diagnosis 5",
      doctorId: "DoctorID5",
      patientId: "PatientID5"
    },
    {
      date: new Date("April 20, 2022 13:20:00 UTC+7"),
      symptoms: "Symptoms 6",
      diagnosis: "Diagnosis 6",
      doctorId: "DoctorID6",
      patientId: "PatientID6"
    },
    {
      date: new Date("April 22, 2022 14:45:00 UTC+7"),
      symptoms: "Symptoms 7",
      diagnosis: "Diagnosis 7",
      doctorId: "DoctorID7",
      patientId: "PatientID7"
    },
    {
      date: new Date("April 25, 2022 16:30:00 UTC+7"),
      symptoms: "Symptoms 8",
      diagnosis: "Diagnosis 8",
      doctorId: "DoctorID8",
      patientId: "PatientID8"
    },
    {
      date: new Date("April 28, 2022 17:50:00 UTC+7"),
      symptoms: "Symptoms 9",
      diagnosis: "Diagnosis 9",
      doctorId: "DoctorID9",
      patientId: "PatientID9"
    },
    {
      date: new Date("April 30, 2022 19:15:00 UTC+7"),
      symptoms: "Symptoms 10",
      diagnosis: "Diagnosis 10",
      doctorId: "DoctorID10",
      patientId: "PatientID10"
    },
    {
        date: new Date("April 28, 2022 17:50:00 UTC+7"),
        symptoms: "Symptoms 9",
        diagnosis: "Diagnosis 9",
        doctorId: "DoctorID9",
        patientId: "PatientID9"
      },
      {
        date: new Date("April 30, 2022 19:15:00 UTC+7"),
        symptoms: "Symptoms 10",
        diagnosis: "Diagnosis 10",
        doctorId: "DoctorID10",
        patientId: "PatientID10"
      },
      {
        date: new Date("18 March 2024 at 00:00:00 UTC+7"),
        symptoms: "Sore throat, coughing, fever",
        diagnosis: "Common cold",
        doctorId: "gxPxbnWm4Qfa1LjNnX0FwV8tlJq1",
        patientId: "3fm3mImSmW01mOTxZyI8"
      },
      {
        date: new Date("April 12, 2022 09:45:00 UTC+7"),
        symptoms: "Symptoms 3",
        diagnosis: "Diagnosis 3",
        doctorId: "DoctorID3",
        patientId: "PatientID3"
      },
      {
        date: new Date("April 15, 2022 10:15:00 UTC+7"),
        symptoms: "Symptoms 4",
        diagnosis: "Diagnosis 4",
        doctorId: "DoctorID4",
        patientId: "PatientID4"
      },
      {
        date: new Date("April 18, 2022 11:00:00 UTC+7"),
        symptoms: "Symptoms 5",
        diagnosis: "Diagnosis 5",
        doctorId: "DoctorID5",
        patientId: "PatientID5"
      },
      {
        date: new Date("April 20, 2022 13:20:00 UTC+7"),
        symptoms: "Symptoms 6",
        diagnosis: "Diagnosis 6",
        doctorId: "DoctorID6",
        patientId: "PatientID6"
      },
      {
        date: new Date("April 22, 2022 14:45:00 UTC+7"),
        symptoms: "Symptoms 7",
        diagnosis: "Diagnosis 7",
        doctorId: "DoctorID7",
        patientId: "PatientID7"
      },
      {
        date: new Date("April 25, 2022 16:30:00 UTC+7"),
        symptoms: "Symptoms 8",
        diagnosis: "Diagnosis 8",
        doctorId: "DoctorID8",
        patientId: "PatientID8"
      },
      {
        date: new Date("18 March 2024 at 00:00:00 UTC+7"),
        symptoms: "Sore throat, coughing, fever",
        diagnosis: "Common cold",
        doctorId: "gxPxbnWm4Qfa1LjNnX0FwV8tlJq1",
        patientId: "3fm3mImSmW01mOTxZyI8"
      },
      {
        date: new Date("April 12, 2022 09:45:00 UTC+7"),
        symptoms: "Symptoms 3",
        diagnosis: "Diagnosis 3",
        doctorId: "DoctorID3",
        patientId: "PatientID3"
      },
      {
        date: new Date("April 15, 2022 10:15:00 UTC+7"),
        symptoms: "Symptoms 4",
        diagnosis: "Diagnosis 4",
        doctorId: "DoctorID4",
        patientId: "PatientID4"
      },
      {
        date: new Date("April 18, 2022 11:00:00 UTC+7"),
        symptoms: "Symptoms 5",
        diagnosis: "Diagnosis 5",
        doctorId: "DoctorID5",
        patientId: "PatientID5"
      },
      {
        date: new Date("April 20, 2022 13:20:00 UTC+7"),
        symptoms: "Symptoms 6",
        diagnosis: "Diagnosis 6",
        doctorId: "DoctorID6",
        patientId: "PatientID6"
      },
      {
        date: new Date("April 22, 2022 14:45:00 UTC+7"),
        symptoms: "Symptoms 7",
        diagnosis: "Diagnosis 7",
        doctorId: "DoctorID7",
        patientId: "PatientID7"
      },
      {
        date: new Date("April 25, 2022 16:30:00 UTC+7"),
        symptoms: "Symptoms 8",
        diagnosis: "Diagnosis 8",
        doctorId: "DoctorID8",
        patientId: "PatientID8"
      },
      {
        date: new Date("18 March 2024 at 00:00:00 UTC+7"),
        symptoms: "Sore throat, coughing, fever",
        diagnosis: "Common cold",
        doctorId: "gxPxbnWm4Qfa1LjNnX0FwV8tlJq1",
        patientId: "3fm3mImSmW01mOTxZyI8"
      },
      {
        date: new Date("April 12, 2022 09:45:00 UTC+7"),
        symptoms: "Symptoms 3",
        diagnosis: "Diagnosis 3",
        doctorId: "DoctorID3",
        patientId: "PatientID3"
      },
      {
        date: new Date("April 15, 2022 10:15:00 UTC+7"),
        symptoms: "Symptoms 4",
        diagnosis: "Diagnosis 4",
        doctorId: "DoctorID4",
        patientId: "PatientID4"
      },
      {
        date: new Date("April 18, 2022 11:00:00 UTC+7"),
        symptoms: "Symptoms 5",
        diagnosis: "Diagnosis 5",
        doctorId: "DoctorID5",
        patientId: "PatientID5"
      },
      {
        date: new Date("April 20, 2022 13:20:00 UTC+7"),
        symptoms: "Symptoms 6",
        diagnosis: "Diagnosis 6",
        doctorId: "DoctorID6",
        patientId: "PatientID6"
      },
      {
        date: new Date("April 22, 2022 14:45:00 UTC+7"),
        symptoms: "Symptoms 7",
        diagnosis: "Diagnosis 7",
        doctorId: "DoctorID7",
        patientId: "PatientID7"
      },
      {
        date: new Date("April 25, 2022 16:30:00 UTC+7"),
        symptoms: "Symptoms 8",
        diagnosis: "Diagnosis 8",
        doctorId: "DoctorID8",
        patientId: "PatientID8"
      }
  ];

  

  
  var patientRecordsElement = document.getElementById("patientRecords");

 
  patientRecords.forEach(function(record) {
    var row = document.createElement("tr");
    row.innerHTML = `
      <td>${record.date.toUTCString()}</td>
      <td>${record.symptoms}</td>
      <td>${record.diagnosis}</td>
      <td>${record.doctorId}</td>
      <td>${record.patientId}</td>
    `;
    patientRecordsElement.appendChild(row);
  });


  function countPatients() {
    const table = document.getElementById("patientRecords");
    const rowCount = table.getElementsByTagName("tr").length ; 
    return rowCount;
  }

  // Hàm hiển thị tổng số bệnh nhân
  function displayPatientCount() {
    const totalCount = countPatients();
    alert("Tổng số bệnh nhân: " + totalCount);
  }

  // Gọi hàm hiển thị tổng số bệnh nhân khi trang được tải
  window.onload = displayPatientCount;


  function searchRecords() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("patientRecords");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        for (var j = 0; j < td.length; j++) {
            var cell = td[j];
            if (cell) {
                txtValue = cell.textContent || cell.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                    break;
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
}

document.getElementById("searchInput").addEventListener("keyup", searchRecords);








