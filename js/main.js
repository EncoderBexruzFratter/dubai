let portfolio__btn = document.querySelectorAll(".portfolio__btn")

portfolio__btn.forEach(function(item , index){
    item.addEventListener("click" , function(){
        portfolio__btn.forEach(function(item , index){
            item.classList.remove("portfolio__btn__active")
        })
        portfolio__btn[index].classList.add("portfolio__btn__active")
    })
})

let asked__right__row = document.querySelectorAll(".asked__right__row")
let asked__right__column = document.querySelectorAll(".asked__right__column")
let asked__row__btn = document.querySelectorAll(".asked__row__btn")

asked__right__column.forEach(function(item , index){
    item.addEventListener("click" , function(){
        asked__right__row[index].classList.toggle("asked__right__row__active")
        asked__row__btn[index].classList.toggle("asked__row__btn__active")
    })
})