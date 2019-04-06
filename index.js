import { TweenMax } from "gsap"

document.addEventListener("click", event => {
    const { clientX, clientY } = event;
    TweenMax.to("#circle", 1, {x : clientX, y: clientY})
    isCollide();
    let i = 1;
    const internal = setInterval(function(){
        /// call your function here
        isCollide();
   i++;
   if(i === 10){
       clearInterval(internal);
    }

    
        
    }, 100);
    clearInterval() ;
})

function isCollide() {
    const other = document.getElementById("enemy");
    const another = document.getElementById("circle");
    var object_1 = another.getBoundingClientRect();
    var object_2 = other.getBoundingClientRect();
   
    if (object_1.left < object_2.left + object_2.width  && object_1.left + object_1.width  > object_2.left &&
		object_1.top < object_2.top + object_2.height && object_1.top + object_1.height > object_2.top) {
                console.log('collisn here')
                other.classList.add('none');
        }
  
}