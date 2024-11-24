let btn=document.querySelector(".esas")

btn.addEventListener("click",()=>{
    location.href="index.html"
})

let btn2=document.querySelector(".btn2")

btn2.addEventListener("click",()=>{
   console.log(btn2);
   location.href="signup.html"
})

let username = document.querySelector(".username")
let pss = document.querySelector(".pass2")
let alerts=document.querySelector(".alerts")
let button = document.querySelector("button")
let form = document.querySelector("form")
let users = JSON.parse(localStorage.getItem("users")) || []
let localuser = {}
console.log(pss);
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let user=users.find(function (b) {
      return b.Name==username.value && b.Password==pss.value
    })
 if (form.checkValidity()) {
    if (user) {
        localStorage.setItem("user",JSON.stringify(user))
        let element = `<div class="w-25 alert alert-success" role="alert">
        Məlumat doğrudur
        </div>`;
       alerts.innerHTML += element;
        setTimeout(function () {
            location.href = "index.html"
                 }, 1000);
    }
    else{
        alert("Input bos ola bilmez!")
    }
 }
else{
    alert("Sifre veya ad yanlisdir")
}


})