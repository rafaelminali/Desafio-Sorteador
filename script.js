const generateButton = document.querySelector("button")

function generateNumber () {
    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    const result = Math.floor(Math.random() * (max - min + 1)) + min
    
    const textDrawn = document.querySelector(".text-drawn")
    const numberDrawn = document.querySelector(".number-drawn")
    const boxNumber = document.querySelector(".box-number")

    textDrawn.innerHTML = "O número sorteado é:"
    boxNumber.style.backgroundColor = "#AEC346"
    boxNumber.style.width = "70px"
    boxNumber.style.height = "70px"
    numberDrawn.innerHTML = result

}

generateButton.addEventListener("click", generateNumber)