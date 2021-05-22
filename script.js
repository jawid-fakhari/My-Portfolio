var x = document.getElementById("menu");

function dropDown(e) {
    e.classList.toggle("change");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex"; 
    }
  }