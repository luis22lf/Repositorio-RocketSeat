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

function updateUser(id, userUpdated) {
    axios.put(`${url}/${id}`, userUpdated)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

const userUpdated = {
    name: "Xuliana",
    avatar: "https://picsum.photos/200/300",
    city: "Metaland"
}

function deleteUser (id) {
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

//updateUser(2, userUpdated)//modifica dados
getUsers()//Exibe todos dados
getUser(1)
addNewUser(newUser)
deleteUser(2)