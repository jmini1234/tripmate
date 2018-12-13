function initFirebaseAuth() {
  // Listen to auth state changes.
  firebase.auth().onAuthStateChanged(authStateObserver);
  console.log(firebase.auth());
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
//header에 user-pic, username 보이기
function authStateObserver(user) {
  if (user) { // User is signed in!
    // Get the signed-in user's profile pic and name.
    var profilePicUrl = getProfilePicUrl();
    var userName = getUserName();

    // Set the user's profile pic and name.
    userPicElement.style.backgroundImage = 'url(' + profilePicUrl + ')';
    userNameElement.textContent = userName;

    // Show user's profile and sign-out button.
    userNameElement.removeAttribute('hidden');
    userPicElement.removeAttribute('hidden');

    // Hide sign-in button.

    // We save the Firebase Messaging Device token and enable notifications.

    saveMessagingDeviceToken();

  } else { // User is signed out!
    // Hide user's profile and sign-out button.
    userNameElement.setAttribute('hidden', 'true');
    userPicElement.setAttribute('hidden', 'true');


    // Show sign-in button.

  }
}

function saveUserStatus(clickRoom){

  firebase.database().ref('/status/'+getUserName()+'/location').set({
    status: clickRoom
  }).catch(function(error) {
    console.error('Error writing new message to Firebase Database', error);
  });


  location.href = './main.html';
}


function listening(roomlist){
  for(var room in roomlist){
    var listevent = document.getElementById(roomlist[room]);
    if(listevent){
      listevent.addEventListener('click',function(e){
        console.log(e.srcElement.id);
        saveUserStatus(e.srcElement.id);

      });
    }
  }
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

var List_TEMPLATE_BEFORE =
      "<li class='mdl-list__item'>" +
        "<span class='mdl-list__item-primary-content'>"+
          "<i class='material-icons mdl-list__item-icon'>chat</i>"+
          "<a class='name'  href='#'";
var List_TEMPLATE_AFTER =
      ">go</a>"+
        '</span>'+
      '</li>';

function displayList(roomlist) {
  console.log(roomlist);
  // roomlist = ["Seoul", "Newyork", "Busan"];
  var htmlelt = document.getElementById("lists");

  for(var room in roomlist){
    var divtag = document.createElement( 'div' );
    divtag.innerHTML = List_TEMPLATE_BEFORE + "id = "+roomlist[room]+List_TEMPLATE_AFTER;
    divtag.querySelector('.name').innerHTML = roomlist[room];
    htmlelt.appendChild(divtag);
  }
  listening(roomlist);
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

setTimeout(5000);
