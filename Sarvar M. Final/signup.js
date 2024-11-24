let esas = document.querySelector(".esas")

esas.addEventListener("click", () => {
    location.href = "index.html"
})


let username = document.querySelector(".username")
console.log(username);

let pss = document.querySelector(".pass2")
console.log(pss);


let button = document.querySelector("button")
let form = document.querySelector("form")

let localuser = {}
console.log(pss);
// form.addEventListener("submit", (e) => {
//     e.preventDefault()
//     let check = false
//     users.forEach(user => {
//         console.log(user.username);
//         console.log(username.value);
//         console.log(user.pss);
//         console.log(pss.value);
//         if (user.userName === username.value && user.Password === pss.value) {
//             console.log("Istifadeci var:", user);
//             localuser = user
//             check = true
//         }

//     });
//     if (check) {
//         alert("Giris etdiniz")
//         localStorage.setItem("user", JSON.stringify(localuser))
//         location.href = "../home/home.html"

//     }

//     else {
//         alert("username ve ya password sehvdir")

//     }

// })




let nameInput = document.querySelector(".username")
let passInput = document.querySelector(".pass2")
let idInput = document.querySelector(".ad")
let tel = document.querySelector(".tel")



let users = JSON.parse(localStorage.getItem("users")) || []

function generated() {
    return users[users.length - 1]?.id + 1 || 1
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let check = false
    users.find(user => {
        console.log(user);
        if (user.userName == username.value) {

            return check = true
        }
    });

    if (!check) {
        let obj = {
            
            Name: nameInput.value,
            Password: passInput.value,
            tel: tel.value,
            Username:username.value
        }
        users.push(obj)
        localStorage.setItem("users", JSON.stringify(users))
        location.href = "./signin.html"
    }

    else {
        alert(`${username.value} Username ile insan movcuddur!!!`)
    }
})