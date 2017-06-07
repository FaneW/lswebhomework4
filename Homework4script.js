
// page background color
document.body.style.backgroundColor = "red";

// heading background color
document.getElementById("h1").style.backgroundColor = "blue";

// font
document.body.style.fontFamily = "sans-serif";

// nickname
document.getElementById("nickname"). innerHTML = "Heather";

// favorites
document.getElementById("favorites"). innerHTML = "HTML, CSS, JavaScript";

// hometown
document.getElementById("hometown").innerHTML = "Minneapolis, MN";


// change li to red
var list = document.getElementsByTagName("li");

for(i = 0; i < list.length; i++){
	list[i].style.color = "red";
	list[i].style.backgroundColor ="white";

}



// add image
var img = document.createElement("img");

img.src = "astronaut_for_sale.jpg";

document.body.appendChild(img);
