import { TweenMax } from "gsap"
import Game from './src/app.js';

const game = new Game();

document.addEventListener("click", event => {
    const { clientX, clientY } = event;
    TweenMax.to("#circle", 1, { x: clientX, y: clientY })
    
    game.play();
})
