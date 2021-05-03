const btn = Array.from(document.getElementsByClassName("btn"))[0]

offset = 50

btn.addEventListener('click', () => {
  alert("You won!! Hurray")
  window.close()
})

document.addEventListener('mousemove',(e) =>{
  x = e.pageX
  y = e.pageY
  buttonpos = btn.getBoundingClientRect()
  const distx = getDist(x,buttonpos.x,buttonpos.width)
  const disty = getDist(y,buttonpos.y,buttonpos.height)

  const horzoffset = buttonpos.width /2 + offset
  const vertoffset = buttonpos.height /2 + offset

  if (Math.abs(distx) <= horzoffset && Math.abs(disty) <= vertoffset) {
    changepos(
      buttonpos.x + horzoffset/distx *10,
      buttonpos.y + vertoffset/disty *10
    )
  }
  function changepos(x,y) {
    const widow = document.body.getBoundingClientRect()
    const bn = btn.getBoundingClientRect()
    if(getDist(widow.left,x,bn.width) < 0){
      x = widow.right - bn.width - offset
    }
    if(getDist(widow.right,x,bn.height) > 0){
      x = widow.left + offset
    }
    if(getDist(widow.top,y,bn.height) < 0){
      y = widow.bottom - bn.height - offset
    }
    if(getDist(widow.bottom,y,bn.height) > 0){
      y = widow.top + offset
    }
    btn.style.left = `${x}px`
    btn.style.top = `${y}px`
  }
})

function getDist(ml,bl,sl){
  return (bl-ml) + sl/2
}