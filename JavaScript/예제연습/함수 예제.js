function greet(name){
console.log("안녕 내 이름은 ",name,"야");
}

function meetAt(year,month,date){
    let todayYear = year;
    let todayMonth = month;
    let todayDate = date;
    if(todayDate){
        return `{today}`
    }
    
}

function findSmallesetElement(arr){
    let smallestElement = arr[0];
    for(let i;i<arr.length;i++){
        if(arr[i]<arr[i+1]){
            smallestElement = arr[i];
        };
    }
 
      return smallestElement;
    }


let a = [1,2,3,4]
console.log(findSmallesetElement(a));


//헷갈리는 부분 : 자바,자바스크립트,C언어 -> 변수초기화와 선언.
// 선언만 해놓고 따로 하면 안되는지?? let 