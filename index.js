let addition = document.getElementById("add");
let subtraction = document.getElementById("sub");
let result = document.getElementById("sum");

let count = 0;

// innerHTML  => will replace the values of html

addition.addEventListener("click", function(){
    count+=1;
    //console.log(count)
    result.innerHTML = count;
})
subtraction.addEventListener("click", function(){
    count-=1;
    //console.log(count)
    result.innerHTML = count;
})