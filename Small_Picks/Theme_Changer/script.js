const btn = document.querySelector('.theme-btn')
const icon_cont = document.querySelector('.icons')

//console.log(icon_cont.style.getPropertyValue('--rotate'))

// console.log(btn)
btn.addEventListener('click',() => {
  document.body.classList.toggle('dark')

   const rotation = parseInt(getComputedStyle(icon_cont).getPropertyValue('--rotate'))
   icon_cont.style.setProperty('--rotate',rotation+180)
})