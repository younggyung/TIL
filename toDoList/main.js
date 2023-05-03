//유저가 값을 입력한다.
//+버튼을 클릭하면 아이템추가
//delete 버튼 누르면 할일 삭제
//check버튼 누르면 할일이 끝나면서 취소선
  //1.버튼 누름에 따라 객체의 isComplete가 true false로 바뀌기
  //2.true일때 취소선 / false일때 그대로 
//메뉴탭을 누를때 마다 언더바 이동
//각각의 상태에 맞게 아이템 표시
//전체탭을 누르면 다시 전체 아이템으로 돌아옴
let filteredList=[];
let mode ='all';
let taskList = [];
let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
addButton.addEventListener("click",addTask);
let tabs = document.querySelectorAll(".task-tabs div")
for(let i = 1; i<tabs.length;i++){
  tabs[i].addEventListener("click",function(event){filter(event)});
}

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
  let list =[];
  if(mode =='all'){
    list = taskList;
  }else if(mode =='inprogress'){
    list = filteredList;
  }else if(mode =='done'){
    list = filteredList;
  }

  let resultHTML ='';
  for(let i = 0 ; i<list.length; i++){
    if(list[i].isComplete == true){
      resultHTML += `<div class="task">
      <div class="task-done">${list[i].taskContent}</div>
        <div class="buttons">
          <button onclick="check('${list[i].id}')"><img src="images/check.png"></button>
          <button onclick="deleteTask('${list[i].id}')"><img src="images/trash.png"></button>
          </div>
        </div>`;
    }else{
    resultHTML += `<div class="task">
    <div>${list[i].taskContent}</div>
      <div class="buttons">
        <button onclick="check('${list[i].id}')"><img src="images/check.png"></button>
        <button onclick="deleteTask('${list[i].id}')"><img src="images/trash.png"></button>
      </div>
    </div>`
  }
}
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


function filter(event){
  mode = event.target.id;
  filteredList = [];
  document.getElementById("underLine").style.width = event.target.offsetWidth + "px";
  document.getElementById("underLine").style.top = event.target.offsetTop + event.target.offsetHeight + "px";
  document.getElementById("underLine").style.left = event.target.offsetLeft + "px";
  
  if(mode == 'all'){
    render();
  }else if(mode =='inprogress'){
    for(let i = 0; i<taskList.length;i++){
      if(taskList[i].isComplete == false){
        filteredList.push(taskList[i]);
      }
    }
    render();
  }else if(mode =='done'){
    for(let i=0; i<taskList.length; i++){
      if(taskList[i].isComplete == true){
        filteredList.push(taskList[i]);
      }
    }
  }render();
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

