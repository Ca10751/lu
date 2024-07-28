
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem',window.scrollY > 498)
})

let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carrosselDom = document.querySelector('.carrossel');
let listaitemDom = document.querySelector('.carrossel .lista');
let tumbnailDom = document.querySelector('.carrossel .tumbnail')

nextDom.onclick = function(){
    showSlider('next');
}

prevDom.onclick = function(){
    showSlider('prev');
}

let timeRunning = 500;
let timeAutoNext = 9000;
let runTimeOut;
let runAutoRun = setTimeout (()=> {
    nextDom.click();
}, timeAutoNext) ;

function showSlider(type){
    let itemSlider = document.querySelectorAll('.carrossel .lista .item')
    let itemtumbnail = document.querySelectorAll('.carrossel .tumbnail .item')

    if(type === 'next'){
        listaitemDom.appendChild(itemSlider [0]);
        tumbnailDom.appendChild(itemtumbnail[0])
        carrosselDom.classList.add('next');
    }else{
        let positionLastitem = itemSlider.length -1;
        listaitemDom.prepend(itemSlider[positionLastitem]);
        tumbnailDom.prepend(itemtumbnail[positionLastitem])
        carrosselDom.classList.add('prev')
    }

    clearTimeout(runTimeOut)
    runTimeOut = setTimeout(() => {
        carrosselDom.classList.remove('next');
        carrosselDom.classList.remove('prev');
    }, timeRunning)

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout (()=> {
        nextDom.click();
    }, timeAutoNext)

}