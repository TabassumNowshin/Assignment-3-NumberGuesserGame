let rbtn = document.querySelector("#restart"),
btn = document.querySelector("#inp");

rbtn.disabled = true;

btn.addEventListener("click", chkNum);


function chkNum() {
    let answer = Math.floor(Math.random() * 11);

    for (let i = 3; i >= 1; i--){

        let num = prompt("Enter A Number");

        if (num === ""){
            alert("Enter A Number!");
            i += 1;
            continue;
        } else if (num>10 || num<1){
            alert("Number Out of Range!");
            i += 1;
            continue;
        }

        if(i==1 && num!=answer){
            alert("You Lose!");
        }
        else if(num<answer){
            alert("Correct Answer Is Greater!");
        } else if(num>answer){
            alert("Correct Answer Is Smaller!");
        } else{
            alert("You Win");
            break;
        }
        let trial = document.querySelector("#trial");
        trial.innerHTML = `${i-1}`;
    }
    btn.innerHTML = "Game Over!"
    rbtn.disabled = false;
    btn.disabled = true;
}