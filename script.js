// let main=document.querySelector(".main");
let cursor=document.querySelector(".cursor");
let interval=null; // Variable to store the interval ID
let point=0;

 function startgame(){
    if(interval) return; // Prevent multiple intervals
    
    interval=setInterval(function(){
        let x = Math.random() * (window.innerWidth - 20); // 20 = cursor width
        let y = Math.random() * (window.innerHeight - 20); // 20 = cursor height
        cursor.style.left=x+"px";
        cursor.style.top=y+"px";
    },2000)

}
 function scorepoint(){
    point++;
    document.querySelector(".point").innerHTML=point;
    if(point==5){
        alert("you won the game");
        clearInterval(interval); // Stop the interval when the game is won
        interval = null; // Reset the interval variable
    }
 }
 cursor.addEventListener('click',function(){
    startgame();
    scorepoint();
 });












// if (interval already exists) {
//     don't do anything;
// } else {
//     start moving the cursor every second;
// }