const tabs = document.querySelectorAll("[data-target]")
const curtab = document.querySelectorAll('[data-cont]')

tabs.forEach((tab) => {
  tab.addEventListener('click',() => {
    const ele = document.querySelector(tab.dataset.target);
    curtab.forEach((ta) => {
      ta.classList.remove('active')
    })
    tabs.forEach((ta) => {
      ta.classList.remove('active')
    })
    ele.classList.add("active")
    tab.classList.add("active")
  })
  
})