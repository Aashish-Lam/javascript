document.getElementById('title').getAttribute('id')
title.style.backgroundColor="purple"
title.style.borderRadius="20px"
title.innerHTML
title.textContent
title.innerText
// 
const tab = document.querySelector('ul')
let a= tab.querySelector('li')
a.textContent="five"
let tempList= document.querySelectorAll('li')
tempList[0].style.background='red'
tempList.forEach((li)=>{
    li.style.backgroundColor='green'
}

)
let cn=document.getElementsByClassName('Listclass')
let mycn =Array.from(cn)
mycn.forEach((li)=>{
    li.style.color='red'
})