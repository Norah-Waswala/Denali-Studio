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


  function myDesign(){
    var des = document.getElementById("designer");
  }
  if (des.style.display == "none"){
    des.style.display = "block";
  }







  function myGallery() {
    var x = document.getElementById("slideshow");
    var y = document.getElementById("slideshow2");
    var w = document.getElementById("slideshow3");
    var z = document.getElementById("slideshow4");
    if (x.style.display == "none") {
        x.style.display = "block";
        y.style.display = "none";
        w.style.display = "none";
        z.style.display = "none";
    }
    else {
        x.style.display = "none";
    }
}