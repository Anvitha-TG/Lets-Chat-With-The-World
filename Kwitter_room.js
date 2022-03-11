const firebaseConfig = {
    apiKey: "AIzaSyAl1LxGRR3RuKIaOT5KmwzhqBrYi9aPMRE",
    authDomain: "kwitter-practice-ac568.firebaseapp.com",
    databaseURL: "https://kwitter-practice-ac568-default-rtdb.firebaseio.com",
    projectId: "kwitter-practice-ac568",
    storageBucket: "kwitter-practice-ac568.appspot.com",
    messagingSenderId: "707955382273",
    appId: "1:707955382273:web:08f6de69095ea3747dc800",
    measurementId: "G-4QEC2C7K1G"
  };

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - " + Room_names);
   row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function addRoom() {
   room_name = document.getElementById("room_name").value;

   firebase.database().ref("/").child(room_name).uptate({
         purpose : "adding room name"
   });

     localStorage.setItem("room_name", room_name);

     window.location = "kwitter_page.html";
}


function redirectToRoomName(name){
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location= "kwitter_page.html"
}