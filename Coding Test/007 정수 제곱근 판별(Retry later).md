## 정수 제곱근 판별 LV.1
#### 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다. n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

--- 

* 제한 조건 
n은 1이상, 50000000000000 이하인 양의 정수입니다.

---

<입출력 예>
|n	|return|
|:---|:---|
|121|144|
|3|-1|
---
내 풀이

```java
class Solution {
    public long solution(long n) {
        long answer = 0;
        Double x = Math.sqrt(n); //1
        if(x == x.intValue()) { 
            answer = (long)((x+1)*(x+1)) ; //2
        }else{
         answer = -1;
        }
        return answer;
    }
}
```
---

다른사람 풀이1
```java

class Solution {
  public long solution(long n) {
      if (Math.pow((int)Math.sqrt(n), 2) == n) {
            return (long) Math.pow(Math.sqrt(n) + 1, 2);
        }

        return -1;
  }
}

```

---

💡 내 풀이 설명

>  Math.sqar() 함수는 c언어 공부하면서 알았는데, 생각나서 검색해서 썼다.. 코테는 그렇게 하면 안될거아냐? ㅠㅜ 형변환은 기본중에 기본인데 int만 쓰다보니.. 실수형 개념도 부족하고 형변환 함수도 잘 모른다. 보충하자!
1. Double 타입 x 에 n의 제곱근 저장, sqrt()의 반환값은 Double이니까
2. x.intValue()로 x를 int(정수)로..
    - java.lang.Integer  |	intValue() :  Returns the value of this Integer as an int.
3. 그래서 정수로 바꾼 x가 양수인 정수라면 조건만족, answer에 (X+1)를 두번 곱해주고 long으로 형변환하여 대입
4. else 처리

--- 

- Math.pow(n,2) : n값의 2승을 double로 변환시키는 함수
- 다른사람 풀이 : sqrt(n)을 한 n의 제곱근 값을, Math.pow()에 넣어서 2승 -> 결국 n값을 구하는 식. 계산식이 결국 n과 동일하면 조건 만족해서 return값이 x+1의 제곱이 되게 하는데.. 또 이걸 계산식으로, 
> Math.pow(Math.sqrt(n)+1,2) 
n의 제곱근에 + 1 해서 pow함수로 2승 -> x+1의 제곱

- 천재세요..? ㅜ int x 는 쓰지도 않았넴