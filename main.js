let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")

let img1 = document.querySelector(".img1")
let img2 = document.querySelector(".img2")
let img3 = document.querySelector(".img3")
let img4 = document.querySelector(".img4")


btn1.addEventListener("click",function(){
    let arr = [img1,img2,img3,img4]
    for(let i = img1; i=arr.length;i++){
        i.style.display = "block"
    }
})