"use strict";

let maxClick = 25;
let attempt = 0;
let arrayObject = [];
let arrayOfvote = [];
let arrayOfShown = [];
let arrayOfPictureName=[];
let arr=[0,0,0];
let leftImg = document.getElementById("leftImg");
let middleImg = document.getElementById("middleImg");
let rightImg = document.getElementById("rightImg");

function busMall(name, source) {
  this.name = name;
  this.source = source;
  this.vote = 0;
  this.numOfShown = 0;
  

  arrayObject.push(this);
  arrayOfPictureName.push(this.name);
}

new busMall("bag", "Imgs/bag.jpg");
new busMall("banana", "Imgs/banana.jpg");
new busMall("bathroom", "Imgs/bathroom.jpg");
new busMall("boots", "Imgs/boots.jpg");
new busMall("breakfast", "Imgs/breakfast.jpg");
new busMall("bubblegum", "Imgs/bubblegum.jpg");
new busMall("chair", "Imgs/chair.jpg");
new busMall("cthulhu", "Imgs/cthulhu.jpg");
new busMall("dog-duck", "Imgs/dog-duck.jpg");
new busMall("dragon", "Imgs/dragon.jpg");
new busMall("pen", "Imgs/pen.jpg");
new busMall("pet-sweep", "Imgs/pet-sweep.jpg");
new busMall("scissors", "Imgs/scissors.jpg");
new busMall("shark", "Imgs/shark.jpg");
new busMall("sweep", "Imgs/sweep.png");
new busMall("tauntaun", "Imgs/tauntaun.jpg");
new busMall("unicorn", "Imgs/unicorn.jpg");
new busMall("usb", "Imgs/usb.gif");
new busMall("water-can", "Imgs/water-can.jpg");
new busMall("wine-glass", "Imgs/wine-glass.jpg");

////////////three randome img
let leftImgIndex;
let middleImgIndex;
let rightImgIndex;

function testImage(index ,arr){
  for (let i =0 ; i < arr.length ; i++){
    if (arr[i]===index){
      return true;
    }
  }
return false;
}

let imageIndexFirst=[ leftImgIndex,middleImgIndex,rightImgIndex];

function renderThreeRandomImgs() {
  
    leftImgIndex=generatRandomIndex();
    middleImgIndex=generatRandomIndex();
    rightImgIndex=generatRandomIndex();

    let same =true;

   while(same){

  if (testImage( leftImgIndex,imageIndexFirst)) {
    leftImgIndex = generatRandomIndex();
    
  } else if (
    middleImgIndex === leftImgIndex ||testImage(middleImgIndex,imageIndexFirst)) {
    
      middleImgIndex = generatRandomIndex();
  
  } else if (
    rightImgIndex === leftImgIndex ||rightImgIndex === middleImgIndex||testImage(rightImgIndex,imageIndexFirst)) {
    
      rightImgIndex = generatRandomIndex();
    
  }

  else {same=false;}
   }
  console.log(leftImgIndex);
  console.log(middleImgIndex);
  console.log(rightImgIndex);

 arr[0]=leftImgIndex;
 arr[1]=middleImgIndex;
 arr[2]=rightImgIndex;

  let pictureLeft = document.getElementById("leftImg");

  let pictureMiddle = document.getElementById("middleImg");

  let pictureRight = document.getElementById("rightImg");

  pictureLeft.setAttribute("src", arrayObject[leftImgIndex].source);
  arrayObject[leftImgIndex].numOfShown++;

  pictureMiddle.setAttribute("src", arrayObject[middleImgIndex].source);
  arrayObject[middleImgIndex].numOfShown++;

  pictureRight.setAttribute("src", arrayObject[rightImgIndex].source);
  arrayObject[rightImgIndex].numOfShown++;
}

renderThreeRandomImgs();

// generat random value

function generatRandomIndex() {
  
  let randomIndex = Math.floor(Math.random() * arrayObject.length);
while(arr.includes(randomIndex)){
  randomIndex = Math.floor(Math.random() * arrayObject.length);
}
  return randomIndex;
}

leftImg.addEventListener("click", clickingOn);

middleImg.addEventListener("click", clickingOn);

rightImg.addEventListener("click", clickingOn);

/////// event on click

function clickingOn(event) {
   attempt++;

  console.log("event");
  if (attempt < maxClick) {
    // console.log(attempt)
    //attempt++;
   // console.lof('inside');
    if (event.target.id === "leftImg") {
      arrayObject[leftImgIndex].vote++;
    } else if (event.target.id === "middleImg") {
      arrayObject[middleImgIndex].vote++;
    } else if (event.target.id === "rightImg") {
      arrayObject[rightImgIndex].vote++;
    }
    savedNumberOfVotes();
    renderThreeRandomImgs();
  } else {
    leftImg.removeEventListener("click", clickingOn);

    middleImg.removeEventListener("click", clickingOn);

    rightImg.removeEventListener("click", clickingOn);

    //////creat un order list
    
    let unOrderList = document.getElementById("unOrderList");

    let li;
    for (let i = 0; i < arrayObject.length; i++) {
      li = document.createElement("li");
      unOrderList.appendChild(li);
      li.textContent = `${arrayObject[i].name} had ${arrayObject[i].vote} votes, and was seen
             ${arrayObject[i].numOfShown} times.`;
    }

    for (let v = 0; v < arrayObject.length; v++) {
      arrayOfvote.push(arrayObject[v].vote);
      arrayOfShown.push(arrayObject[v].numOfShown);
    }
    console.log(arrayOfShown);
    chartBusMall();
  }
  
  
  

 let resultButton = document.getElementById("bnt");
 resultButton.addEventListener("click", clickingOn);
}

function chartBusMall(){

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: arrayOfPictureName,
        datasets: [{
            label: 'Number Of Votes',
            backgroundColor: 'rgb(0, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: arrayOfvote
        },{

            label: 'Nmber Of Veiws',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: arrayOfShown
    }]
    },

  

    // Configuration options go here
    options: {}
});
//savedNumberOfVotes();
}

function savedNumberOfVotes(){

  let numberOfVotes = JSON.stringify(arrayObject);

  localStorage . setItem ('all my votes' , numberOfVotes);
}

function getVotes(){

  let  gettingVotes = localStorage .getItem('all my votes');
  let  votes= JSON.parse(gettingVotes);


  if (votes){

    arrayObject=votes;
  }

  else{

    votes=[];

  }
  clickingOn();

}
getVotes();




















