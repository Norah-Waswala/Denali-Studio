function myFunction() {
    var design = document.getElementById("designer");
    design.onclick = function(event) {
        console.log (event)
    }
    if (design.style.display === "none") {
    } else {
      design.style.display = "none";
    }
    document.getElementById("designer").innerHTML=Event
// function myMessage() {
//   alert("thanks for the feedback")
//   document.getElementsByClassName("message").innerHTML= myMessage
  }