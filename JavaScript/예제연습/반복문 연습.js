//구구단 찍기
for(let i=2;i<10;i++){
  console.log(i,"단")
  for(let j=1; j<10;j++){
    console.log(i,'*',j,'=',i*j);
  }
  console.log(" ");
}


//while문은 정확한 범위를 모를때 주로 사용
let i=2;
while(i<10){
  console.log("while문 실행", i);
  i++
}

//for문과 배열은 환상의 콤비
let fruit = ["banana","apple","grappe","mango"];
for(let i = 0 ; i < fruit.length ; i++){
  console.log(fruit[i]);
}

//문제1. 1부터 100까지 더하는 for문을 만들고 결과를 출력하시오.
let sum = 0 ;
for(let i=1;i<101;i++){
  sum+= i
}
console.log(sum)

//문제2. 1부터 100까지 홀수만 출력
for(let i=1 ; i<101 ; i+=2){
  console.log(i);
}

//문제3. 1부터 50까지 369 결과를 프린트
for(let i=1;i<=50;i++){
  let stringValue = i.toString() 
  let result = ""
  for(let j=0;j<stringValue.length;j++){
    if(stringValue[j] == "3" ||stringValue[j] == "6" ||stringValue[j] == "9" ){
      result+="짝"
    } 
  }
  console.log(result.length > 0 ? result : i)
}

/*해설: i가 1일때, stringValue = "1"; result =""; 이 상태로 시작해서 두번째 포문 진입 -> j는 0부터 stringValue.length 즉 1까지 반복-> 딱 한번 수행
if문 : stringValue[j]가 3이거나 6이거나 9일때 result+="짝" 이 된다. 그럼 j가 지금 0이니까, stringValue[0]가 3,6,9일때 짝! 
만약 i가 13이면 stringValue[0]과 stringValue[1]로 두번 반복적으로 체크해서 1의자리수와 10의자리수가 3,6,9인지 확인하는 로직
*/

//문제4 주어진 숫자가 소수이면 true 아니면 false를 출력하는 프로그램을 짜시오. 소수, 1과 나자신으로 밖에 나눠지지 않는 수
// 1과 나자신으로 밖에 나눠지지 않는다.

console.log(" ");

let n = 20;
let isPrime = true;

if(n===1){
  isPrime = false; //1은 소수가 아님
} 
for(let i=2 ; i<n ; i++){
  if(n % i == 0){ 
    isPrime = false //2부터 n-1까지 하나하나 나눠봤을때 나눠지면 소수강 ㅏ님
  }
}

console.log(isPrime);