let h = document.querySelector("h1")
let inc = document.querySelector("#inc")
let dec = document.querySelector("#dec")

let a = 0;
    inc.addEventListener('click', function(){
    a++;
    inc.addEventListener("mousedown", function () {
    inc.innerHTML = "+1";
    });

    inc.addEventListener("mouseup", function () {
    inc.innerHTML = "Increment";
    });
    h.innerHTML = a;
})

dec.addEventListener('click', function(){
    a--;
    dec.addEventListener("mousedown", function () {
    dec.innerHTML = "-1";
    });

    dec.addEventListener("mouseup", function () {
    dec.innerHTML = "decrement";
    });
    h.innerHTML = a;
})