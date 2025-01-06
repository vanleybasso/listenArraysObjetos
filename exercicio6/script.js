let num = [1,3,5,8,7];
let num2 = [5,12,17,20];

function verificarElementosArray(arr) {
    if(arr.length >= 5) {
        console.log("Muitos elementos");
    } else {
        console.log("Poucos elementos");
    }
}

verificarElementosArray(num);
verificarElementosArray(num2);