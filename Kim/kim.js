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
        date: new Date("March 18, 2024 00:00:00 UTC+7"),
    symptoms: "Đau đầu, buồn nôn",
    diagnosis: "Cảm cúm",
    doctorId: "gxPxbnWm4Qfa1LjNnX0FwV8tlJq1",
    patientId: "3fm3mImSmW01mOTxZyI8"
  },
  {
    date: new Date("March 22, 2024 14:00:00 UTC+7"),
    symptoms: "Ho, sốt",
    diagnosis: "Viêm họng",
    doctorId: "k5Vx4dNz7YjQ2MtPmW9LxT7bJc3",
    patientId: "5jn7pJnKmU92mQTzWyJ9"
  },
  {
    date: new Date("March 25, 2024 10:30:00 UTC+7"),
    symptoms: "Đau bụng, tiêu chảy",
    diagnosis: "Nhiễm trùng đường ruột",
    doctorId: "q8Tz5lNx6HiU1LpPnV8ZyX4cLj2",
    patientId: "8lm8qLkHmX03nRTuZwI0"
  },
  {
    date: new Date("March 30, 2024 09:00:00 UTC+7"),
    symptoms: "Đau ngực, khó thở",
    diagnosis: "Viêm phổi",
    doctorId: "d2Sx9mKy8ZaU3WlPnJ7YkR5dMh4",
    patientId: "1kn1vLnLmX05oUTxZvI1"
  },
  {
    date: new Date("April 2, 2024 15:45:00 UTC+7"),
    symptoms: "Ngứa, phát ban",
    diagnosis: "Dị ứng",
    doctorId: "r4Hx6oNy7VcT2XoQlK8YwR6fJp5",
    patientId: "4jm4wJoMmY07pVUxZvI2"
  },
  {
    date: new Date("April 5, 2024 08:30:00 UTC+7"),
    symptoms: "Chóng mặt, mất thăng bằng",
    diagnosis: "Huyết áp thấp",
    doctorId: "l3Qx5pMz9ZbT1WqPnL9XzR7eKj6",
    patientId: "7kp7tLmNmX09qWTxZzI3"
  },
  {
    date: new Date("April 10, 2024 11:00:00 UTC+7"),
    symptoms: "Đau lưng, mệt mỏi",
    diagnosis: "Thoát vị đĩa đệm",
    doctorId: "m6Xx7rNw8YaS2ZoRmM9YxT8hLn7",
    patientId: "9np9vLpOmX01sXUxZxI4"
  },
  {
    date: new Date("April 15, 2024 13:15:00 UTC+7"),
    symptoms: "Đau mắt, nhìn mờ",
    diagnosis: "Viêm kết mạc",
    doctorId: "p1Zx8sNx7UbS3YoRnN8YwU9iKm8",
    patientId: "2oq2xMoNmX03uYTxZyI5"
  },
  {
    date: new Date("April 18, 2024 16:00:00 UTC+7"),
    symptoms: "Sưng đau khớp, sốt",
    diagnosis: "Viêm khớp",
    doctorId: "t7Jx6uMz9VcR4ZpSnO7XxV0jNl9",
    patientId: "5rs5zMpPmX05wZTxZzI6"
  },
  {
    date: new Date("April 20, 2024 07:45:00 UTC+7"),
    symptoms: "Khó tiêu, đầy bụng",
    diagnosis: "Rối loạn tiêu hóa",
    doctorId: "v8Lx5tNy6WbU5XoPlP6YyW1kOq0",
    patientId: "8tw8xMrPmX07yUTxZyI7"
  },
  {
    date: new Date("April 25, 2024 09:30:00 UTC+7"),
    symptoms: "Sốt cao, đau cơ",
    diagnosis: "Sốt xuất huyết",
    doctorId: "z9Mx4vNz8XcS6YoQlQ7ZzX2lPr1",
    patientId: "1ux1yNsQmX09zVTxZxI8"
  },
  {
    date: new Date("April 28, 2024 12:00:00 UTC+7"),
    symptoms: "Đau bụng, buồn nôn",
    diagnosis: "Viêm dạ dày",
    doctorId: "y2Wx5wNy9YaT7XpRmR6YyU3mQs2",
    patientId: "4vy4zNtRmX01aWTyZzI9"
  },
  {
    date: new Date("May 2, 2024 14:45:00 UTC+7"),
    symptoms: "Mệt mỏi, giảm cân",
    diagnosis: "Thiếu máu",
    doctorId: "a5Qx6xNz7ZbR8YqPnS5ZxV4nTr3",
    patientId: "7xz7aOvSmX03bYUzZyJ0"
  },
  {
    date: new Date("May 5, 2024 10:15:00 UTC+7"),
    symptoms: "Đau vai, cứng cổ",
    diagnosis: "Viêm cơ",
    doctorId: "c1Ux7yNx8XcR9ZoPlT4YxW5oUs4",
    patientId: "2yz2bOxRmX05dXVyZxJ1"
  },
  {
    date: new Date("May 10, 2024 08:00:00 UTC+7"),
    symptoms: "Khó thở, thở khò khè",
    diagnosis: "Hen suyễn",
    doctorId: "f3Wx8zNz9WbT1XoPmU3YyX6pVs5",
    patientId: "5bz5cOyQmX07eYWyZyJ2"
  },
  {
    date: new Date("May 15, 2024 09:45:00 UTC+7"),
    symptoms: "Đau đầu, sốt",
    diagnosis: "Viêm màng não",
    doctorId: "h6Yx9aNw7VbR2XoQnV2ZzX7qWt6",
    patientId: "8dz8dPzRmX09gZXzZxJ3"
  },
  {
    date: new Date("May 20, 2024 11:30:00 UTC+7"),
    symptoms: "Đau khớp, mệt mỏi",
    diagnosis: "Lupus ban đỏ",
    doctorId: "j7Zx5bNz8XaT3XoRnW1YyU8rXt7",
    patientId: "1ez1ePzSmX01hZUyZyJ4"
  },
  {
    date: new Date("May 25, 2024 13:00:00 UTC+7"),
    symptoms: "Khó tiểu, đau lưng",
    diagnosis: "Sỏi thận",
    doctorId: "l8Xx6cNy9ZaR4WpPoX0ZzV9sYu8",
    patientId: "4fz4fQzQmX03jZWyZxJ5"
  },
  {
    date: new Date("May 30, 2024 15:45:00 UTC+7"),
    symptoms: "Đau đầu, hoa mắt",
    diagnosis: "Cao huyết áp",
    doctorId: "n9Yx7dNw8WbT5XoQpY9YyW0tZv9",
    patientId: "7gz7gRzRmX05kZXzZyJ6"
  },
  {
    date: new Date("June 5, 2024 10:30:00 UTC+7"),
    symptoms: "Mất ngủ, căng thẳng",
    diagnosis: "Rối loạn lo âu",
    doctorId: "p2Zx8eNz7VaT6XoRnZ8ZxX1uAu0",
    patientId: "2hz2hSzRmX07lZWyZzJ7"
  },
  {
    date: new Date("June 10, 2024 12:15:00 UTC+7"),
    symptoms: "Đau họng, sốt",
    diagnosis: "Viêm amidan",
    doctorId: "r4Qx9fNw9XaR7XoQoX7YyV2vBu1",
    patientId: "5iz5iTzQmX01nZXzZxJ8"
  },
  {
    date: new Date("June 15, 2024 14:00:00 UTC+7"),
    symptoms: "Sốt, ho khan",
    diagnosis: "Cúm",
    doctorId: "t4Zx6gNz9WbS8XoPnY6ZxW3wCv2",
    patientId: "8jz8jUzRmX03pZYzZyJ9"
  },
  {
    date: new Date("June 20, 2024 08:45:00 UTC+7"),
    symptoms: "Đau tai, sốt",
    diagnosis: "Viêm tai giữa",
    doctorId: "v5Yx7hNx8XaT9XoQnZ5YyX4xDv3",
    patientId: "1kz1kVxRmX05rZWyZzJ0"
  },
  {
    date: new Date("June 25, 2024 10:30:00 UTC+7"),
    symptoms: "Đau đầu, mờ mắt",
    diagnosis: "Thiên đầu thống",
    doctorId: "x6Zx8iNz7WbS1XoPoY4ZxY5yEv4",
    patientId: "4lz4lWzQmX07sZXzZxJ1"
  },
  {
    date: new Date("June 30, 2024 12:15:00 UTC+7"),
    symptoms: "Buồn nôn, đau bụng",
    diagnosis: "Viêm ruột",
    doctorId: "z7Yx9jNy8XaT2XoQpZ3YyX6zFu5",
    patientId: "7mz7mXzRmX01uZWyZyJ2"
  },
  {
    date: new Date("July 5, 2024 14:00:00 UTC+7"),
    symptoms: "Chóng mặt, buồn nôn",
    diagnosis: "Rối loạn tiền đình",
    doctorId: "a8Zx6kNz9WbR3XoPnY2ZxY7aGu6",
    patientId: "2nz2nYzQmX03vZXzZxJ3"
  },
  {
    date: new Date("July 10, 2024 09:45:00 UTC+7"),
    symptoms: "Sưng tấy, đau nhức",
    diagnosis: "Viêm khớp dạng thấp",
    doctorId: "c9Yx7lNy8XaT4XoQoZ1YyX8bHv7",
    patientId: "5oz5oZzRmX05xZYyZyJ4"
  },
  {
    date: new Date("July 15, 2024 11:30:00 UTC+7"),
    symptoms: "Khó thở, mệt mỏi",
    diagnosis: "Suy tim",
    doctorId: "e1Zx8mNz7WbS5XoPnY0ZxY9cIv8",
    patientId: "8pz8pZzRmX07yZWzZxJ5"
  },
  {
    date: new Date("July 20, 2024 13:15:00 UTC+7"),
    symptoms: "Ngứa, mẩn đỏ",
    diagnosis: "Chàm",
    doctorId: "g2Yx9nNy8XaT6XoQnZ9YyZ0dJw9",
    patientId: "1qz1qXzRmX01aZYyZyJ6"
  },
  {
    date: new Date("July 25, 2024 08:00:00 UTC+7"),
    symptoms: "Sốt, đau họng",
    diagnosis: "Viêm họng cấp",
    doctorId: "i3Zx6oNz9WbR7XoPoY8ZxY1eKw0",
    patientId: "4rz4rZzQmX03bZXzZxJ7"
  },
  {
    date: new Date("July 30, 2024 10:45:00 UTC+7"),
    symptoms: "Đau ngực, khó thở",
    diagnosis: "Nhồi máu cơ tim",
    doctorId: "k4Yx7pNy8XaT8XoQoZ7YyX2fLv1",
    patientId: "7sz7sZzRmX05dZYyZyJ8"
  },
  {
    date: new Date("August 5, 2024 12:30:00 UTC+7"),
    symptoms: "Đau bụng, tiêu chảy",
    diagnosis: "Rối loạn tiêu hóa",
    doctorId: "m5Zx8qNz7WbR9XoPnY6ZxY3gMw2",
    patientId: "2uz2uZzQmX07fZYzZxJ9"
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








