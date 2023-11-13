
const botaoSun = document.querySelector('#change-theme') 
const tema = document.querySelector("#tema")
const img = document.querySelector('#img')
const menu = document.querySelector('#imgMenu')



botaoSun.addEventListener('click', ()=>{
    
    if(botaoSun.checked){
    tema.setAttribute('data-theme','light')
    img.setAttribute('src',"imagens/lua.png")
    imgMenu.setAttribute('src','imagens/Menu-black.png')    
    }
    else{
        tema.setAttribute('data-theme','dark')
        img.setAttribute('src',"imagens/sol.png")
        imgMenu.setAttribute('src','imagens/Menu-white.png')
    }
})




