
const botaoSun = document.querySelector('#change-theme') 
const tema = document.querySelector("#tema")
const img = document.querySelector('#img')


botaoSun.addEventListener('click', ()=>{
    
    if(botaoSun.checked){
    tema.setAttribute('data-theme','light')
    img.setAttribute('src',"../imagens/lua.png")
    }
    else{
        tema.setAttribute('data-theme','dark')
        img.setAttribute('src',"../imagens/sol.png")
    }
})


