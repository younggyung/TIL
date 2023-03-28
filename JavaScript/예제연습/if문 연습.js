//문제 1.유저가 입력하는 숫자가 0인지 음성인지 양성인지 판단하는 프로그램을 만드시오

let i = 0;
if(i==0){
  console.log("0입니다.");
}else if(i>0){
  console.log("양수입니다");
}else{
  console.log("음수입니다");
}

//문제 2. 레포트 점수에 따라 등급을 매기는 프로그램을 만드시오.
/*90~100 : A
80~89 : B
70~79 : C
60~69 : D
less than 59 : F
*/


let score = 80;
let grade;
if(score>=90 && score<=100){
  grade = 'A';
}else if(score>=80 && score<=89){
  grade = 'B';
}else if(score >= 60 && score <= 69){
  grade = 'D';
}else{
  grade = 'F';
}

console.log("당신의 학점은", grade, "입니다");

/*문제3 한 지원자가 우리회사에 지원을했다. 지원자가 사용가능한 스킬은 배열에 제공이 된다
Javascript와 React 둘다 할줄 안다면 “합격!” Javascript와 React 둘중 하나만 할줄 안다면 “예비”, 두 스킬이 없다면 “탈락” 을 보여주는 프로그램을 짜시오*/

let skills = ["HTML","CSS"]

if(skills.includes("Javascript")&&skills.includes("React")){
  console.log("합격!");
}else if(skills.includes("Javascript")||skills.includes("React")){
  console.log("예비");
}else{
  console.log("탈락");
}


//3항 연산식 : 조건이 많지않고, 반환하고 싶은값이 딱 하나일때 사용하기 용이~
let age = 50;
let answer = age <= 40 ? "청년입니다" : "중년입니다";
console.log(answer);

