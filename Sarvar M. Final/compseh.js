let items = document.querySelectorAll(".list-group-item")
let modalBody=document.querySelector(".modal-body")

let modal1=new bootstrap.Modal (document.querySelector(".modal"))
items.forEach(function (item) {
    item.addEventListener("click", function (e) {
        items.forEach(function(k){
            k.classList.remove("active")
        })
e.target.classList.add("active")
    })
})

let computers = JSON.parse(localStorage.getItem("list")) || []
let right=document.querySelector(".right")

computers.forEach(function(computer){
right.innerHTML+=`<div class="card" style="width: 18rem;">
  <img src="${computer.sekil}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${computer.kateqoriya}</h5>
    <p class="card-text">${computer.tevir}</p>
    <button onclick="openmodal()" type="button" class="btn btn-warning">Tesvir</button>
  </div>
</div>`

 let element=`<div class="modal-left">
     <img src="${computer.sekil}" alt="">
 </div>
 <div class="modal-right">
     <ul class="list-group">
         <li class="list-group-item">kateqoriya:${computer.kateqoriya}</li>
         <li class="list-group-item">ad:${computer.ad}</li>
         <li class="list-group-item">qiymet:${computer.qiymet}</li>
         <li class="list-group-item">tesvir:${computer.tevir}</li>
         <li class="list-group-item">emeliyyatlar:${computer.emeliyyatsistemi}</li>

     </ul>
 </div>
 `
 modalBody.innerHTML+=element

})

function openmodal(compid) {
    modal1.show()
    console.log(compid);
    
let findedComp = computers.find(function (comp){
    console.log(compid);
    
    return comp.id == compid

})

console.log(findedComp);

}

