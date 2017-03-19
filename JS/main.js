// Array of images to be displayed onClick of js-button
var images = [
  "http://68.media.tumblr.com/0266904a4d8b9ea09ab02be0124f4935/tumblr_mjkyalSYC91qkjjfoo1_500.gif",
  "http://68.media.tumblr.com/3684797e9c2a7589d71380c787093ce8/tumblr_mkfyozL0eF1qkjjfoo1_500.gif",
  "http://68.media.tumblr.com/62d569400dbf2182326e005cbb655946/tumblr_meujn5lII71rp8v27o1_500.gif",
  "http://68.media.tumblr.com/tumblr_mb4zh0lAsl1rrj10do1_500.gif",
  "http://68.media.tumblr.com/e9fe1cd252d38abfe3c50bfb03a72a68/tumblr_miv5ndxeoq1rrj10do1_500.gif",
  "http://68.media.tumblr.com/tumblr_mcti3oMWR31r81wceo1_500.jpg",
  "http://68.media.tumblr.com/tumblr_mcl5rm3x2n1r81wceo1_500.jpg",
  "http://68.media.tumblr.com/tumblr_mcl5qaJq771r81wceo1_500.jpg",
  "http://68.media.tumblr.com/tumblr_mcgq8cjE041r81wceo1_500.jpg",
  "http://68.media.tumblr.com/tumblr_mcgpoywtvm1rzi94yo1_500.jpg",
  "http://68.media.tumblr.com/tumblr_mcg8pqvarL1r81wceo1_500.jpg",
  "http://68.media.tumblr.com/tumblr_mcgq24lhv61r81wceo1_500.jpg",
  "http://68.media.tumblr.com/tumblr_mcg8miQdRT1r81wceo1_500.jpg",
  "http://68.media.tumblr.com/tumblr_mcg8o4z9JO1r81wceo1_500.jpg",
  "http://68.media.tumblr.com/tumblr_m1ahq8CFB41qm3wzuo1_500.gif",
  "http://68.media.tumblr.com/tumblr_mbtnsvghkU1rrj10do1_500.gif",
  "http://68.media.tumblr.com/tumblr_mauibiGYDR1qaa5poo1_500.jpg",
  "http://68.media.tumblr.com/tumblr_ma1ncnWTKH1rvq3t9o1_500.jpg",
  "http://68.media.tumblr.com/tumblr_m7m9fsfsf31rnjc8eo1_500.png",
  "http://68.media.tumblr.com/tumblr_m7buruUls91rzi94yo1_500.jpg",
  "http://68.media.tumblr.com/tumblr_m6xxl0JJlo1qbbkmco1_500.jpg",
  "http://68.media.tumblr.com/tumblr_m6n145H4451qbbkmco1_500.jpg",
  "http://68.media.tumblr.com/094265c255322f07319e19439cf3487f/tumblr_mqp4sya0za1suv9xao1_r1_500.jpg",
  "http://68.media.tumblr.com/7b3711db422f78cad8f08446f9e1ef87/tumblr_mvjfxi8IDD1sk1k58o1_500.jpg",
  "http://68.media.tumblr.com/82cba6d76afb8ad9dd0f4747ea390729/tumblr_mnam84GRVp1qbew9ro1_500.jpg",
  "http://68.media.tumblr.com/7fffb4d8e78f3e858577d7affde769ba/tumblr_mg56q80Y8l1qcn9pjo1_r3_500.jpg",
  "http://68.media.tumblr.com/tumblr_mebz0zU0lo1recwlxo1_500.jpg",
  "http://68.media.tumblr.com/tumblr_mdvgryAdju1r81wceo1_500.jpg",
];



// randomizing and diplaying image onClick funtion
init();

function random_image(images) {
  var random = randomize(images);
  while(images[random] === document.getElementById("blogImgs").src){
    random = randomize(images);
  }
  document.getElementById("blogImgs").src = images[random].toString();
}

function randomize(images){
  return Math.floor((Math.random() * (images.length)));
}

function init() {
  document.getElementById("blogImgs").addEventListener("onClick", function(){
    random_image(images);
  });
  random_image(images);
}



// Get the button, and when the user clicks on it, execute myFunction
document.getElementById("myBtn").onclick = function() {myFunction();};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}



// color array for changing ASCII text color
var colorArray = [
  "mediumpurple",
  "white",
];

var i = 0;
// function for changing ASCII text color
function chBackcolor()
{
    x=document.getElementById("js-button");
    x.style.color=colorArray[i++];
    if(i == colorArray.length) i = 0;
}
