import { patientController } from "../controllers/patientController"
const listDoctor = document.querySelector('.Doctors .row-container')

function formatDate(date) {
    var year = date.getFullYear().toString();
    var month = (date.getMonth() + 101).toString().substring(1);
    var day = (date.getDate() + 100).toString().substring(1);
    return month + '/' + day + '/' + year;
}

async function getDataFromPublicAPI() {
    const results = await (new patientController).viewDoctors()
    console.log(results)
    listDoctor.innerHTML = ''
    results.forEach( (result) => {
        const ulItem = document.createElement('ul')
        var date = new Date(result.DateOfBirth.seconds * 1000);
        var dateOfBirth = formatDate(date);
        ulItem.innerHTML += `
            <li class="avatar" style=" background-image: url(https://static.vecteezy.com/system/resources/previews/005/520/145/original/cartoon-drawing-of-a-doctor-vector.jpg);">
            <p>
                <span></span>
                Họ tên: ${result.FirstName} ${result.LastName}

                <span>Ngày sinh: ${dateOfBirth}</span>
                <span>Khoa: ${result.Department}</span>
                <span>Email: ${result.Email}</span>
                <span>Phone: ${result.Phone}</span>
            </p>
            </li>
            
        </ul>
        `
        listDoctor.appendChild(ulItem)
    })
}
getDataFromPublicAPI()


