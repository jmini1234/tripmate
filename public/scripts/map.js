
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCWAVUAWvB-E0RlK07DTDqkpd0pBI7wYb0",
  authDomain: "friendychat-8920d.firebaseapp.com",
  databaseURL: "https://friendychat-8920d.firebaseio.com",
  projectId: "friendychat-8920d",
  storageBucket: "friendychat-8920d.appspot.com",
  messagingSenderId: "1046597658407"
};

firebase.initializeApp(config);

function initFirebaseAuth() {
  // Listen to auth state changes.
  firebase.auth().onAuthStateChanged(authStateObserver);
  console.log(firebase.auth());
}
function authStateObserver(user) {
  if (user) {
    console.log("user is already");
  }

  getProfilePicUrl();
  getUserName();
  inhtml();
  loadBook();
}

function inhtml(){
  var username = document.getElementById("username");
  username.innerHTML = getUserName();
  var userPicElement = document.getElementById('user-pic');

  var picUrl = getProfilePicUrl();
  userPicElement.setAttribute("src",picUrl);
 // userPicElement.style.backgroundImage = 'url(' + addSizeToGoogleProfilePic(picUrl) + ')';
}
 // Returns the signed-in user's profile Pic URL.
 function getProfilePicUrl() {
  return firebase.auth().currentUser.photoURL || '/images/profile_placeholder.png';
}
 // Returns the signed-in user's display name.
function getUserName() {
  return firebase.auth().currentUser.displayName;
}

initFirebaseAuth();


var map, infowindow, pos,geocoder;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 6
  });
  infowindow = new google.maps.InfoWindow;
  geocoder = new google.maps.Geocoder;

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infowindow.setPosition(pos);
      console.log(pos);
      infowindow.setContent('Location found.');
      infowindow.open(map);
      map.setCenter(pos);
      geocodeLatLng(geocoder, map, infowindow);
    }, function() {
      handleLocationError(true, infowindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infowindow, map.getCenter());
  }
}


var address;

function geocodeLatLng(geocoder, map, infowindow) {
        geocoder.geocode({'location': pos}, function(results, status) {
          if (status === 'OK') {
            if (results[0]) {
              map.setZoom(11);
              var marker = new google.maps.Marker({
                position: pos,
                map: map
              });
              
              infowindow.setContent(results[0].formatted_address);
              address=results[0].formatted_address;
              infowindow.open(map, marker);
              var lat = document.getElementById("location");
              lat.innerHTML = address;
      
            } else {
              window.alert('No results found');
            }
          } else {
            window.alert('Geocoder failed due to: ' + status);
          }
        });
      }




function handleLocationError(browserHasGeolocation, infowindow, pos) {
  infowindow.setPosition(pos);
  infowindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infowindow.open(map);
}

/**
* Reference to Firebase database.
* @const
*/
/**
* Data object to be written to Firebase.
*/
var data = {
  sender: null,
  timestamp: null,
  address: null
};

/**
* Starting point for running the program. Authenticates the user.
* @param {function()} onAuthSuccess - Called when authentication succeeds.
*/

function initAuthentication(onAuthSuccess) {
  firebase.authAnonymously(function(error, authData) {
    if (error) {
      console.log('Login Failed!', error);
    } else {
      data.sender = authData.uid;
      onAuthSuccess();
    }
  }, {remember: 'sessionOnly'});  // Users will get a new id for every session.
}


//bookmark

function loadBook() {  // Loads the last 12 messages and listen for new ones.
  var callback = function(snap) {
    console.log(snap);
    var data = snap.val();
    for(var key in data){
      //  console.log(data[key]);
       displayBook(data[key]);
    }
    
  };
  firebase.database().ref('status/'+getUserName()+"/bookmark").on('value', callback);
}

var List_TEMPLATE =
      "<li class='mdl-list__item'>" +
      '<div class="status"></div>'+
        '<div class="time"></div>'+
        '<div class="message"></div>'+
      '</li>';

function displayBook(datas){
  console.log(datas);
  var messageListElement = document.getElementById('messages');
  var htmlelt = document.getElementById("lists");
  var divtag = document.createElement( 'div' );
  divtag.innerHTML = List_TEMPLATE;

  divtag.querySelector('.time').textContent = datas.time;
  divtag.querySelector('.status').textContent = datas.status;
  var messageElement = divtag.querySelector('.message');

  if(datas.text){
    messageElement.textContent = datas.text;
  }
  else if(datas.image){
    var image = document.createElement('img');
    image.addEventListener('load', function() {
      messageListElement.scrollTop = messageListElement.scrollHeight;
    });
    image.src = datas.image + '&' + new Date().getTime();
    messageElement.innerHTML = '';
    messageElement.appendChild(image);
  }
  htmlelt.appendChild(divtag);
}