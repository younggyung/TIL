# ✍️ What I learned Today ?

---

## ✨ Let's go 자바스크립트 ! 

### 005. Canvas
* <p style="text-decoration: underline;">Summary</p>
1. Canvas
    1. Rectangle
    2. Path
2. 그래픽스 속성
3. 그림 읽어들이기
---
#### 1. Canvas
- Canvas란? 
  - 목적 : 웹브라우저에서 그래픽을 처리
  - 특징 : 즉시 실행형 저수준 API
    - 저수준 → 선,원,사각형을 그리는 등의 기본적인 그리기 기능만 제공(속도는 빠름). 더 복잡한 그림은 저수준 API를 활용한 애플리케이션으로 그린다.
    - 즉시 실행형 → 명령을 호출하는 즉시 실행된다. 그림상태를 저장하는 중간데이터 계층 없음

  - 어디에 쓰나? 
    - 검색해보니까 포트리스, 벽돌깨기와 같은 간단한 게임을 만들거나 화면에 움직이는 예쁜 인터랙션을 만들때 사용하는 것 같다. 즉.. 잘 알아두면 좋다!

#### 1-1. Rectangle

- 사용방법 : 
1. body 요소에서 Canvas를 표시하고자 하는 위치에 canvas요소를 배치(영역설정)
- `<canvas id = "mycanvas" width="500" height="400"></canvas>`
2. 자바스크립트로 작업
- `let canvas = document.getElementById("mycanvas");`
3. 렌더링 컨텍스트 가져오기
- Canvas로 그림을 그리려면 canvas 요소 객체에서 렌더링 컨텍스트라는 객체를 가져와야 한다. canvas 요소 객체의 `getContext` 메서드 이용
`let ctx = canvas.getContext("2d")`
  - getContext 메서드의 인수는 두가지이다. 2차원 컴퓨터 그래픽스는 "2d" 3차원은 "webgl"을 이용한다. `ctx`는 context의 약자로 렌더링 컨텍스트를 저장하는 변수이름으로 사용하는것이 관례이다!
4. 그림그리기
- 렌더링 컨텍스트를 가져왔다면 렌더링 컨텍스트의 메서드를 이용해서 Canvas위에 그림을 그려준다. 
- `ctx.strokeRect(50,60,200,100);` : 50,60은 좌표이고 200,100은 사각형의 사이즈를 나타낸다.
- canvas에 내장된 그리기 기능은 사각형 그리기 하나 뿐이다. 나머지는 `패스`로 정의해서 그린다.

      사각형 테두리 그리기 : strokeRect(x,y,width,height)
      사각형 채우기 : fillRect(x,y,width,height)
      사각형 영역을 지우고 투명하게 만들기 : clearRect(x,y,width,height)



---

#### 1-2 Path
- 1-1처럼 사각형은 캔버스에 내장된 메서드를 호출하기만 해도 그릴수 잇있다. 하지만 패스를 그리려면 패스를 정의하고, 그리는 과정이 필요하다.

1. beginPath 호출
- beginPath 메서드를 호출하면 렌더링 컨텍스트 패스를 기록한다. 지금까지 정의한 패스가 초기화되고 새로운 도형을 그릴수 있게 된다.
2. 패스를 정의하는 메서드 호출
패스를 정의하는 메서드를 호출하면 렌더링 컨텍스트에 패스가 추가되어 하나씩 연결된다. 

| 메서드           | 설명                                                 |
|------------------|------------------------------------------------------|
| lineTo           | 현재 좌표에서 지정된 좌표까지 선을 정의한다          |
| quadraticCurveTo | 현재 좌표까지 이차곡선 정의                          |
| moveTo           | 지정된 좌표로 이동한다(선을 그리지 않는 패스만 정의) |
| arc              | 원호를 정의                                          |
| rect             | 사각형 정의                                          |
| bezierCurveTo    | 현재 좌표까지 베지어 곡선 정의                       |

3. closePath 호출
- closePath 메서드를 호출하면 패스의 마지막 점과 시작점을 직선으로 연결하고 패스를 닫는다. 

4. 패스를 Canvas에 그리기
stroke나 fill 메서드로 렌더링 컨텍스트에 기록한 패스를 convas위에 그린다. stroke 메서드는 패스를, 그리고 fill 메서드를 패스로 둘러싼 영역을 채운다.


---

#### 2. 그래픽스 속성
- 색상설정 : `strokeStyle`, `fillStyle`
위와 같이 사각형이나 패스를 그리고, 선의 색상이나 채우기 색상, 투명도, 선스타일 등을 설정할 수 있다. 패스 자체에는 프로퍼티가 없으므로, **패스를 그리기 전에** 설정해야한다.
stroke나 fill, strokeRect 등으로 이미 도형을 그리고 난 후에, 아랫줄에 스타일을 변경하는 코드를 적어도 무시된다.

```js
ctx.lineWidth=10; //선굵기
ctx.strokeStyle="red"; //빨간색 선
ctx.fillStyle="green";//초록색 채우기
```

- 투명도 설정 : `globalAlpha` : 
Canvas 위에 그려진 모~든 도형의 투명도를 설정한다. 값은 0~1의 값으로 0은 완전 투명, 1은 완전 불투명

```js
ctx.globalAlpha=0.5; //global -> 모든 도형에 투명도 적용. 각각 다르게 하고싶으면 strokeStyle 또는 fillStyle 프로퍼티 값에 CSS의 rgba 함수를 문자열로 입력
```

- 그외 :

`lineCap` : 패쓰의 종단점 모양. 선의 끝모양 "butt", "square", "round"<br>
`lineJoin`: 패스의 정점 모양. 뾰족 "miter" , 둥근 "round", 평평 "bevel"

---

#### 3. image 읽어들이기

Canvas로 이미지를 읽어들일 수 있다. (그냥 이미지 태그 쓰는거랑 무슨차이 일까?)

1. URL로 불러오기
```js
  //이미지 불러오기
  //캔버스준비
  let canvas3 = document.getElementById("thirdcanvas");
  let ctx3 = canvas3.getContext("2d");
  //이미지 객체 생성
  let img = new Image();
  img.src = "토끼.jpg"
  // 이미지를 읽어들인후 캔버스에 그리기
  img.onload = function(){
   ctx3.drawImage(img,100,0);
  };
   //img.src= canvas.toDataURL(); //mycanvas에서 그린 도형을 이미지로 불러오는 방법임
 ``` 
이미지 객체의 onload 이벤트 처리기에서 drawImage를 호출한다 → drawImage 메서드로 이미지를 그리려면 이미지를 읽어들일때 까지 기다려야하는데, 이미지를 읽어들이려면 어느정도 시간이 필요하다. 그런데 이미지를 다 읽어오지 않은 상태에서 drawImage를 호출하면 그릴 이미지가 없기 때문에 **아무것도 그려지지 않는다!** 그렇기에, 이미지가 다 로딩이 되면 drawImage 메서드를 작동시켜야 한다. *이럴때 쓰는것이 onload 프로퍼티 아니였느뇨?*
image객체의 onload 프로퍼티 값에 등록해주자.

> 이런 작업방식은 파일을 읽거나 네트워크로 데이터 검색을 할 때에도 적용되는 기본적인 패턴이니 꼭 기억해두기. onload 기억해

- `drawImage` 메서드 : 인수에 따라 세가지 패턴으로 사용할 수 있다.
  - `drawImage(img,x,y)` : x,y 좌표를 왼쪽 위 꼭지점으로 삼아 이미지 draw
  - `drawImage(img,x,y,width,height)` : x.y 좌표를 위꼭지점으로 삼고 width 값을 너비로, heigh 값을 높이로 삼는다. **이미지 사이즈 조정 가능**
  - `drawImage(img,sx,sy,sw,sh,x,y,width,heigh)` : **가장 일반적인 이미지 표시방법*
  <small style="color:gray">할게 제일많네..</small><br>
  (sx.sy)를 왼쪽 위 꼭지점으로 삼고 너비는 sh,sw로 삼아 **잘라낸다**. 그리고 canvas요소에서 왼쪽 위 꼭지점이 (x,y) 인 지점에 위치시켜 너비가 width. 높이가 heigh인 이미지를 그린다. 즉 원하는만큼 자르고 원하는곳에 위치시켜서 원하는 크기대로 표시하는 방법!

2. 픽셀 제어하기
- getImageData 메서드를 사용하면 Canvas 이미지의 픽셀값(RGBA값)을 제어할 수 있는 imageData 객체를 가져올 수 있다. 이를 활용하면 Canvas 이미지의 픽셀 값을 조작하여 화상 처리를 할 수 있다. 화상 처리<small>유용한 정보를 도출하기 위하여 화상 자료를 조작 · 분석하는 과정.</small>

- createImageData : 압축되지 않은 imageData를 사용해야 하는 화상처리 알고리즘에 사용
- putImageData : imageData를 렌더링 컨텍스트에 그린다.

      😅그러니까 정리하자면...
      픽셀값 = 색상값. 픽셀값이라길래 픽셀의 위치인줄 알았는데.. 색상값임~
      즉, getImageData 메서드를 이용해서 이미지의 색상값을 제어할수 있다는 것이다.
      여기서 ImageData란, 이미지의 너비와 높이, 픽셀값이 저장된 data 프로퍼티를 가지는 객체이다. getImageData로 ImageData를 가져온다. ㅇㅋ?
      data에는 픽셀값이 RBGA 순서대로 저장되어있다. 알다시피 RGBA값은 부호없는 0~255 사이의 정수이다. 따라서 배열 길이는 4*width*height가 된다. 
      픽셀 점 하나당 data=[200,100,200] 이런식으로 값을 가지고있다는거니까!
      그러면 픽셀의 위치는 어떻게 아느냐? offsetX와 offsetY로 알수가 있다.

      *그러니까* 
      그림판이나 포토샵에서 색상추출할때. 그 스포이드로 쪽! 하고 찍어보는게 offsetX와 offsetY로 픽셀의 위치를 뿁! 하고 뽑아내는것이고. 그럼 거기의 RGBA값은 어떻게 아느냐??? imageData의 data배열에서 찾아 낼 수 있다.
      *다시*
      data 배열의 길이는 픽셀의 수*4 => 이미지 너비*높이*4 이다.
      그리고 imageData에 담긴 이미지 안에서 왼쪽에서 m번째, 위에서 n번째 픽셀의 R값은 imageData.data[imageData.width*4*n*4*m]로 구할수가 있는 것이다. 배열의 순서상.. RGBA 순서라고 했으니까 R을 구하면 +1하면 G, +2 하면 B의 값을 구할수 있다.
      이러한!!원리로!! RGBA값을~~ 구할 수 있다!!

- imageData의 data 궁금해서 찍어봤다. 이런식으로 저장되어있음
![](%EC%98%88%EC%A0%9C%EC%97%B0%EC%8A%B5/imageData.data.JPG)

---

자세한 용법은 실습파일 참조!!!
- [Canvas 실습](%EC%98%88%EC%A0%9C%EC%97%B0%EC%8A%B5/Canvas.html)
- [픽셀제어 실습](/JavaScript/%EC%98%88%EC%A0%9C%EC%97%B0%EC%8A%B5/%ED%94%BD%EC%85%80%EC%A0%9C%EC%96%B4.html)


---

<Canvas 정리>

Canvas는 저수준 API다. 브라우저에 모양을 그릴수 있게 한다.
- *필요한 요소:*
- HTML > canvas 요소 : canvas 태그와 사이즈를 정해준다. css로 사이즈를 줄 수도 있긴 하지만 브라우저에 따라 왜곡될 수 잇으므로 HTML 속성이나 DOM으로 설정해주는게 좋다고 한다.
> 모양을 그릴 캔버스를 딱.. 도화지를 마련해주는 작업

- 자바스크립트 > canvas의 렌더링 컨텍스트 

렌더링을 해줄 canvas 객체의 메서드. 인수로 "2d" 를 준다. 변수이름은 ctx로 쓰는것이 관행이다. 이렇게 까지 하면 준비가 끝났다

> 이제 손에 펜을 들었다고 생각하고, moveTo(x좌표,y좌표)로 도형을 그릴 시작점을 찍는다.
  lineTo(x좌표,y좌표)로 시작점과 이어줄 점을 찍는다. 이 다음 stroke()를 해주면 선을 그을수있다. lineTo()대신 arc()로 원호를 그릴 수도 있고 arcTo()로 둥근 모서리를 그릴수도 있다.

- 둥근 사각형이라던지, 여러 모형을 여러개 그려야 하는 경우 이런 메소드들을 조합해서
  도형을 랜더링 하는 함수를 만들어 호출해서 사용하면 편리하다!

