
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyD_2JjiI3Ds9UzNVI6XHZ4H9hoDCeIG_kQ",
      authDomain: "kwitter-e3dbd.firebaseapp.com",
      databaseURL: "https://kwitter-e3dbd-default-rtdb.firebaseio.com",
      projectId: "kwitter-e3dbd",
      storageBucket: "kwitter-e3dbd.appspot.com",
      messagingSenderId: "629125945458",
      appId: "1:629125945458:web:e2e52afd49557a496c4aeb"
    };
    // Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
            document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
            window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}