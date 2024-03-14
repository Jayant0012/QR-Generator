let input = document.getElementById('input')
let generateBtn = document.getElementById('generateBtn')
let main = document.querySelector('main')
let img = document.getElementById('img')




function generateQrCode(){
  if(!input.value) return
  generateBtn.textContent = "Generating..."
  img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`

  img.onload = ()=>{
  generateBtn.textContent = "Generate"
  main.classList.add('show')
  }
}


function download(){
  fetch(img.src)
  .then(response=>{
    return response.blob()
  })
  .then(blob=>{
  let imgUrl = URL.createObjectURL(blob)
  let a = document.createElement('a')
  a.href = imgUrl
  a.download = "Qrcode"
  a.click()

  })
}