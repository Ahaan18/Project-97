function store(){
namee = document.getElementById("username").value;
localStorage.setItem("user", namee);
window.location = "room.html";
}