var counter = document.getElementById("counter");
var decreaseBtn = document.getElementById("decrease");
var resetBtn = document.getElementById("reset");
var increaseBtn = document.getElementById("increase");
var count = 0;

increaseBtn.addEventListener("click", function(){
    if (count < 100) {
        count++;
        counter.innerHTML = count;
    }
});

decreaseBtn.addEventListener("click", function(){
    if (count > -100) {
        count--;
        counter.innerHTML = count;
    }
});

resetBtn.addEventListener("click", function(){
    count = 0;
    counter.innerHTML = count;
});

