const elTextInp = document.querySelector("#text")
const elCount = document.querySelector("#count")
const elBtn = document.querySelector("#btn")
const elTextContent = document.querySelector(".text_content")
elBtn.addEventListener("click", function(event){
    event.preventDefault()
    for(let i = 0; i < elCount.value; i++){
        elTextContent.textContent = elTextContent.textContent + elTextInp.value + " "
    }
})