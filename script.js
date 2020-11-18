console.log("entrei")

let hello = document.querySelector('h1')
let world = document.querySelector('h2')
let input = document.querySelector('input')
let button = document.querySelector('button')

console.log(hello,world,input,button)

function cliquei(){
    event.preventDefault()
    world.innerHTML = input.value
}