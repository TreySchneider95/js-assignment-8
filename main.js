let buttonTag = document.createElement('button')
buttonTag.innerHTML = 'Change Color'

let colorDiv = document.createElement('div')
colorDiv.style.border = "1px solid black"
colorDiv.style.height = '500px'
colorDiv.style.width = '500px'

changetag = document.createElement('h1')
changetag.innerHTML = "Change Me"

document.body.appendChild(buttonTag)
document.body.appendChild(colorDiv)
colorDiv.appendChild(changetag)


const randomColor = ()=>{
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}

buttonTag.addEventListener('click', (e)=>{
    e.preventDefault()
    colorDiv.style.color = randomColor()
})
