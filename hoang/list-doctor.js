const listDoctor = document.querySelector('.Doctors .row-container')


async function getDataFromPublicAPI() {
    const responseAPI = await fetch('https://randomuser.me/api?results=20')
    const {results} = await responseAPI.json()
    listDoctor.innerHTML = ''
    for(let i=3; i < results.length; i+=3){
        const ulItem = document.createElement('ul')
        ulItem.innerHTML = `
            <li class="avatar" style=" background-image: url(${results[i-3].picture.large});">
            <p>
                <span>${results[i-3].location.city}</span>
                ${results[i-3].name.title}.${results[i-3].name.first} ${results[i-3].name.last}
                <span>Khoa ${results[i-3].email}</span>
                <span>${results[i-3].location.city}</span>
            </p>
            </li>
            <li class="avatar" style=" background-image: url(${results[i-2].picture.large});">
            <p>
                <span>${results[i-2].location.city}</span>
                ${results[i-2].name.title}.${results[i-2].name.first} ${results[i-2].name.last}
                <span>Khoa ${results[i-2].email}</span>
                <span>${results[i-2].location.city}</span>
            </p>
            </li>
            <li class="avatar" style=" background-image: url(${results[i-1].picture.large});">
            <p>
                <span>${results[i-1].location.city}</span>
                ${results[i-1].name.title}.${results[i-1].name.first} ${results[i-1].name.last}
                <span>Khoa ${results[i-1].email}</span>
                <span>${results[i-1].location.city}</span>
            </p>
            </li>
        </ul>
        `
        listDoctor.appendChild(ulItem)
    }
}
getDataFromPublicAPI()


