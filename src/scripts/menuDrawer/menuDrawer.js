const btnBackPageMusic=document.querySelector('.btn-back')
const pageMusicMenu=document.querySelector('.page-music-menu')
const containerPageMusic=document.querySelector('.container-page-music')
const btnOpenMusic=document.querySelector('.btn-open-music')
const btnMainMenu=document.querySelector('.btn-menu')
const menuDrawer=document.querySelector('.menu-drawer')
const containerBodyMenu=document.querySelector(".container-body-menu")
const showFullPage=document.querySelector('.black-show-full')

btnMainMenu.addEventListener("click",()=>{
    menuDrawer.classList.toggle('open-menu-drawer')
    containerBodyMenu.classList.toggle('dispaly-container-menu')
    showFullPage.classList.toggle('none-display')
})

showFullPage.addEventListener("click",()=>{
    showFullPage.classList.toggle('none-display')
    menuDrawer.classList.toggle('open-menu-drawer')
    containerBodyMenu.classList.toggle('dispaly-container-menu')
    pageMusicMenu.classList.remove('open-page-music')
    containerPageMusic.classList.remove('open-contaienr-page-music')
})

btnBackPageMusic.addEventListener("click",()=>{
    pageMusicMenu.classList.toggle('open-page-music')
    containerPageMusic.classList.remove('open-contaienr-page-music')
})
btnOpenMusic.addEventListener("click",()=>{
    pageMusicMenu.classList.toggle('open-page-music')
    containerPageMusic.classList.add('open-contaienr-page-music')
})