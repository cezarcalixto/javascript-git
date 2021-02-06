function initTabNav(){
    const tabNav = document.querySelectorAll('.tab-nav li')
  const tabContent = document.querySelectorAll('.tab-content section')
  
  if (tabNav.length && tabContent.length){
    tabContent[0].classList.add('ativo');
    
    function activeTab(index){
      tabContent.forEach((section)=>{
        section.classList.remove('ativo')
      })
      tabContent[index].classList.add('ativo')
    }
    tabNav.forEach((itemMenu, index)=>{
      itemMenu.addEventListener('click', ()=>{
        activeTab(index);
      })
    })
    
  }
  }
  initTabNav();
  
var ul = document.getElementById('myList')
console.log(ul)
var li;
var itemId;
var item;

addTask = function(){
  if (document.getElementById('task').value != ''){
    item = document.getElementById('task');
    itemId = ul.childElementCount;
    li = createItemElement(item.value, itemId);
    li.appendChild(createRemoveBtn(itemId));
    ul.appendChild(li)
    item.value='';
  }
}

removeTask = function(itemId){
  for (i = 0 ; i < ul.children.length ; i++){
    if (ul.children[i].getAttribute("index") == itemId){
      ul.children[i].remove();
    }
  }
}

createItemElement = function(itemValue, itemId){
let li = document.createElement('li')
li.setAttribute('index', itemId)
li.appendChild(document.createTextNode(itemValue));
return li;
}

createRemoveBtn = function(itemId){
let btn = document.createElement('button')
btn.setAttribute('onclick', "removeTask("+itemId+")");
btn.innerHTML = 'X';
btn.className += 'btn btn-light'
btn.classList.add('col-md-12')
return btn
}
  