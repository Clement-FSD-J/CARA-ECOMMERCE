const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

//activate nav bar for mobile size
if(bar){
    bar.addEventListener('click',() => {
        nav.classList.add('active')
    })
}

//to close the nav bar
if(close){
    close.addEventListener('click',() => {
        nav.classList.remove('active')
    })
}