/* ------ PARTNERS ------*/

var photos = []; //Declare an empty array to store image element
var fileNames = []; //Declare an empty element to store image file names
var imageList = []; //Declare an empty array to store html list that contain an image
var attr = [
  "Partner Bus Tours",
  "Partner Cabin Rental",
  "Partner Camping Adventure",
  "Partner College Tours",
  "Partner Bike Rentals",
  "Partner Tour Group",
];
var image; //Declare an empty variable to store the assembled image list codes
var openList = "<div class='partner'>"; //Declare a variable to contain open list tag
var closeList = "</div>"; //Declare a variable to contain an close list tag

for (var i = 0; i < 6; i++) {
  fileNames.push("partner-" + (i + 1)); //Create image file name and store in the array
  photos.push(
    "<img src='images/partners/" + fileNames[i] + ".png' alt='" + attr[i] + "'>"
  ); //Assemble file name into image element and store in an array
  image = openList + photos[i] + closeList; //Assemble the image element from the array with list element stored in variables
  imageList.push(image); //Store(push) the assembled list codes into an array
}

//Display all six image codes stored in the array
document.getElementById("partners").innerHTML = imageList.join("");
