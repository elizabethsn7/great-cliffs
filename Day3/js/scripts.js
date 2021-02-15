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
