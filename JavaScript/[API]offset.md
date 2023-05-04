#### offset 사용의 예
```js
  document.getElementById("underLine").style.width = event.target.offsetWidth + "px";
  document.getElementById("underLine").style.top = event.target.offsetTop + event.target.offsetHeight + "px";
  document.getElementById("underLine").style.left = event.target.offsetLeft + "px";
```
💚 목적 : 
메뉴를 클릭했을때 현재 클릭한 메뉴를 UI에 표시해주는 하단의 스크롤바를 만들고자 할때 사용.

- **코드 직독직해** : 다큐먼트에서 underLine이라는 id를 가진 객체를 가져와서, 그 객체의 스타일 프로퍼티의 width,top,left 프로퍼티에 값을 준다.
  - 어떤 값을 주냐? event 객체의 target , 그러니까 click이 일어난 target의 offsetWidth, offsetTop, offsetLeft의 값을 조작해서 줄건데! width에는 offsetWidth 값을 그대로 주고 , top에는 offsetTop과 offsetHeight를 더한 값을, 마지막으로 left에는 offsetLeft 값을 주겠다는 뜻.

     이렇게하면, 동적으로 사이즈를 측정해서 알맞게 원하는 요소를 배치할 수 있다.

#### offsetLeft, offsetTop, offsetWidth란?
 HTML DOM API 에서 제공하는 기하정보 관련 프로퍼티.
![이미지](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetWidth/dimensions-offset.png)

- HTMLElement.offsetHeight : read-only 프로퍼티로, 요소의 height를 반환한다. 만약 요소가 style.display : none 등으로  숨겨져있다면 0을 반환함

- HTMLElement.offsetLeft : read-only 프로퍼티. 왼쪽 경계선과 상위 노드의 왼쪽 경계선 사이의 거리를 픽셀 단위로 반환한다. 즉 해당 요소의 상위 요소 내에서의 상대적인 위치를 나타낸다.child 요소가 parent 요소 내에서 50px 왼쪽에 위치한다면, child.offsetLeft 값은 50이 된다.

- HTMLElement.offsetTop  : read-only 프로퍼티. 마찬가지로 HTML 요소의 위쪽 경계선과 상위 노드의 위쪽 경계선 사이의 거리를 픽셀단위로 반환. 

따라서 상대적으로 위치를 지정할 수 있기 때문에 event.target을 했을때의 값을 기준으로 해서 반영하면 클릭할때마다 다른 위치값을 줄 수 있다. width랑 left는 요소의 너비와 시작점만 가져가면 되므로 따로 조작해줄 필요가 없지만, `밑줄`을 긋는것이 목표이기 때문에, top은 요소의 height와, offsetTop(상대적인 위치)까지 더해서 반영해야 한다.