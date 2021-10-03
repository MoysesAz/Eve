/*
var robot = document.getElementById('robot')
let head = document.getElementById('head')
let chest = document.getElementById('chest')
let plant = document.getElementById('plant')
let armLeft = document.getElementById('arm-left')
let armRight = document.getElementById('arm-right')
let armLeft = document.getElementById('arm-left')
let armRight = document.getElementById('arm-right')
let eyes = document.getElementsByClassName('eyes')
let arms = document.getElementsByClassName('arms')
*/


function powerOn(){
    let robot = document.getElementById('robot');
    let chest = document.getElementById('chest');
    let displayHead = document.getElementById('display-head');
    let eyes = document.getElementsByClassName('eyes')
    let arms = document.getElementsByClassName('arms')


    robot.style.animation = 'robot-propulsion-0 1s infinite alternate';
    setTimeout(()=>{
        chest.style.animation = 'chest-luminosity 1s 8 alternate-reverse';
        eyes[0].style.animation = 'eyes-luminosity 1s 6 alternate-reverse';
        eyes[1].style.animation = 'eyes-luminosity 1s 6 alternate-reverse';
        displayHead.style.animation = 'display-head-luminosity 1s 6 alternate-reverse';
        arms[0].style.animation = 'arm-left-luminosity 1s 6 alternate'
        arms[1].style.animation = 'arm-right-luminosity 1s 6 alternate'
    }, 2000);
    setTimeout(()=>{
        eyes[0].style.backgroundColor = 'var(--primary-color)';
        eyes[1].style.backgroundColor = 'var(--primary-color)';
        displayHead.style.boxShadow = 'none';

    }, 7000);
    setTimeout(()=>{
        chest.style.animation = 'chest-breathing 1s infinite alternate-reverse';
    }, 10000)

}

function powerOff(){
    let robot = document.getElementById('robot');
    let chest = document.getElementById('chest');
    let displayHead = document.getElementById('display-head');
    let eyes = document.getElementsByClassName('eyes');

    robot.style.animation = 'robot-propulsion-1 4s 1 alternate';
    displayHead.style.animation = 'display-head-luminosity 1s 2 alternate-reverse';
    chest.style.animation = 'chest-breathing 1s 1 alternate-reverse';  
    setTimeout(()=>{
        eyes[0].style.backgroundColor = 'var(--shawdom)';
        eyes[1].style.backgroundColor = 'var(--shawdom)';
        displayHead.style.boxShadow = '0 5px 1px var(--shawdom)';    
    }, 4000);  

}