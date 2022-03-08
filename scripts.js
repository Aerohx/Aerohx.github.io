function myFunction() {
    var y = document.getElementById("topnav");
    if (y.className === "main-nav") {
      y.className += " responsive";
    } else {
      y.className = "main-nav";
    }
}