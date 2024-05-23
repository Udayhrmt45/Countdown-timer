const endDate = "29 May 2024 1:00 pm";

document.getElementById("end-date").innerHTML=endDate;
var inputs = document.querySelectorAll("input");

function clock(){
    var end = new Date(endDate);
    var now = new Date();
    var diff = (end - now)/1000;
    if(diff<0){
        return 0;
    }
    inputs[0].value = Math.floor(diff/3600/24);
    inputs[1].value = Math.floor(diff/3600)%24;
    inputs[2].value = Math.floor(diff/60)%60;
    inputs[3].value = Math.floor(diff%60);
    
}
clock();//initial call

setInterval(           //calls for every second
    function (){
        clock();
    },1000
)