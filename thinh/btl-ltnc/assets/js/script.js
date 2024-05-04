// document.addEventListener("DOMContentLoaded", function() {
//     var myButton = document.getElementById("mybutton");
//     var myLink = document.getElementById("info");

//     myButton.addEventListener("click", function(event) {
//         event.stopPropagation(); // Ngăn chặn sự kiện click trên nút button lan truyền đến body hoặc document
//         if (myLink.style.display === "none") {
//             myLink.style.display = "block"; // Hiển thị link nếu đang bị ẩn
//         } else {
//             myLink.style.display = "none"; // Ẩn link nếu đang hiển thị
//         }
//     });

//     document.addEventListener("click", function(event) {
//         if (event.target !== myButton && myLink.style.display !== "none") {
//             myLink.style.display = "none"; // Ẩn link khi click vào bất kỳ nơi nào ngoài nút button
//         }
//     });
// });