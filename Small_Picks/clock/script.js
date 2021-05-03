setInterval(sethands,1000)
const hour = document.querySelector("[data-hour]")
const minute = document.querySelector("[data-minute]")
const second = document.querySelector("[data-second]")


function sethands(){
  const date = new Date();

  const secondsRatio = date.getSeconds() / 60
  const minutesRatio = (secondsRatio + date.getMinutes()) / 60
  const hoursRatio = (minutesRatio + date.getHours()) / 12
  setRotate(second,secondsRatio)
  setRotate(minute,minutesRatio)
  setRotate(hour,hoursRatio)
}


function setRotate(element,ratio){
  element.style.setProperty("--rotate",ratio * 360)
}

sethands()