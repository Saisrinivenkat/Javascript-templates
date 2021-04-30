const signal = "Green"
const p1 = new Promise((resolve,reject)=>{
  if (signal == "Green"){
    resolve({
      name : "Disha",
      Age : "21"
    })
  }
  else{
    reject({
      name : "No one",
      Age : "Buck"
    })
  }
})

function printer(message){
  console.log("Name of her: " + message.name)
  console.log("Age of her: " + message.Age)
}

p1.then((message) => printer(message)).catch((message)=>printer(message))