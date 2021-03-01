var firebaseConfig = {
      apiKey: "AIzaSyBXDyWfOeHH8O-VA2oQEKN4Bluke-pjrsw",
      authDomain: "kwitter-753df.firebaseapp.com",
      databaseURL: "https://kwitter-753df-default-rtdb.firebaseio.com",
      projectId: "kwitter-753df",
      storageBucket: "kwitter-753df.appspot.com",
      messagingSenderId: "212851813202",
      appId: "1:212851813202:web:659d27ae06de78b2f2a88b"
    };
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("Username: "); 

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function add_room(){

}