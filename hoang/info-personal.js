// dữ liệu dạng json đã được đính kèm ở file js summary

const tables = document.querySelectorAll('#info-personal .thongtin');

//tìm id hợp
//todo




//hiển thị data
function showInfo(){
    var id = 2;
    let elements0 = tables[0].querySelectorAll('input, select');
    let elements1 = tables[1].querySelectorAll('input, select');
    elements0[0].value = temp[id].Name
    elements0[1].value = temp[id].Birth_day
    elements0[2].value = temp[id].Sex
    elements0[3].value = temp[id].Email
    elements0[4].value = temp[id].Phone
    elements0[5].value = temp[id].Degree
    elements1[0].value = temp[id].Identity_number
    elements1[1].value = temp[id].National
    elements1[2].value = temp[id].Address
    elements1[3].value = temp[id].Department
    elements1[4].value = temp[id].Position 
    elements1[5].value = temp[id].Status
}
showInfo()