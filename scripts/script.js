let container = document.querySelector('.container')
let maskContainer = document.querySelector('.mask-container')
let maskImageContainer = document.querySelector('.mask-image-container')

let border = document.querySelector('.border')
let circle = document.querySelector('.circle')
let body = document.querySelector('body')

circle.style.draggable = true

circle.addEventListener('mousedown', () => {
    body.addEventListener('mousemove', moveSlider)
    body.addEventListener('mouseup', () => {
    body.removeEventListener('mousemove', moveSlider)
    })
})

function moveSlider(event) {
    maskContainer.style.width = event.pageX + 'px'
    border.style.left = event.pageX + 'px'
    circle.style.left = event.pageX + 'px'
}

// circle.ondrag = function(event){
//     console.log('dragging')
//     maskContainer.style.width = event.pageX + "px";
//     border.style.left = event.pageX + "px";
//     circle.style.left = event.pageX + "px";
// }

// circle.ondragend = function(event){
//     console.log('end dragging')
//     maskContainer.style.width = event.pageX + "px";
//     border.style.left = event.pageX + "px";
//     circle.style.left = event.pageX + "px";
// }

