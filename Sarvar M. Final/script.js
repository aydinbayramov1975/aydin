let btn=document.querySelector(".btn1")

btn.addEventListener("click",()=>{
    location.href="signin.html"
})

// let btn3=document.querySelector(".btn3")

// btn3.addEventListener("click",()=>{
//     location.href="signin.html"
// })
 

// let btn4=document.querySelector(".btn4")

// btn4.addEventListener("click",()=>{
//     location.href="COMP.hTML"
// })

let user=JSON.parse(localStorage.getItem("user"))

let btnler=document.querySelector(".btnler")
let h1=document.querySelector("h1")

if (user) {
    let element=` <button type="button" class="btn btn-primary">komputerlərim</button>
                <button type="button" class="btn btn-warning">Komputer alış-verişinə başla</button>
            <button type="button" class="btn btn-danger">Hesabdan çıxmaq</button>`
    btnler.innerHTML = element

    let h1value = `
    İstifadəçi adı: ${user.Name}
    `

    h1.innerHTML = h1value
    let btnprimary = document.querySelector(".btn-primary")
    let btndanger = document.querySelector(".btn-danger")
    btnprimary.addEventListener("click", function () {
        location = "COMP.HTML"
    })
    let btnwarning = document.querySelector(".btn-warning")
    btnwarning.addEventListener("click", function () {
        location = "compseh.html"
    })

    btndanger.addEventListener("click", function () {
        localStorage.removeItem("user")
        location.reload()
    })
}

