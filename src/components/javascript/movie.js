console.log(document.querySelectorAll(".movie-time-select-list button"));

let allButttons = document.querySelectorAll(".movie-date-select-list button");

for(let i = 0; i < allButttons.length; i++){
    allButttons[i].addEventListener("click", ()=>{
        for(let a = 0; a < allButttons.length; a++){
            allButttons[a].classList.remove("active");
        }
        allButttons[i].classList.toggle("active");
    });
}

let allTimeButttons = document.querySelectorAll(".movie-time-select-list button");

for(let i = 0; i < allTimeButttons.length; i++){
    allTimeButttons[i].addEventListener("click", ()=>{
        for(let a = 0; a < allTimeButttons.length; a++){
            allTimeButttons[a].classList.remove("active");
        }
        allTimeButttons[i].classList.toggle("active");
    });
}