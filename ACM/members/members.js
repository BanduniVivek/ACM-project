function myMenuFunction(){
    var i = document.getElementById("navMenu");
    var j = document.querySelector(".nav")

    if(i.className === "nav-menu"){
        i.className += " responsive";
        j.style.height= "95vh";
    } else{
        i.className = "nav-menu";
        j.style.height= "100px";
    }
}