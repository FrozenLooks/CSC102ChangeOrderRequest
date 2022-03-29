var currTime = 0
function testCntdown(){
    console.log("testCntdown() started");
    currTime = 50
    for(var i = 0; i <= 10; i++){
        console.log(i);
        setTimeout(function(){
            if(currTime == 0){
                document.getElementById("blastOffText").innerHTML = "Blastoff!";
            } else if(currTime < 25){
                document.getElementById("blastOffText").innerHTML = "Warning Less than ½ way to launch, time left = " + currTime; 
            } else {
                document.getElementById("blastOffText").innerHTML = currTime;
            }
            currTime = currTime - 5;
        }, 5000 * i);
    }
}