let seat = document.querySelectorAll(".seat");

for(let i = 0; i < seat.length; i++){
    seat[i].addEventListener("click", ()=>{
        if(i != 0){
            seat[i].classList.toggle("active");
        }
    });
}