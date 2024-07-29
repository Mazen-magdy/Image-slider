// making an array from the images
let imgs = Array.from(document.getElementsByTagName('img'));

//initializing the first img
let number = 1;
        console.log(number.toString())

// making the buttons;

    //Defining the container of the buttons ----------- 
        let container = document.getElementById('buttons')
    
    // Defining the buttons array
        let buttons = [];
    //creating the elements ------------
        imgs.forEach((element) => {
        console.log(element);
        let button = document.createElement('button');
        button.id = '1' + number; 
        let text = document.createTextNode(number)
        button.appendChild(text)
        container.appendChild(button);
        buttons.push(button)
        number++
        })
        console.log(buttons)
// Checking for the worst cases
        let initialValue = 1;
        // initializing next and prev
            let next = document.getElementById('next')
            let prev = document.getElementById('prev')
function checks(){
    if(initialValue === 1 || initialValue === imgs.length){
        if(initialValue === 1){
        //disabling the prev button
        prev.disabled = true
     }
        else{
        //disabling the next button
        next.disabled = true 
        }
    }
    else{
        next.disabled = false 
        prev.disabled = false 
    }
}
checks()


//initial img
document.getElementById('1' + initialValue).classList.add('active-button')


// making the action of the buttons 
    next.onclick = function(){
        let currentImg = document.getElementById(initialValue) // defining the img that will be modified
        console.log(initialValue) // debuging
        console.log(currentImg) //debuging
        let comingBut = document.getElementById('1' + (initialValue + 1)) // defining the button that will be active
        console.log(comingBut) //debuging
        buttons.forEach((x) =>{
        x.classList.remove('active-button')
    }) // reseting all buttons

        if(currentImg.classList.contains('enable-img-prev')){
            currentImg.classList.remove('enable-img-prev')
        }
        currentImg.classList.add('disabled-img-next')
        comingBut.classList.add('active-button')
        initialValue++
        checks()
    }
    
    // --------prev ----------------------------------------------------------------
    
    prev.onclick = function(){
        let comingImg = document.getElementById(initialValue - 1) // defining the img that will be modified
        console.log(initialValue) // debuging
        console.log(comingImg) //debuging
        let comingBut = document.getElementById('1' + (initialValue - 1)) // defining the button that will be active
        console.log(comingBut) //debuging
        buttons.forEach((x) =>{
        x.classList.remove('active-button')
    }) // reseting all buttons
        if(comingImg.classList.contains('disabled-img-next')){
            comingImg.classList.remove('disabled-img-next')
        }
        comingImg.style.zIndex = 3
        comingImg.classList.add('enable-img-prev')
        comingBut.classList.add('active-button')
        initialValue--
        checks()
    }

    // the spicific button
    buttons[0].onclick = () =>{
        buttons.forEach((x) =>{
            x.classList.remove('active-button')
        }) // reseting all buttons
        let IImg = document.getElementById(initialValue)
        let comingImg = document.getElementById(1) // defining the img that will be modified
        let comingBut = document.getElementById('11') // defining the button that will be active
        
        imgs.forEach((x) => {
            if(x == IImg){
            x.style.zIndex = 1
            }
            else{
            x.style.zIndex = 0
        }})
                
        comingImg.style.zIndex = 2;
        comingImg.classList.remove('enable-img-prev')

        comingImg.offsetWidth
        comingImg.classList.add('enable-img-prev')
        comingBut.classList.add('active-button')
        initialValue = 1
        checks()
    }
    buttons[1].onclick = () =>{
        buttons.forEach((x) =>{
            x.classList.remove('active-button')
        }) // reseting all buttons
        let IImg = document.getElementById(initialValue)
        let comingImg = document.getElementById(2) // defining the img that will be modified
        let comingBut = document.getElementById('12') // defining the button that will be active
        imgs.forEach((x) => {
            if(x == IImg){
            x.style.zIndex = 1
            }
            else{
            x.style.zIndex = 0
        }})
        comingImg.style.zIndex = 2;
        comingImg.classList.remove('enable-img-prev')

        comingImg.offsetWidth
        comingImg.classList.add('enable-img-prev')
        comingBut.classList.add('active-button')
      
        initialValue = 2
        checks()
    }
    buttons[2].onclick = () =>{
        buttons.forEach((x) =>{
            x.classList.remove('active-button')
        }) // reseting all buttons
        let IImg = document.getElementById(initialValue)
        let comingImg = document.getElementById(3) // defining the img that will be modified
        let comingBut = document.getElementById('13') // defining the button that will be active
        imgs.forEach((x) => {
            if(x == IImg){
            x.style.zIndex = 1
            }
            else{
            x.style.zIndex = 0
        }})

        comingImg.style.zIndex = 2;
        comingImg.classList.remove('enable-img-prev')

        comingImg.offsetWidth
        comingImg.classList.add('enable-img-prev')
        comingBut.classList.add('active-button')
        initialValue = 3
        
        checks()
    }
    buttons[3].onclick = () =>{
        buttons.forEach((x) =>{
            x.classList.remove('active-button')
        }) // reseting all buttons
        let IImg = document.getElementById(initialValue)
        let comingImg = document.getElementById(4) // defining the img that will be modified
        let comingBut = document.getElementById('14') // defining the button that will be active
        imgs.forEach((x) => {
            if(x == IImg){
            x.style.zIndex = 1
            }
            else{
            x.style.zIndex = 0
        }})

        comingImg.style.zIndex = 2;
        comingImg.classList.remove('enable-img-prev')

        comingImg.offsetWidth
        comingImg.classList.add('enable-img-prev')
        comingBut.classList.add('active-button')
       
        initialValue = 4
        checks()
    }
    