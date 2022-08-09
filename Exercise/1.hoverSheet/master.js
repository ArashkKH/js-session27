// lets get the cordinates in 2 variables
let x,y

// lets have some custome cordinates for our box
let boxX,boxY,rotateRange
rotateRange = 45
let box = document.getElementsByClassName('box')[0]
document.getElementsByTagName('html')[0].addEventListener('mousemove',(Event)=>{
    x = Event.clientX
    y = Event.clientY
    boxX = x - (box.offsetLeft)
    boxY = y - (box.offsetTop)
    document.getElementById('x').innerHTML = boxX
    document.getElementById('y').innerHTML = boxY
        
    // console.log((((boxX-(box.clientWidth)/2)/box.clientWidth)*90))
    // 👆👆this will give an output in range of -45 to +45 based on x and y client when the cursore is inside the .box

    //cursor
    bigcur.style.top=y+'px'
    bigcur.style.left=x+'px'
    lilcur.style.top=y+'px'
    lilcur.style.left=x+'px'
})

document.getElementsByTagName('html')[0].addEventListener('mousedown',()=>{
    lilcur.style.transform='translate(-50%,-50%)scale(15)'
    bigcur.style.borderRadius='5px'
    bigcur.style.transform='translate(-50%,-50%)scale(0.4)'
    bigcur.style.border='solid 20px rgb(255, 255, 255)'
})
document.getElementsByTagName('html')[0].addEventListener('mouseup',()=>{
    lilcur.style.transform='scale(1) translate(-50%,-50%)'
    bigcur.style.borderRadius='50%'
    bigcur.style.transform='translate(-50%,-50%)scale(1)'
    bigcur.style.border='solid 2px rgb(255, 255, 255)'
})

let bigcur,lilcur
bigcur = document.getElementById('cursor')
lilcur = document.getElementById('lilcursor')

box.addEventListener('mousemove',()=>{
    box.style.transform='rotateY('+(180+((boxX-(box.clientWidth)/2)/box.clientWidth)*rotateRange)+'deg)rotateX('+(180+((boxY-(box.clientHeight)/2)/box.clientHeight)*rotateRange)+'deg)'
    box.style.transition='0.1s'

})

document.getElementsByTagName('main')[0].addEventListener('mouseover',()=>{
    box.style.transition='0.4s'
    box.style.transform='rotateY(180deg)rotateX(180deg)'
    // alert('hi')
})





