const sideBar = document.querySelector('.my-side')
const menu = document.querySelector('.btn');
const close = document.querySelector('.close')
const main = document.querySelector('.body')

menu.addEventListener('click', e=> {
   sideBar.classList.toggle('hide')
   main.classList.toggle('bg1')
});

close.addEventListener('click', e => {
   sideBar.classList.add('hide')
   main.classList.toggle('bg1')
})