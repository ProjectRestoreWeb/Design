//Sign Out of Account
firebase.auth().signOut().then(function()
{
console.log("signed out");
}).catch(function(error) {
// An error happened.
});

function createUser()
{
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode + " " + errorMessage);
    });
}
