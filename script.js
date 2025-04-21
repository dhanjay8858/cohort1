let cursor=document.querySelector(".cursor");
let main=document.querySelector("#main");
main.addEventListener('mousemove',function(hero){
    cursor.style.left=hero.x+"px";
    cursor.style.top=hero.y+"px";
    console.log("heelo")
    
    
})