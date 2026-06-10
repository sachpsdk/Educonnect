const btn =
document.getElementById("darkModeBtn");

if(btn){

btn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

});

}

window.onscroll=function(){

scrollFunction();

};

function scrollFunction(){

let topBtn =
document.getElementById("topBtn");

if(document.body.scrollTop > 200 ||
document.documentElement.scrollTop > 200){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

}

function topFunction(){

document.body.scrollTop=0;

document.documentElement.scrollTop=0;

}function checkMathQuiz(){

let score=0;

if(document.querySelector('input[name="q1"]:checked')?.value=="40")
score++;

if(document.querySelector('input[name="q2"]:checked')?.value=="5")
score++;

if(document.querySelector('input[name="q3"]:checked')?.value=="4")
score++;

document.getElementById("mathResult").innerHTML=
"Your Score: "+score+"/3";

}
let images=[
"images/slide1.jpg",
"images/slide2.jpg",
"images/slide3.jpg"
];

let current=0;

setInterval(function(){

current++;

if(current>=images.length){
current=0;
}

let slide=document.getElementById("slide");

if(slide){
slide.src=images[current];
}

},3000);
function searchSite(){

let search=
document.getElementById("searchBox")
.value.toLowerCase();

if(search=="mathematics")
window.location="mathematics.html";

else if(search=="english")
window.location="english.html";

else if(search=="computer studies")
window.location="computer_studies.html";

else
alert("Subject Not Found");

}