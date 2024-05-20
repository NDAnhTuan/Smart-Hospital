var patientRecords = [
    {
        ten: "Losartan",
        hl: "50 mg",
        SL: 30,
        Drname: "Dương Ngọc Lam Điền",
        Time: new Date("2022-08-05T14:20:00+07:00")
      },
      {
        ten: "Atorvastatin",
        hl: "10 mg",
        SL: "60",
        Drname: "Nguyễn Thị Minh Giang",
        Time: new Date("2022-09-12T10:45:00+07:00")
      },
      {
        ten: "Warfarin",
        hl: "5 mg",
        SL: "90",
        Drname: "Tô Ngọc Hân",
        Time: new Date("2022-10-18T08:00:00+07:00")
      },
      {
        ten: "Metoprolol",
        hl: "25 mg",
        SL: "120",
        Drname: "Vũ Văn Giang",
        Time: new Date("2022-11-25T09:15:00+07:00")
      },
      {
        ten: "Clopidogrel",
        hl: "75 mg",
        SL: "40",
        Drname: "Vũ Văn Giang",
        Time: new Date("2022-12-30T12:30:00+07:00")
      },
      {
        ten: "Prednisone",
        hl: "10 mg",
        SL: "50",
        Drname: "Tô Ngọc Hân",
        Time: new Date("2023-01-05T15:00:00+07:00")
      },
      
      {ten: "Aspirin",
      hl: "500 mg",
      SL: "100",
      Drname: "Hồ Tấn Phát",
      Time: new Date("2022-04-08T07:00:00+07:00")
    },
    {
      ten: "Paracetamol",
      hl: "650 mg",
      SL: "50",
      Drname: "Nguyễn Tuấn Vũ",
      Time: new Date("2022-05-10T09:00:00+07:00")
    },
    {
      ten: "Ibuprofen",
      hl: "400 mg",
      SL: "80",
      Drname: "Tống Phi Giang",
      Time: new Date("2022-05-25T11:30:00+07:00")
    },
    {
      ten: "Penicillin",
      hl: "500 mg",
      SL: "30",
      Drname: "Hồ Tấn Phát",
      Time: new Date("2022-06-20T11:45:00+07:00")
    },
    {
      ten: "Simvastatin",
      hl: "20 mg",
      SL: "60",
      Drname: "Hà Khắc Nguyên",
      Time: new Date("2022-07-15T10:00:00+07:00")
    },
    {
      ten: "Metformin",
      hl: "500 mg",
      SL: "90",
      Drname: "Sarah Thompson",
      Time: new Date("2022-03-30T08:30:00+07:00")
    },
    {
      ten: "Lisinopril",
      hl: "10 mg",
      SL: 30,
      Drname: "Dương Ngọc Lam Điền",
      Time: new Date("2023-01-15T09:00:00+07:00")
    },
    {
      ten: "Amlodipine",
      hl: "5 mg",
      SL: 60,
      Drname: "Nguyễn Thị Minh GIang",
      Time: new Date("2023-02-20T10:30:00+07:00")
    },
    {
      ten: "Hydrochlorothiazide",
      hl: "25 mg",
      SL: 90,
      Drname: "Tô Ngọc Hân",
      Time: new Date("2023-03-10T08:45:00+07:00")
    },
    {
      ten: "Metformin",
      hl: "500 mg",
      SL: 120,
      Drname: "Hà Văn Khởi",
      Time: new Date("2023-04-05T07:30:00+07:00")
    },
    {
      ten: "Simvastatin",
      hl: "20 mg",
      SL: 30,
      Drname: "Dương Ngọc Lam Điền",
      Time: new Date("2023-05-12T11:00:00+07:00")
    },
    {
      ten: "Furosemide",
      hl: "40 mg",
      SL: 60,
      Drname: "Vũ Văn Giang",
      Time: new Date("2023-06-25T13:15:00+07:00")
    },
    {
      ten: "Gabapentin",
      hl: "300 mg",
      SL: 90,
      Drname: "Nguyễn Tuấn vũ",
      Time: new Date("2023-07-19T12:00:00+07:00")
    },
    {
      ten: "Levothyroxine",
      hl: "50 mcg",
      SL: 120,
      Drname: "Nguyễn Quang Huy",
      Time: new Date("2023-08-30T09:45:00+07:00")
    },
    {
      ten: "Omeprazole",
      hl: "20 mg",
      SL: 30,
      Drname: "Dương Ngọc Lam Điền",
      Time: new Date("2023-09-14T10:15:00+07:00")
    },
    {
      ten: "Clopidogrel",
      hl: "75 mg",
      SL: 60,
      Drname: "Nguyễn Hoàng Nguyên",
      Time: new Date("2023-10-22T08:00:00+07:00")
    },
    {
      ten: "Prednisone",
      hl: "10 mg",
      SL: 90,
      Drname: "Nguyễn Thị Minh Giang",
      Time: new Date("2023-11-06T07:15:00+07:00")
    },
    {
      ten: "Amoxicillin",
      hl: "500 mg",
      SL: 120,
      Drname: "Tô Ngọc Hân",
      Time: new Date("2023-12-01T11:30:00+07:00")
    },
    {
      ten: "Citalopram",
      hl: "20 mg",
      SL: 30,
      Drname: "Tô Ngọc Hân",
      Time: new Date("2023-12-20T12:45:00+07:00")
    },
    {
      ten: "Tramadol",
      hl: "50 mg",
      SL: 60,
      Drname: "Hà Khắc Nguyên",
      Time: new Date("2024-01-08T14:00:00+07:00")
    },
    {
      ten: "Fluoxetine",
      hl: "20 mg",
      SL: 90,
      Drname: "Hà Văn Khởi",
      Time: new Date("2024-02-18T13:30:00+07:00")
    },
    {
      ten: "Lorazepam",
      hl: "1 mg",
      SL: 120,
      Drname: "Tống Phi Giang",
      Time: new Date("2024-03-25T15:00:00+07:00")
    }
   
  ];

  
  var patientRecordsElement = document.getElementById("patientRecords");

 
  patientRecords.forEach(function(record) {
    var row = document.createElement("tr");
    row.innerHTML = `
      <td>${record.ten}</td>
      <td>${record.hl}</td>
      <td>${record.SL}</td>
      <td>${record.Drname}</td>
      <td>${record.Time.toUTCString()}</td>
    `;
    patientRecordsElement.appendChild(row);
  });


  function countPatients() {
    const table = document.getElementById("patientRecords");
    const rowCount = table.getElementsByTagName("tr").length ; 
    return rowCount;
  }

  function displayPatientCount() {
    const totalCount = countPatients();
    alert("Tổng số bệnh nhân: " + totalCount);
  }

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
