'use strict'
let Lab1 =document.getElementById('lab1')
let Lab2 =document.getElementById('lab2')
let Lab3 =document.getElementById('lab3')


Lab1.addEventListener('click', function(){

    let header =document.getElementById('heading1')
    header.innerHTML="Software lab 3"

    let paragraph =document.getElementById('newParagraph')
    paragraph.innerText=""
    
    let line =document.createElement('p')
    let lineText =document.createTextNode('This is the lab brief for lab 3')
    line.appendChild(lineText)
    let labBrief =document.createElement('a')
    let labBriefLink =document.createTextNode('https://witseie.github.io/software-dev-3/docs/elen4010-lab3.pdf')
    labBrief.appendChild(labBriefLink)
    document.body.appendChild(line)
    document.body.appendChild(labBrief)

}, false)
