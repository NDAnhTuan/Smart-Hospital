import { managerController } from "../controllers/managerCotroller";
import { doctorController } from "../controllers/doctorController";

var patientRecords = await (new doctorController).getMedicine();
function formatDate(date) {
  var year = date.getFullYear().toString();
  var month = (date.getMonth() + 101).toString().substring(1);
  var day = (date.getDate() + 100).toString().substring(1);
  return month + '/' + day + '/' + year;
}
  
  var patientRecordsElement = document.getElementById("patientRecords");

 
  patientRecords.forEach(function(record) {
    var row = document.createElement("tr");
    var nsx = formatDate(new Date(record.EXP.seconds * 1000));
    var hsd = formatDate(new Date(record.MFG.seconds * 1000));
    row.innerHTML = `
      <td>${record.Name}</td>
      <td>${record.Quantity}</td>
      <td>${record.Strength}</td>
      <td>${record.Price}</td>
      <td>${nsx}</td>
      <td>${hsd}</td>
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
