const url = "http://localhost:5500/api"

function getUsers() {
    axios.get(url)
    .then(Response => {
        apiResult.textContent = JSON.stringify(Response.data)
    })
    .catch(error => console.error(error))
}


function addNewUser(newUser) {
    axios.post(url, newUser)
    .then(response => {
        console.log(response)
    })
    .catch(error => console.error(error))
}

const newUser = {
    name: "Silvestre Estalonge",
    avatar: "https://picsum.photos/200/300",
    city: "Oklahoma"
}


function getUser(id) {
    axios.get(`${url}/${id}`)
    .then(response => {
        const data = response.data
        userName.textContent = data.name
        userCity.textContent = data.city
        userId.textContent = data.id
        userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}


getUsers()//Exibe todos dados
getUser(5)
addNewUser(newUser)