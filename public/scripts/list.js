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

  // firebase.database().ref('messages/').limitToLast(12).on('child_added', callback);
  // firebase.database().ref('messages/').limitToLast(12).on('child_changed', callback);
 // firebase.database().ref('messages/room1/').limitToLast(12).on('child_added', callback);
  //firebase.database().ref('messages/room1/').limitToLast(12).on('child_changed', callback);
}


var LIST_TEMPLATE =
    '<div class="list-container">' +
      '<div class="list"></div>'
    '</div>';
function displayList(roomlist) {
  console.log(roomlist);


  for(var room in roomlist){
    var list  = document.createElement("li");
    var node = document.createTextNode(roomlist[room]);
    list.appendChild(node);
    // d
    //
    // var element = document.getElementById("ul")
    // element.appendChild(list);
    // // container.innerHTML = LIST_TEMPLATE;
    //
    //
    // container.innerHTML = room;
  }

  //
  // for(var i in list){
  //
  // }
  //
  // // If an element for that message does not exists yet we create it.
  // if (!div) {
  //   var container = document.createElement('div');
  //   container.innerHTML = MESSAGE_TEMPLATE;
  //   div = container.firstChild;
  //   div.setAttribute('id', key);
  //   div.InnerH
  // }
  // if (picUrl) {
  //   div.querySelector('.pic').style.backgroundImage = 'url(' + addSizeToGoogleProfilePic(picUrl) + ')';
  // }
  // div.querySelector('.name').textContent = name;
  // var messageElement = div.querySelector('.message');
  // if (text) { // If the message is text.
  //   messageElement.textContent = text;
  //   // Replace all line breaks by <br>.
  //   messageElement.innerHTML = messageElement.innerHTML.replace(/\n/g, '<br>');
  // } else if (imageUrl) { // If the message is an image.
  //   var image = document.createElement('img');
  //   image.addEventListener('load', function() {
  //     messageListElement.scrollTop = messageListElement.scrollHeight;
  //   });
  //   image.src = imageUrl + '&' + new Date().getTime();
  //   messageElement.innerHTML = '';
  //   messageElement.appendChild(image);
  // }
  // // Show the card fading-in and scroll to view the new message.
  // setTimeout(function() {div.classList.add('visible')}, 1);
  // messageListElement.scrollTop = messageListElement.scrollHeight;
  // messageInputElement.focus();
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
