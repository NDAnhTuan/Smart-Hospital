import { patientController } from "../controllers/patientController"
const listDoctor = document.querySelector('.Doctors .row-container')


async function getDataFromPublicAPI() {
    const responseAPI = await fetch('https://randomuser.me/api?results=20')
    const results = await (new patientController).viewDoctors()
    // responseAPI.json()
    console.log(results)
    listDoctor.innerHTML = ''
    // for(let i=3; i < results.length; i+=3){
    results.forEach( (result) => {
        const ulItem = document.createElement('ul')
        ulItem.innerHTML += `
            <li class="avatar" style=" background-image: url();">
            <p>
                <span></span>
                Họ tên: ${result.FirstName} ${result.LastName}
                <span>Khoa: ${result.Department}</span>
                <span>Email: ${result.Email}</span>
            </p>
            </li>
            
        </ul>
        `
        listDoctor.appendChild(ulItem)
    // }
    })
}
getDataFromPublicAPI()


