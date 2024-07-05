let userscore = 0;
let robotscore = 0;


let choice = document.querySelectorAll(".col-lg-4");
let msg = document.querySelector("#msg");


let userscorenum = document.querySelector("#user_score");
let compscorenum = document.querySelector("#robot_score");

let gencompchoice = () => {
    let option = ["Rock", "Paper", "Sccissor"];
    let randidx = Math.floor(Math.random() * 3);
    return option[randidx];
}

let draw = () => {
     msg.innerText = "It's Draw!"
     msg.style.backgroundColor = "black";

};

let showwinner = (userwin, userchoice, compchoice) =>{
    if(userwin){
        userscore++;
        userscorenum.innerText = userscore;
        msg.innerText = `You Win! your ${userchoice} beats ${compchoice}`
        msg.style.backgroundColor = "green";
    }
    else{
        robotscore++;
        compscorenum.innerText = robotscore;
         msg.innerText = `You lost. ${compchoice} beats your ${userchoice}`
         msg.style.backgroundColor = "red";
    }

}

let playGame = (userchoice) => {
    let compchoice = gencompchoice();


    if (userchoice === compchoice) {
        draw();
    } else {
        let userWin = true;
        if (userchoice === "Rock") {
            userWin = compchoice === "Paper" ? false : true;
        } else if (userchoice === "Paper") {
            userWin = compchoice === "Scissors" ? false : true;
        } else {
            userWin = compchoice === "Rock" ? false : true;
        }
        showwinner(userWin, userchoice, compchoice);
    }
    
};

choice.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userchoice = choice.getAttribute("id");
        playGame(userchoice);
    })
});



