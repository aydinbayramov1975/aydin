// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

let input1 = document.querySelector(".input1")
let input2 = document.querySelector(".input2")
let input3 = document.querySelector(".input3")
let input4 = document.querySelector(".input4")
let button = document.querySelector("button")
let parent = document.querySelector(".parent")
let input5 = document.querySelector(".input5")
let input6 = document.querySelector(".input6")
let input7 = document.querySelector(".input7")
let input8 = document.querySelector(".input8")
let input9 = document.querySelector(".input9")
let input10 = document.querySelector(".input10")
let input11 = document.querySelector(".input11")
let input12 = document.querySelector(".input12")
let table = new DataTable('#myTable');
let form = document.querySelector("form")
let modal = new bootstrap.Modal(document.querySelector(".create-modal"))
let user = JSON.parse(localStorage.getItem("user"))
let arr = JSON.parse(localStorage.getItem("list")) || []

function generateId() {
  return arr[arr.length - 1]?.id + 1 || 1
}
console.log(input2);

form.addEventListener("submit", (e) => {
  e.preventDefault()
  if (form.checkValidity()) {
    let obj = {
      ad: input1.value,
      qiymet: input2.value,
      tevir: input3.value,
      kateqoriya: input4.value,
      sekil: input5.value,
      emeliyaddas: input6.value,
      merkeziprosessor: input7.value,
      daimiyaddas: input8.value,
      daimiyaddastipi: input9.value,
      emeliyyatsistemi: input10.value,
      videocart: input11.value,
      yeni: input12.value,
      id: generateId(),
      sahibi: user.Username
    }
    arr.push(obj)


    localStorage.setItem("list", JSON.stringify(arr))
    modal.hide()
    table.row.add([
      obj.id,
      obj.ad,
      `<img src="${obj.sekil}">`,

      obj.qiymet,
      `<button class="btn btn-danger" style="bakroundcolor:red; color:white;">Sil<button/>`

    ]).draw();
    location.reload()
  }


})

function a() {
  let filtcomp = arr.filter(function (parametr) {
    return parametr.sahibi == user.Username
    


  })
  console.log(filtcomp);

  filtcomp.forEach(function (v) {
    console.log([
      v.id,
      v.ad,
      `<img src="${v.sekil}">`,
      v.qiymet,
      `<button class="btn btn-danger ">Sil<button/>`

    ]);
    
       table.row.add([
         v.id,
         v.ad,
         `<img src="${v.sekil}" style="width:60px; height:60px;" alt="">`,
         v.qiymet,
         `<button class="btn btn-danger ">Sil<button/>`

      ]).draw();
    

  })
}
a()

let esas = document.querySelector(".esas")

esas.addEventListener("click", () => {
  console.log(esas);
  location.href = "index.html"
})

