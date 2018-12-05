function initFirebaseAuth() {
  // Listen to auth state changes.
  firebase.auth().onAuthStateChanged(authStateObserver);
}
function authStateObserver(user) {
  if (user) {
    console.log("user is already");
  }
}

 // Saves the messaging device token to the datastore.
function saveMessagingDeviceToken() {
  firebase.messaging().getToken().then(function(currentToken) {
    if (currentToken) {
      console.log('Got FCM device token:', currentToken);
      // Saving the Device Token to the datastore.
      firebase.database().ref('/fcmTokens').child(currentToken)
          .set(firebase.auth().currentUser.uid);
    } else {
      // Need to request permissions to show notifications.
      requestNotificationsPermissions();
    }
  }).catch(function(error){
    console.error('Unable to get messaging token.', error);
  });
}
 function requestNotificationsPermissions() {
  console.log('Requesting notifications permission...');
  firebase.messaging().requestPermission().then(function() {
    // Notification permission granted.
    saveMessagingDeviceToken();
  }).catch(function(error) {
    console.error('Unable to get permission to notify.', error);
  });
}
 // Returns the signed-in user's profile Pic URL.
function getProfilePicUrl() {
  return firebase.auth().currentUser.photoURL || '/images/profile_placeholder.png';
}
 // Returns the signed-in user's display name.
function getUserName() {
  return firebase.auth().currentUser.displayName;
}
 // Loads chat messages history and listens for upcoming ones.
function loadList() {  // Loads the last 12 messages and listen for new ones.
  var callback = function(snap) {
    console.log(snap);
    var data = snap.val();
    var roomlist = [];
    for(var key in data){
       console.log("roomtest : "+ key);
      roomlist.push(key);
    }
    displayList(roomlist)
  };
  firebase.database().ref('messages/').limitToLast(12).on('value', callback);
}

var List_TEMPLATE =
  '<div id="list-container">' +
  "<a class='name' href ='main.html'>go</a>"
  '</div>';

function displayList(roomlist) {

  console.log(roomlist);

  var htmlelt = document.getElementById("lists");

  for(var room in roomlist){
    var divtag = document.createElement( 'div' );
    divtag.innerHTML = List_TEMPLATE;
    divtag.querySelector('.name').innerHTML = roomlist[room];
    htmlelt.appendChild(divtag);
  }

}
 // Shortcuts to DOM Elements.
var messageListElement = document.getElementById('messages');
var messageFormElement = document.getElementById('message-form');
var messageInputElement = document.getElementById('message');
var submitButtonElement = document.getElementById('submit');
var imageButtonElement = document.getElementById('submitImage');
var imageFormElement = document.getElementById('image-form');
var mediaCaptureElement = document.getElementById('mediaCapture');
var userPicElement = document.getElementById('user-pic');
var userNameElement = document.getElementById('user-name');
 initFirebaseAuth();
loadList();
