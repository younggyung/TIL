//유저가 값을 입력한다.
//+버튼을 클릭하면 아이템추가
//delete 버튼 누르면 할일 삭제
//check버튼 누르면 할일이 끝나면서 취소선
  //1.버튼 누름에 따라 객체의 isComplete가 true false로 바뀌기
  //2.true일때 취소선 / false일때 그대로 
//메뉴탭을 누를때 마다 언더바 이동
//각각의 상태에 맞게 아이템 표시
//전체탭을 누르면 다시 전체 아이템으로 돌아옴
let taskList = [];
let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
addButton.addEventListener("click",addTask);

function addTask(){
  let task={
    taskContent:taskInput.value, 
    isComplete:false,
    id:randomIDGenerator()
    
          };
  taskList.push(task);
  console.log(taskList);
  render();
}


function render(){
document.getElementById("underLine").style["margin-left"]=0;
  let resultHTML ='';
  for(let i = 0 ; i<taskList.length; i++){
    if(taskList[i].isComplete == true){
      resultHTML += `<div class="task">
      <div class="task-done">${taskList[i].taskContent}</div>
        <div class="buttons">
          <button onclick="check('${taskList[i].id}')"><img src="images/check.png"></button>
          <button onclick="deleteTask('${taskList[i].id}')"><img src="images/trash.png"></button>
          </div>
        </div>`;
    }else{
    resultHTML += `<div class="task">
    <div>${taskList[i].taskContent}</div>
      <div class="buttons">
        <button onclick="check('${taskList[i].id}')"><img src="images/check.png"></button>
        <button onclick="deleteTask('${taskList[i].id}')"><img src="images/trash.png"></button>
      </div>
    </div>`
  }
}
//뿌려주기
  document.getElementById("task-board").innerHTML = resultHTML;
}

function check(id){
  for(let i = 0; i<taskList.length;i++){
    if(taskList[i].id==id){
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  render();
}

function deleteTask(id){
  for(let i = 0; i<taskList.length;i++){
  if(taskList[i].id == id){
    taskList.splice(i,1);
    break;
    }
  }
  render();
}

//엔터키로 추가
taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});

//랜덤한 id값 생성, check 버튼을 눌렀을때 어떤 오브젝트인지 식별하기 위해서 !
function randomIDGenerator(){
  return '_' + Math.random().toString(34).substring(2,9);
}

function ShowInProgress(){
  //언더바 이동
  document.getElementById("underLine").outerHTML = `<div id="underLine" style="margin-left: 70px;"></div>`;

  //필터링
  let resultHTML ='';
  for(let i = 0 ; i<taskList.length; i++){
    if(taskList[i].isComplete == false){
      resultHTML += `<div class="task">
      <div class="task">${taskList[i].taskContent}</div>
        <div class="buttons">
          <button onclick="check('${taskList[i].id}')"><img src="images/check.png"></button>
          <button onclick="deleteTask('${taskList[i].id}')"><img src="images/trash.png"></button>
          </div>
        </div>`;
    }
  }
  document.getElementById("task-board").innerHTML = resultHTML;
}


function ShowDone(){
  //언더바 이동
document.getElementById("underLine").outerHTML = `<div id="underLine" style="margin-left: 140px;"></div>`;
//필터링
  let resultHTML ='';
  for(let i = 0 ; i<taskList.length; i++){
    if(taskList[i].isComplete == true){
      resultHTML += `<div class="task">
      <div class="task-done">${taskList[i].taskContent}</div>
        <div class="buttons">
          <button onclick="check('${taskList[i].id}')"><img src="images/check.png"></button>
          <button onclick="deleteTask('${taskList[i].id}')"><img src="images/trash.png"></button>
          </div>
        </div>`;
    }
  }
  document.getElementById("task-board").innerHTML = resultHTML;
}

