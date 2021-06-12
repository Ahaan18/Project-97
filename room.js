var firebaseConfig = {
  apiKey: "AIzaSyB7NxXBWENEliCXoLhpShhRYTE2lXwfDKg",
  authDomain: "kwitterappproject.firebaseapp.com",
  databaseURL: "https://kwitterappproject-default-rtdb.firebaseio.com",
  projectId: "kwitterappproject",
  storageBucket: "kwitterappproject.appspot.com",
  messagingSenderId: "770576258359",
  appId: "1:770576258359:web:6315991ee4d9f9bf31f6b2",
  measurementId: "G-DM7BL01QP6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  function load(){
  b = localStorage.getItem("user");
  document.getElementById("localname").innerHTML = "Welcome "+b+"!";
  }
  function gotoroom(){
    c = document.getElementById("roomname").value;
    console.log("Roomname is: ",c);
    firebase.database().ref("/").child(c).update({
          purpose: "addingRoomName"
    });
    localStorage.setItem("roomname", c);
    window.location = "kwitter_chat.html"
}
function getData(){
  firebase.database().ref("/").on('value', function(snapshot){
    document.getElementById('output').innerHTML = "";
    snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Roomnames of a child: "+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >Room Name : "+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });
}
getData();
function redirectToRoomName(e){
  console.log(e);
  localStorage.setItem("roomname", e);
  window.location = "kwitter_chat.html"
}
function logout(){
  localStorage.removeItem("user");
  localStorage.removeItem("roomname");
  window.location = "index.html";
}