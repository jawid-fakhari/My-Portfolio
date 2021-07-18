function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
    document.querySelectorAll('.hideOnClick').forEach(item => {
      item.addEventListener('click', hidePanel => {
        x.className = 'topnav';
      });
    });
} 