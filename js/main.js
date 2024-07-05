let portfolio__btn = document.querySelectorAll(".portfolio__btn")

portfolio__btn.forEach(function(item , index){
    item.addEventListener("click" , function(){
        portfolio__btn.forEach(function(item , index){
            item.classList.remove("portfolio__btn__active")
        })
        portfolio__btn[index].classList.add("portfolio__btn__active")
    })
})