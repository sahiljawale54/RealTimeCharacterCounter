const textareaEl = document.getElementById("textarea")
const totalcharacterEl = document.getElementById("total-Character")
const remainingCharacterEl = document.getElementById("remaining-Character")

textareaEl.addEventListener("keyup" ,()=>{
  updatecounter()
})

const updatecounter = ()=>{
totalcharacterEl.innerText = textareaEl.value.length
remainingCharacterEl.innerText = textareaEl.getAttribute("maxlength") - textareaEl.value.length
}

updatecounter()