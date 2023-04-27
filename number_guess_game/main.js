// 요구사항 : 
// 랜덤번호 지정
// 유저가 번호를 입력하고 go 버튼 누른다.
// 유저가 랜덤번호를 맞추면, 맞췄습니다!
// 랜덤번호 < 유저번호 일때, DOWN!
// 랜덤번호> 유저번호 일때, UP!
// Reset 버튼 = 리셋 -> 랜덤번호도 새로, 게임이력도 새로 
// 5번의 기회를 다쓰면 게임끝. (더이상 추측 불가, 버튼 disable)
// 유저가 1~100 범위 밖 숫자를 입력하면 알려준다. 기회는 그대로
// 유저가 이미 입력한 숫자를 또 입력하면 알려준다. 기회는 그대로

let computerNum = 0;
let playButton = document.getElementById("play");
let userInput = document.getElementById("user-input"); //태그 통째로
let result = document.getElementById("result-area");
let resetButton = document.getElementById("reset");
let chance = document.getElementById("chance");
let chanceNum = 5;
let history = [];
let gameOver = false;
let theEnd = document.getElementById("end");

//클릭이벤트 지정시, 함수의 '이름'만 넣기
playButton.addEventListener("click",play);
resetButton.addEventListener("click",reset);
userInput.addEventListener("focus",function(){
    userInput.value="";
});
function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100)+1;
    console.log("정답",computerNum);
}

function play(){
   let userValue = userInput.value; //태그에서 딱 value만 가져옴
    if(userValue >100 || userValue <=0){
        alert("1에서 100 사이의 숫자를 입력해주세요!")
        return
    }
    
    if(history.includes(userValue )){
         alert("이미 입력한 값입니다. 새로운 숫자를 입력해주세요!");
        return;
    }

    if(userValue>computerNum){
        console.log("DOWN!!");
        result.textContent = "DOWN!!"
    }else if(userValue<computerNum){
        result.textContent = "UP!!"
    }else{
          result.textContent = "정답입니다^^"
          gameOver = true;
          theEnd.textContent = "축하합니다!"
    }
    chanceNum -= 1; 
    chance.textContent = `남은기회:${chanceNum}`;
    if(chanceNum === 0){
       gameOver = true;
       theEnd.textContent = "다시 해보세요"
    }
    
    history.push(userValue);
    
    if(gameOver === true){
        playButton.disabled = true;
    }
}

function reset(){
    chanceNum = 5;
    console.log("리셋합니다")
    userInput.value = "";
    pickRandomNum();
    result.textContent = "시작!"
    chance.textContent = `남은기회:${chanceNum}`;
}


pickRandomNum();
//Math.random()는 0부터 1사이의 숫자 호출