function greet(name){
console.log(`안녕 내 이름은 ${name}야`);
}

function meetAt(year,month,date){
    let todayYear = year;
    let todayMonth = month;
    let todayDate = date;
    if(todayDate){
        return `${todayYear}년${todayMonth}월${todayDate}일`;
    }if(todayMonth){
        return `${todayMonth}월${todayDate}일`;
    }if(todayYear)
        return `${todayYear}년`
    
}

function findSmallestElement(arr){
    let smallestElement = arr[0] ;
    if(arr.length ===0){
        return 0;
    }
    for(let i = 0 ; i<arr.length ; i++){
        if(smallestElement>arr[i]){
            smallestElement = arr[i];
        }
    }
    return smallestElement;
    }


    //돈을 매개변수로 받으면 몇개의 지폐와 동전이 필요한지 최소개수를 계산해주는 함수를 만드시오.
function casher(money){
    let unit = [50000,10000,5000,1000,500,100]; 
    //돈을 단위가 큰 순으로 배열로 미리 만들어둔다.
     for(let i=0;i<unit.length;i++){
        let num = Math.floor(money/unit[i])
        //매개변수로 들어온 돈을 5만원부터 시작해서 나눈다.
        console.log(unit[i]+'X'+num)
        money -=(unit[i]*num)
        //
     }
}

casher(63000);

//* 자바스크립트,파이썬에서 나누기 연산 / 는 몫계산 아니고 소수점까지 출력