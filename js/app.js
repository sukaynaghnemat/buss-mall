'use strict';

let maxClick=25;
let attempt=0;
let arrayObject=[];

let leftImg= document.getElementById('leftImg');
let middleImg= document.getElementById('middleImg');
let rightImg= document.getElementById('rightImg');

function busMall (name, source){
    this.name= name;
    this.source= source;
    this.vote=0;
    this.numOfShown =0;
    

    arrayObject.push(this);


}

new busMall ('bag', '/Imgs/bag.jpg');
new busMall ('banana', '/Imgs/banana.jpg');
new busMall ('bathroom', '/Imgs/bathroom.jpg');
new busMall ('boots', '/Imgs/boots.jpg');
new busMall ('breakfast', '/Imgs/breakfast.jpg');
new busMall ('bubblegum', '/Imgs/bubblegum.jpg');
new busMall ('chair', '/Imgs/chair.jpg');
new busMall ('cthulhu', '/Imgs/cthulhu.jpg');
new busMall ('dog-duck', '/Imgs/dog-duck.jpg');
new busMall ('dragon', '/Imgs/dragon.jpg');
new busMall ('pen', '/Imgs/pen.jpg');
new busMall ('pet-sweep', '/Imgs/pet-sweep.jpg');
new busMall ('scissors', '/Imgs/scissors.jpg');
new busMall ('shark', '/Imgs/shark.jpg');
new busMall ('sweep', '/Imgs/sweep.jpg');
new busMall ('tauntaun', '/Imgs/tauntaun.jpg');
new busMall ('unicorn', '/Imgs/unicorn.jpg');
new busMall ('usb', '/Imgs/usb.gif');
new busMall ('water-can', '/Imgs/water-can.jpg');
new busMall ('wine-glass', '/Imgs/wine-glass.jpg');


////////////three randome img


function renderThreeRandomImgs(){
    
    let leftImg = generatRandomIndex();
    let middleImg = generatRandomIndex();
    let rightImg = generatRandomIndex();

    if ( leftImg === middleImg || leftImg === rightImg){
        leftImg = generatRandomIndex();
        arrayObject[leftImgI].vote++;

    }
    else if ( middleImg === leftImg || middleImg === rightImg){

        middleImg = generatRandomIndex();
        arrayObject[leftImgI].vote++;

    }


    let pictureLeft = document.getElementById('leftImg');

    let pictureMiddle = document. getElementById ('middleImg');

    let pictureRight = document . getElementById ('rightImg');

    pictureLeft .setAttribute('src' , arrayObject[leftImg].source);
    
    pictureMiddle .setAttribute('src' , arrayObject[middleImg].source);
    
    pictureRight .setAttribute('src' , arrayObject[rightImg].source);
    






}



renderThreeRandomImgs();

// generat random value

function generatRandomIndex (){

     let randomIndex = Math.floor(Math.random() * arrayObject.length);

     return randomIndex;
}




 leftImg = addEventListener('click' , clickingOn);
 middleImg = addEventListener('click' , clickingOn);
 rightImg = addEventListener('click' , clickingOn);


/////// event on click

function clickingOn(event){

    attempt++;

    if(event.target.id === leftImg){

        arrayObject[leftImgIndex].vote++;


    }

    else if(event.target.id === middleImg){

        arrayObject[middleImgIndex].vote++;
    }

    else if (event.target.id === rightImg){


        arrayObject[rightImgtIndex].vote++;
    
    }
    else {
          //////creat un order list

        let unOrderList = document.getElementById('unOrderList');

        let li;
        for (let i=0 ; i< arrayObject.length ; i ++){

            li = document .createElement ('li');
            unOrderList.append(li);
            li . textContent= `${arrayObject[i].name} had ${arrayObject[i].vote} votes, and was seen
             ${arrayObject[i].numOfShown} times.`;

        }


    }
   

    leftImg .removeEventListener('click', clickingOn);
    middleImg .removeEventListener('click', clickingOn);
    rightImg .removeEventListener('click', clickingOn);

    let resultButton= document.getElementById('btn');
    resultButton.addEventListener('click' , clickingOn);
    


}
   


























































