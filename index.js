let heads = 0;
let tails =0;
let coin = document.querySelector(".coin");
let heads1 = document.querySelector("#heads");
let tails1 = document.querySelector("#tails");

heads1.addEventListener("click", ()=>{
    let i = Math.random() * 100;
    console.log(i);
    coin.style.animation = "none";
    if(i<40){ // heads wins 40% of the time
        setTimeout(function(){
            coin.style.animation = "spin-heads 3s forwards";
        }, 100);
        heads++;
    }else{
        setTimeout(function(){
            coin.style.animation = "spin-tails 3s forwards";
        }, 100);
        tails++;
    }
    setTimeout(updateStats, 3000);
});

tails1.addEventListener("click", ()=>{
    let i = Math.random() * 100;
    console.log(i);
    coin.style.animation = "none";
    if(i<60){ // heads wins 60% of the time
        setTimeout(function(){
            coin.style.animation = "spin-heads 3s forwards";
        }, 100);
        heads++;
    }else{
        setTimeout(function(){
            coin.style.animation = "spin-tails 3s forwards";
        }, 100);
        tails++;
    }
    setTimeout(updateStats, 3000);
});

function updateStats() {
    document.querySelector("#heads-count").textContent = `Heads: ${heads}`;
    document.querySelector("#tails-count").textContent = `Tails: ${tails}`;
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