document.getElementById("green1").addEventListener("click", function(){
    count();
})

let counter =0;

function count(){
    counter +=1
    document.getElementById("green2").innerHTML = counter;
}