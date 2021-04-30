const user = document.getElementById('username')
const pass = document.getElementById('password')
const submit = document.querySelector('#btn')
const error = document.getElementById('error')

// console.log(user)
// console.log(pass)
// console.log(error)
//console.log(submit)

submit.addEventListener('click',(e)=>{
  errormsgs = []
  //console.log(errormsgs.length)
  if(pass.value == null || pass.value === ""){
    errormsgs.push('Password is Empty')
  }
  if(pass.value.length <= 5){
    errormsgs.push('Password cannot be less than 5 characters')
  }

  if(errormsgs.length > 0){
    e.preventDefault()
    error.innerText = errormsgs.join(', ')
  }
  if(errormsgs.length === 0){
    error.innerText = null
    console.log(error) 
  }
})

