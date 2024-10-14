let index = 0;
let images = document.querySelectorAll('img')   
let buttonContainer = document.getElementById('numbers')
let buttons = []
let indicator = document.getElementById('indicator')
for(let i = 0; i <images.length;i++){
    let Button = document.createElement('button')
    Button.textContent = i + 1
    buttonContainer.appendChild(Button)
    buttons.push(Button)
}
buttons[0].classList.add('active')
images[0].classList.add('visible')
let next = document.getElementById('next')
let prev = document.getElementById('prev')
//////////////////////////////////////////////////////
indicator.textContent = "Image number # " + (index + 1)

// next function
if(index == images.length - 1)
next.disabled = true 

function Next(){
    prev.disabled = false   
    if(index < images.length - 1){
        console.log(index)


        next.disabled = false
        console.log(index)
        images[index].classList.remove('visible')
        buttons[index].classList.remove('active')
        index++
        images[index].classList.add('visible')
        buttons[index].classList.add('active')
        indicator.textContent = "Image number # " + (index + 1)
        if(index == images.length - 1)
            next.disabled = true 
    }
}
// prev function
if(index == 0)
    prev.disabled = true
function Prev(){
    next.disabled = false

    if(index > 0){
    
        prev.disabled = false   
        images[index].classList.remove('visible')
        buttons[index].classList.remove('active')
        index--
        images[index].classList.add('visible')
        buttons[index].classList.add('active')
        indicator.textContent = "Image number # " + (index + 1)
        if(index == 0)
            prev.disabled = true   
            
    }
}
// button function 
function moving(target){
    if(target == images.length - 1)
    {
        next.disabled = true
        prev.disabled = false 
    }   
    else if(target == 0){
        prev.disabled = true
        next.disabled = false
    }
    else{
        next.disabled = false
        prev.disabled = false
    }
    console.log(index)
    console.log(target)
    images[index].classList.remove('visible')
    buttons[index].classList.remove('active')
    index = target
    images[index].classList.add('visible')
    buttons[index].classList.add('active')
    indicator.textContent = "Image number # " + (index + 1)

}
console.log(buttons)
///////////////////////////////////////////////////////

document.getElementById('next').addEventListener('click',() => Next())
document.getElementById('prev').addEventListener('click',() => Prev())
for(let i = 0; i < buttons.length;i++){
    buttons[i].addEventListener('click', () => {moving(i)})
}