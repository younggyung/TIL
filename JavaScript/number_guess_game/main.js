// 랜덤번호 지정
// 유저가 번호를 입력하고 go 버튼 누른다.
// 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
// 랜덤번호 < 유저번호 일때, DOWN
// 랜덤번호> 유저번호 일때, UP
// Reset 버튼 = 리셋 
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

//클릭이벤트 지정시, 함수의 '이름'만 넣기
playButton.addEventListener("click",play);
resetButton.addEventListener("click",reset);

function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100)+1;
    console.log("정답",computerNum);
}

function play(){
   let userValue = userInput.value; //태그에서 딱 value만 가져옴
    if(userValue >100 || userValue <=0){
        alert("1에서 100 사이의 숫자를 입력해주세요!")
        return false;
    } 
    if(userValue>computerNum){
        console.log("DOWN!!");
        result.textContent = "DOWN!!"
    }else if(userValue<computerNum){
        result.textContent = "UP!!"
    }else{
        result.textContent = "정답입니다^^"
    }
    chanceNum -= 1;
    chance.textContent = chanceNum;
    if(chanceNum === 0){
       playButton.disabled = true;
    }
    console.log(chanceNum);
    
}

function reset(){
    console.log("리셋합니다")
    pickRandomNum();
    result.textContent = "LET's GO!"
}


pickRandomNum();
//Math.random()는 0부터 1사이의 숫자 호출