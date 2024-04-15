const temp = [
    {
        ID: 1,
        Age: 50,
        Name: 'nguh ngu foo',
        Birth_Day: '1989-11-21',
        Sex: 'Male',
        Email: 'havhc@gmail.com',
        Phone: '0183848393',
        Degree: 'ThS.BS',
        Identity_number: '202939484',
        National: 'Việt Nam',
        Address: 'Hồ Chí Minh',
        Department: 'Nội Sản',
        Position: 'Phó Giám Đốc',
        Status: 'Active',
        Image: '../image/Image.png'
    },
    {
        ID: 2,
        Age: 49,
        Name: 'ngah em ta kaf',
        Birth_day: '1999-01-01',
        Sex: 'Female',
        Email: 'hagtryc@gmail.com',
        Phone: '0564878544',
        Degree: 'BS',
        Identity_number: '86856845',
        National: 'Việt Nam',
        Address: 'Hà Nội',
        Department: 'Tim Mạch',
        Position: 'Giám Đốc',
        Status: 'Active',
        Image:'../image/Image.png'
    },
    {
        ID: 3,
        Age: 70,
        Name: 'ghcung cha fucbg ssa',
        Birth_day: '2000-06-29',
        Sex: 'Male',
        Email: 'hhcunghc@gmail.com',
        Phone: '0667875868',
        Degree: "TS",
        Identity_number: '6094095645',
        National: 'Ustralia',
        Address: 'Hồ Chí Minh',
        Department: 'Điều dưỡng',
        Position: 'Trưởng Khoa',
        Status: 'Retired',
        Image:'../image/Image.png'
    }
]

//ktra xem login rồi mới được xem
// function checklogin(){}


//
const setImg = document.querySelector('#info-summary img')
const text = document.querySelectorAll('#info-summary .text p')

function show_Info_Summary(){
    let id = 0;
    setImg.src = temp[id].Image

    text[0].innerHTML = temp[id].Degree + ': ' + temp[id].Name
    text[1].innerHTML = temp[id].Position + ' - Khoa ' + temp[id].Department
}
show_Info_Summary()