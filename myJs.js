var framDiv = document.getElementsByClassName("fram");
var picDiv = document.getElementsByClassName("pic");
var aboutDiv = document.getElementsByClassName("about");
var uMyList = document.getElementById("myList");
var options = document.getElementById("opit");
var ch = "none";


var myImages = [
{
	name:"Turtle1",
	src:"https://turokami.github.io/cpit405-assignment-2/turtle1.jpg",
	href:"https://turokami.github.io/cpit405-assignment-2/pic.htm",
	uploadeDate: '22 August 2018'
	
},
{
	name:"Turtle2",
	src:"https://turokami.github.io/cpit405-assignment-2/turtle2.jpg",
	href:"https://turokami.github.io/cpit405-assignment-2/pic2.htm",
	uploadeDate: '20 August 2018'
	
},
{
	name:"Turtle3",
	src:"https://turokami.github.io/cpit405-assignment-2/turtle3.jpg",
	href:"https://turokami.github.io/cpit405-assignment-2/pic3.htm",
	uploadeDate: '15 May 2018'
	
},
{
	name:"Turtle4",
	src:"https://turokami.github.io/cpit405-assignment-2/turtle4.jpg",
	href:"https://turokami.github.io/cpit405-assignment-2/pic4.htm",
	uploadeDate: '16 June 2018'
	
},
{
	name:"Turtle5",
	src:"https://turokami.github.io/cpit405-assignment-2/turtle5.jpg",
	href:"https://turokami.github.io/cpit405-assignment-2/pic5.htm",
	uploadeDate: '14 July 2018'
	
},
{
	name:"Turtle6",
	src:"https://turokami.github.io/cpit405-assignment-2/turtle6.jpg",
	href:"https://turokami.github.io/cpit405-assignment-2/pic6.htm",
	uploadeDate: '19 September 2018'
	
},
{
	name:"Turtle7",
	src:"https://turokami.github.io/cpit405-assignment-2/turtle7.jpg",
	href:"https://turokami.github.io/cpit405-assignment-2/pic7.htm",
	uploadeDate: '25 September 2018'
	
},
{
	name:"Turtle8",
	src:"https://turokami.github.io/cpit405-assignment-2/turtle8.jpg",
	href:"https://turokami.github.io/cpit405-assignment-2/pic8.htm",
	uploadeDate: '12 April 2018'
	
},
{
	name:"Turtle9",
	src:"https://turokami.github.io/cpit405-assignment-2/turtle9.jpg",
	href:"https://turokami.github.io/cpit405-assignment-2/pic9.htm",
	uploadeDate: '10 February 2018'
	
},
{
	name:"Turtle10",
	src:"https://turokami.github.io/cpit405-assignment-2/turtle10.jpg",
	href:"https://turokami.github.io/cpit405-assignment-2/pic10.htm",
	uploadeDate: "20 February 2018"
	
},
{
	name:"Turtle11",
	src:"https://turokami.github.io/cpit405-assignment-2/turtle11.jpg",
	href:"https://turokami.github.io/cpit405-assignment-2/pic11.htm",
	uploadeDate: '12 March 2018'
	
},
{
	name:"Turtle12",
	src:"https://turokami.github.io/cpit405-assignment-2/turtle12.jpg",
	href:"https://turokami.github.io/cpit405-assignment-2/pic12.htm",
	uploadeDate: '11 Octobr 2018'
	
},
{
	name:"Turtle13",
	src:"https://turokami.github.io/cpit405-assignment-2/turtle13.jpg",
	href:"https://turokami.github.io/cpit405-assignment-2/pic13.htm",
	uploadeDate: '15 Octobr 2018'
	
}]





function genThePage() {

var i;

for ( i=0; i < myImages.length ; i = i+1){
	
	var divImage = document.createElement("img"),
	divLink = document.createElement("a");
	
	divLink.href = myImages[i].href;
	divImage.src = myImages[i].src;
	
	
	
	
	divLink.appendChild(divImage);
	picDiv[i].appendChild(divLink);
	var myText = document.createTextNode(myImages[i].name);
	
	aboutDiv[i].appendChild(myText);
	picDiv[i].appendChild(aboutDiv[i]);
	
	framDiv[i].appendChild(picDiv[i]);
	
	
}	

	
	
	
}
genThePage();


options.onchange = function (){
	
	if(options.value == "Size"){
		ch = "Size";
	
		
	}
	else if(options.value == "Newest"){
		ch = "Newest";
				myImages.sort(function(a, b) {
    var dateA = new Date(a.uploadeDate), dateB = new Date(b.uploadeDate);
    return dateB - dateA ;
});
		

genThePage();


	}
	else if(options.value == "Oldest"){
		
		ch = "Oldest";
		
				myImages.sort(function(a, b) {
    var dateA = new Date(a.uploadeDate), dateB = new Date(b.uploadeDate);
    return dateA - dateB;
});
genThePage();
		
	}
	else {
		
      ch = "none"
	  genThePage();
	}
}



/*
function genAfterSort() {
	
	
	

var i ,j,k;


for ( i=0; i < framDiv.length ; i = i+1){
	
	for ( j=0; j < picDiv.length ; j = j+1){
	
	for ( k=0; k < aboutDiv.length ; k = k+1){
	
	
	aboutDiv.removeChild(aboutDiv.childNodes[i];
	
}
	
	
	
}
	
	
	
}







for ( i=0; i < myImages.length ; i = i+1){
	
	var divImage = document.createElement("img"),
	divLink = document.createElement("a");
	
	divLink.href = myImages[i].href;
	divImage.src = myImages[i].src;
	
	
	
	
	divLink.appendChild(divImage);
	picDiv[i].appendChild(divLink);
	var myText = document.createTextNode(myImages[i].name);
	
	aboutDiv[i].appendChild(myText);
	picDiv[i].appendChild(aboutDiv[i]);
	
	framDiv[i].appendChild(picDiv[i]);
	
	
}	

	
	
	
}*/


