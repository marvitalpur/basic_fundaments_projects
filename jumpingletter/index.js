const container = document.querySelector("span");
// console.log(container, "is this working")

container.forEach((item) =>{
item.addEventListener("click", ()=>{
    item.classList.toggle("active")
})
})
