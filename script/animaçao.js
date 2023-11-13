const elements = document.querySelectorAll('.hidden')
const elements2 = document.querySelectorAll('.hidden-right')

const myObserver = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})

elements.forEach((element)=> myObserver.observe(element))

elements2.forEach((element)=> myObserver.observe(element))