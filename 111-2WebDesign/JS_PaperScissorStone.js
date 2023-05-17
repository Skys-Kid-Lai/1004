//取得互動的元素物件
//監聽事件函式
var winNum = 0;
var userPlayer;
var computerPlay = "";
var result = "";
var finall = "";

var gesture=['paper','scissor','stone']; //set the array make when 28 get name can easier to search.

document.querySelector("#again").style.display="none"; //button again non display

//when button be click by user
function againStart()
{
    document.getElementById("page2").innerHTML = ""; //div page2 non display -- set the string none
    document.querySelector("#page1").style.display= "block"; //div page1 on display
    document.querySelector("#again").style.display="none"; //button again non display
}

function checkwin(j){        
    //取得顯示結果區域的元素物件
    //取得勝場顯示結果物件
    //產生電腦隨機出拳結果
    //判斷玩家得出拳和電腦的出拳
    //顯示結果在顯示區域
    //可以的話再增加一個函式, 當玩完一次之後, 可以讓使用者在玩一次的選項

    //find plyer choose
        //userPlayer = Number(guessField.name);
    console.log(j.target.name);
    userPlayer = gesture[j.target.name]; //get which user choose
    computerPlay = gesture[Math.floor(Math.random()*3)]; //get which computer choose

    //critical result
    if( userPlayer == computerPlay )
    {
        result="Tie";
    }
    else if( userPlayer =="paper"){
        if(computerPlay == "stone"){
            result="You win";
            winNum++;
        }
        else{
            result="You lose";
        }
    }
    else if( userPlayer =="scissor"){
        if(computerPlay == "paper"){
            result="You win";
            winNum++;
        }
        else{
            result="You lose";
        }
    }
    else if( userPlayer =="stone"){
        if(computerPlay == "scissor"){
            result="You win";
            winNum++;
        }
        else{
            result="You lose";
        } 
    }

    //finall answer display on div page2
    finall ='The computer is: '+computerPlay+'\n\r' + ',  You are :'+gesture[j.target.name] + ', The result of this round is  :' + result;
    document.getElementById("page2").innerHTML=finall;
    //total the win round 
    document.getElementById("winNum").innerHTML = winNum;
    //when result on diplay, div page1 can't diaplay and button again will diaplay
    document.querySelector("#page1").style.display="none";
    document.querySelector("#again").style.display= "block";
}
//div page2 will be none on start the game
document.getElementById("page2").innerHTML = "";
//content the object
var again = document.querySelector('#again');
var playerPaper = document.getElementById("item1");
var playerScissor = document.getElementById("item2");
var playerStone = document.getElementById("item3");
//listening the click
again.addEventListener('click', againStart); 
playerPaper.addEventListener('click', checkwin); 
playerScissor.addEventListener('click', checkwin);
playerStone.addEventListener('click', checkwin);
