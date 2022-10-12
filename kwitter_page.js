//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyD_2JjiI3Ds9UzNVI6XHZ4H9hoDCeIG_kQ",
      authDomain: "kwitter-e3dbd.firebaseapp.com",
      databaseURL: "https://kwitter-e3dbd-default-rtdb.firebaseio.com",
      projectId: "kwitter-e3dbd",
      storageBucket: "kwitter-e3dbd.appspot.com",
      messagingSenderId: "629125945458",
      appId: "1:629125945458:web:e2e52afd49557a496c4aeb"
};

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}

function getData() { 
         firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
         
//End code
      } });  }); }
getData();
