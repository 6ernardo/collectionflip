let heads = 0;
let tails =0;
let coin = document.querySelector(".coin");
let heads1 = document.querySelector("#heads");
let tails1 = document.querySelector("#tails");
let texto = document.querySelector("#texto");

let win_odd = 40; //odd in %

function startConfetti() {
    var duration = 5 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        var particleCount = 150 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti({ 
            ...defaults, 
            particleCount, 
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } 
        });
        confetti({ 
            ...defaults, 
            particleCount, 
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } 
        });
    }, 250);
}

heads1.addEventListener("click", ()=>{
    let i = Math.random() * 100;
    console.log(i);
    coin.style.animation = "none";
    document.querySelector("#texto").textContent = "A girar.."
    heads1.disabled = true;
    tails1.disabled = true;
    if(i<win_odd){ // heads wins 40% of the time
        setTimeout(function(){
            coin.style.animation = "spin-heads 3s forwards";
        }, 100);
        heads++;
        setTimeout(startConfetti, 3000);
        setTimeout(updateSanteWin, 3000);
    }else{
        setTimeout(function(){
            coin.style.animation = "spin-tails 3s forwards";
        }, 100);
        tails++;
        setTimeout(updateSanteLose, 3000);
    }
    setTimeout(resetText, 8000);
});

tails1.addEventListener("click", ()=>{
    let i = Math.random() * 100;
    console.log(i);
    coin.style.animation = "none";
    document.querySelector("#texto").textContent = "A girar.."
    heads1.disabled = true;
    tails1.disabled = true;
    if(i<(100-win_odd)){ // heads wins 60% of the time
        setTimeout(function(){
            coin.style.animation = "spin-heads 3s forwards";
        }, 100);
        heads++;
        setTimeout(updateCLose, 3000);
    }else{
        setTimeout(function(){
            coin.style.animation = "spin-tails 3s forwards";
        }, 100);
        tails++;
        setTimeout(startConfetti, 3000);
        setTimeout(updateCWin, 3000)
    }
    setTimeout(resetText, 8000);
});

function updateSanteWin() {
    document.querySelector("#texto").textContent = "SANTE! Ganhaste!";
}

function updateSanteLose() {
    document.querySelector("#texto").textContent = "COLLECTION! Perdeste!";
}

function updateCWin() {
    document.querySelector("#texto").textContent = "COLLECTION! Ganhaste!";
}

function updateCLose() {
    document.querySelector("#texto").textContent = "SANTE! Perdeste!";
}

function resetText() {
    document.querySelector("#texto").textContent = "Gira a moeda!";
    heads1.disabled = false;
    tails1.disabled = false;
}

// function disableButton(){
//     flipBtn.disabled = true; 
//     setTimeout(function(){
//         flipBtn.disabled = false;
//     }, 3000);
// }

// resetBtn.addEventListener("click", ()=> {
//     coin.style.animation="none";
//     heads=0;
//     tails=0;
//     updateStats();
// })