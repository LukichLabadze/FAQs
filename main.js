const button = document.querySelectorAll('.faq-icon')
const para = document.querySelectorAll('.dropdown-body')



button.forEach( (element, index) => {
  element.addEventListener('click', function(){
    if(para[index].classList.contains("open")){
      para[index].classList.remove("open")
      element.classList.remove("active")
    } else{
      para[index].classList.add("open")
      element.classList.add("active")
    }
    
  })
})