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
  
  