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
var openList = "<li class='partner'>"; //Declare a variable to contain open list tag
var closeList = "</li>"; //Declare a variable to contain an close list tag

for (var i = 0; i < 6; i++) {
  fileNames.push("partner-" + (i + 1)); //Create image file name and store in the array
  photos.push(
    "<img src='images/partners/" + fileNames[i] + ".png' alt='" + attr[i] + "'>"
  ); //Assemble file name into image element and store in an array
  image = openList + photos[i] + closeList; //Assemble the image element from the array with list element stored in variables
  imageList.push(image); //Store(push) the assembled list codes into an array
}

//Display all six image codes stored in the array
document.getElementById("partners").innerHTML = imageList.join(" ");

//User interaction with table cells
$(document).ready(function () {
  $("td").click(function () {
    //user select a table data cell
    var content = $(this).text(); //get content of cell
    var colnum = $(this).index(); //get index number of selected cell
    var coltitle = $("th:eq(" + colnum + ")").text(); //using the index number to get heading of selected column

    if (content != "Not Available") {
      //check if content does not contain a particular string
      $(this).toggleClass("tdhighlight"); //add or remove class when cell is selected

      if ($(this).hasClass("tdhighlight")) {
        //check if selected cell has class
        $("#displaySelected").css("visibility", "visible"); //make display box visible
        $("#displaySelected").css("margin-top", "2em"); //add spaces above display box
        $("#result").append("<p>" + content + " at " + coltitle + "</p>"); //add child element with contents of cell & column heading
      } else {
        //if selected cell don't have class
        $("#result p:contains(" + content + ")").remove(); //remove child element

        if ($("#result").has("p").length == false) {
          //check if there are any child elements within parent
          $("#displaySelected").css("visibility", "hidden"); //make display box hidden
          $("#displaySelected").css("margin-top", "0"); //remove spaces above display box
        }
      }
    }
  });
});
