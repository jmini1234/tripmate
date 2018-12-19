# tripmate
주요 도시를 여행하는 여행객들과의 실시간 정보를 공유하는 채팅 앱 

**[[Tripmate Link]](https://triptmate.firebaseapp.com)
https://triptmate.firebaseapp.com**

> 좀 더 편하게 보고싶다면? [[Tripmate WIKI]](https://github.com/jmini1234/tripmate/wiki)

------

## 목차

0. [Tripmate란?](https://github.com/jmini1234/tripmate#0-tripmate%EB%9E%80)
1. [DB 설계 및 프로젝트 구조](https://github.com/jmini1234/tripmate#i-db-%EC%84%A4%EA%B3%84-%EB%B0%8F-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B5%AC%EC%A1%B0)
2. [FrontEnd](https://github.com/jmini1234/tripmate#ii-frontend)
3. [Google API](https://github.com/jmini1234/tripmate#iii-google-api)
4. [Firebase Service 관리](https://github.com/jmini1234/tripmate#iv-firebase-service-%EA%B4%80%EB%A6%AC)
5. [Page Control](https://github.com/jmini1234/tripmate#v-page-control)
6. [About US](https://github.com/jmini1234/tripmate#vi-about-us)

------



# 0. tripmate란?

[트립메이트 채팅 웹](https://triptmate.firebaseapp.com)
https://triptmate.firebaseapp.com

## 1. Tripmate의 목적

#### 주요 도시를 여행하는 여행객들과 실시간으로 정보를 공유하는 채팅 앱

'계획' 위주의 여행 어플을 타파하다!

같은 지역, 동시간대를 함께 여행하는 사람들과 실시간 채팅을 함으로써, 휴업하는 가게, 세일정보, 도로 정보 등등 날마다 바뀌는 정보를 얻어 서로의 여행을 쾌적하게 만드는 서비스!

#### 1. 같은 지역을 여행하는 사람들간 실시간 정보 공유

   같은 지역, 동시간대를 함께 여행하는 사람들과 실시간 채팅을 함으로써
   궁금한 점을 바로바로 묻고 답하며 현재 상황에 맞는 정보를 즉각 알 수 있고, 
   계획한 여행의 변수를 최대한 줄이도록 도와드립니다.

#### 2. 그 지역을 여행갈 사람들의 정보 수집

   또한 여행지에 없는 사람 같은 경우, 현재 여행하고 있는 사람들의 실시간 정보를 봄으로써
   자신의 여행을 계획하는데 참고할 수 있습니다.

#### 3. 유용한 정보는 마이페이지에 저장

   당장 내일, 한달 후의 여행 계획에 유용한 요소가 있다면 북마크를 통해 마이페이지에 저장하여, 내 계획에 참고할 수 있습니다.

#### 4. 위치를 통한 메세지 신뢰성 보장

   채팅을 이용한 여행지 정보 같은 경우 발신자의 위치정보를 확인하여 메세지의 신뢰성을 수신자가 판단할 수 있습니다.

------

## 2. tripmate 사용 방법 

[트립메이트 채팅 웹](https://triptmate.firebaseapp.com)
https://triptmate.firebaseapp.com

### 2-1. 웹 버전

#### ㄱ. 로그인

![images](https://user-images.githubusercontent.com/37237145/50137223-e1277c00-02dd-11e9-8bbe-07a73202cab1.png)

>  로그인 버튼을 누르면 구글과 연동해서 로그인을 할 수 있다. 

#### ㄴ.채팅방 입장

![images](https://user-images.githubusercontent.com/37237145/50137339-3a8fab00-02de-11e9-9896-33e291d18f31.png)

>  GO CHAT 버튼을 누르면 채팅방에 입장 할 수 있다. 



#### ㄷ. 원하는 도시의 채팅방 선택

![images](https://user-images.githubusercontent.com/37237145/50137397-5b580080-02de-11e9-8d79-084b0ec10fd7.png)

>  정보를 얻고자하는 채팅방을 선택한다. 



#### ㄹ. 채팅방 입장

![images](https://user-images.githubusercontent.com/37237145/50137869-e4bc0280-02df-11e9-86ac-c56c5010562b.png)

> 각 채팅방마다 그 나라의 정보를 가진 채팅들이 들어있다. 



##### ㄹ-1. 채팅한 위치 반환

> 정보의 신뢰성을 위해 채팅을 쓴 사람의 위치와 날짜가 오른쪽 하단에 출력된다. 

##### ㄹ-2. 북마크

> 현재 위치와 같이 놓여있는 버튼은 북마크 , 저장 기능이다. 북마크를 누르면 마이페이지에 해당 채팅 정보가 들어가 있다. 

![image](https://user-images.githubusercontent.com/37237145/50138024-73308400-02e0-11e9-86eb-adbf3abe6a69.png)



#### ㅁ. 마이페이지 

> 상단 오른쪽의 계정정보가 있는 곳을 누르면 마이페이지로 이동한다. 

![image](https://user-images.githubusercontent.com/37237145/50138145-df12ec80-02e0-11e9-8515-ee9157b29b59.png)

> 전반적인 마이페이지 화면은 다음과 같다. 

![image](https://user-images.githubusercontent.com/37237145/50138201-24371e80-02e1-11e9-9666-de56794b29aa.png)

##### ㅁ-1. 현재 위치 반환

> 사용자가 있는 곳에대한 정보를 구글 Map을 통해 알려준다.

![image](https://user-images.githubusercontent.com/37237145/50139279-90675180-02e4-11e9-8003-f26c080711a2.png)

##### ㅁ-2. 북마크 정보 반환

> 북마크 세션에는 사용자가 북마크 버튼을 눌렀던 채팅의 내용과 그 채팅방의 정보가 쓰여있다. 

![image](https://user-images.githubusercontent.com/37237145/50139322-b260d400-02e4-11e9-8bdf-a53ffb67c30c.png)





### 2-2. 웹앱 버전

<div>
<img width="30%" height="30%" src="https://user-images.githubusercontent.com/37237145/50137304-251a8100-02de-11e9-8a58-0d6bab21119c.png"></img>
<img width="30%" height="30%" src="https://user-images.githubusercontent.com/37237145/50137369-4aa78a80-02de-11e9-9c05-8c8e9017f5f8.png"></img>
<img width="30%" height="30%" src="https://user-images.githubusercontent.com/37237145/50137418-6f036700-02de-11e9-8bce-1d5be57bffae.png"></img>
</div>

<div>
<img width="30%" height="30%" src="https://user-images.githubusercontent.com/37237145/50137942-277dda80-02e0-11e9-8d7d-45eaf2b15497.png"></img>
<img width="30%" height="30%" src="https://user-images.githubusercontent.com/37237145/50138244-4af55500-02e1-11e9-9f4e-b74d65b0ebc6.png"></img>
<img width="30%" height="30%" src="https://user-images.githubusercontent.com/37237145/50140381-e689c400-02e7-11e9-8404-57d05d295125.png"></img>





------

# I. DB 설계 및 프로젝트 구조

### 1. DB 설계

#### Firebase Realtime Database

일반적인 HTTP 요청이 아닌 동기화를 사용하므로 데이터가 변경될 때마다 연결된 모든 기기가 수 밀리초 내에 업데이트를 수신한다.

![](https://user-images.githubusercontent.com/26458200/50152194-53ac5200-0306-11e9-9f3a-8b1e48fb7088.png)

```json
"fcmTokens":{
    "token-key":"token-value", 
    ...
}
```

```json
"messages":{
    "BERLIN(GERMANY)":{
        "message_image_key":{
            "imageUrl":"profile URL",
            "location":"location info",
            "name": "current username",
            "storageUrl":"image file URL",
            "time":"sending time"
        }, 
        "message_text_key":{
            "imageUrl":"profile URL",
            "location":"location info",
            "name": "current username",
            "text":"input text",
            "time":"sending time"
        },
        ...
    }, 
    "DANANG(VIETNAM)": {...},
    ...
}
```

```json
"status":{
    "username":{
        "bookmark":{
            "bookmarkkey":{
                "image":"bookmark image URL",
                "status": "room name",
                "time":"message time"
            },
            ...
        },
        "location":{
            "status":"current room name"
        }
    },
    ...
}
```

------

### 2. 프로젝트 구조 

#### project Structure

```
tripmate
├─ .firebase
├─ .git
├─ functions
│  ├─ .eslintrc.json
│  ├─ index.js
│  ├─ package.json
├─ public
│  ├─ images
│  ├─ scripts
│  |  ├─ list.js
│  |  ├─ login.js
│  |  ├─ main.js
│  |  ├─ map.js
│  ├─ styles
│  |  ├─ index.css
│  |  ├─ list.css
│  |  ├─ main.css
│  |  ├─ map.css
│  ├─ favicon.ico
│  ├─ firebase-messaging-sw.js
│  ├─ index.html
│  ├─ list.html
│  ├─ main.html
│  ├─ manifest.json
│  ├─ test.html
├─ .firebaserc
├─ .gitignore
├─ database-rules.json
├─ firebase.json
├─ storage.rules
└─ README.md
```





------

# II. FrontEnd

### 1.  JavaScript와 HTML 연동

#### ㄱ. 채팅방 목록 만들기

```javascript
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
  var htmlelt = document.getElementById("lists");

  for(var room in roomlist){
    var divtag = document.createElement( 'div' );
    divtag.innerHTML = List_TEMPLATE_BEFORE + "id = "+roomlist[room]+List_TEMPLATE_AFTER;
    divtag.querySelector('.name').innerHTML = roomlist[room];
    htmlelt.appendChild(divtag);
  }
  listening(roomlist);
}

```

List_TEMPLATE를 만들어 불러올 채팅방 목록의 형식을 지정하였다. li 태그를 사용하여 채팅방 목록을 list.html 파일에 리스트 형식으로 불러온다. 

htmlelt 변수는 list.html 파일에서 ID가 lists인 태그를 가져와 선언한다. 

roomlist에 있는 채팅방마다 div 태그를 만들어주고, innerHTML으로 div 태그 안의 내용을 List_TEMPLATE의 형식을 이용하여 변경한다. 



#### ㄴ. 마이페이지 만들기

```javascript
var List_TEMPLATE =
      "<li class='mdl-list__item'>" +
      '<div class="status"></div>'+
        '<div class="time"></div>'+
        '<div class="message"></div>'+
      '</li>';

function displayBook(datas){
  var messageListElement = document.getElementById('messages');
  var htmlelt = document.getElementById("lists");
  var divtag = document.createElement( 'div' );
  divtag.innerHTML = List_TEMPLATE;
  ...

```

마이페이지에 북마크한 내용들을 가져올때도 같은 방법을 이용하였다.

List_TEMPLATE에 북마크를 가져올 형식을 위치, 시간, 메시지 내용을 나누어 지정하였다. 

- getelementbyId() : ID를 이용하여 해당 HTML 요소(태그)를 받아온다
- innerHTML=' ' : 선택한 HTML 요소 안의 내용을 ' ' 안의 내용으로 변경한다. 

------

### 2.  Google Material Design Lite 사용

```html
<header class="mdl-layout__header">
        <div class="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-grid">
          <div class="mdl-layout__header-row mdl-cell mdl-cell--10-col mdl-cell--10-col-tablet mdl-cell--10-col-desktop">
            <img class="logo" src="images/logo_png_1.png" alt="Tripmate" height="30px">
            <img class="logo" src="images/logo_png_0.png" alt="Tripmate" height="30px">
          </div>
          <div id="user-container">
            <div hidden id="user-pic" onclick="location.href='./map.html'"></div>
            <div hidden id="user-name" onclick="location.href='./map.html'"></div>
          </div>
        </div>
      </header>

```

고정 헤더와 바디의 기본적인 레이아웃 구성에 google material design lite를 사용한다. 또한 mdl을 이용하여 반응형 디자인을 구현하였다. 

ex)

- mdl-grid : 해당 container를 MDL grid component로 정의한다. 
- mdl-cell : container를 MDL cell로 정의한다. 
- mdl-cell--N-col : 1부터 12까지 column의 size를 지정한다. 

------

### 3. CSS 적용

```css
.mdl-list__item .message {
  display:inline-block;
  float:left;
  font-size: 14px;
  box-sizing:border-box;
  padding:4px;
  margin-right:4px;
  text-align: left;
  width:100%;
}
```

```css
@media screen and (max-width: 610px) {

  #user-container #user-pic {
    top: 2px;
    width: 33px;
    height: 33px;
    background-size: 33px;
  }
}
```

**CSS 선택자**를 이용하여 여러 요소들에 세부적인 위치, 크기, 여백 등의 디자인을 적용한다.

미디어쿼리를 이용하여 **반응형 디자인**을 적용한다.

 

# III. Google API

## 1. Google Map API

####   1.1  Google Map 출력

```javascript 
var map, infowindow, pos, geocoder;

function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {

    center: {lat: -34.397, lng: 150.644},

    zoom: 6

  });

  infowindow = new google.maps.InfoWindow;

  geocoder = new google.maps.Geocoder;

```

 map 변수는 html tag 중 id 값이 map인 화면을 받아서 선언한다.

 google map api를 통해 infowindow와 geocoder 변수를 선언한다.  

- infowindow : 현재 정보와 관련된 window 화면이다.  
- geocoder : 위치를 위도와 경도로 나타낸다.

 

####   1.2 현재 위치 좌표 반환

```javascript 
  // Try HTML5 geolocation.

  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(function(position) {

      pos = {

        lat: position.coords.latitude,

        lng: position.coords.longitude

      };


      infowindow.setPosition(pos);

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

```



initMap() : 내 위치를 반환하는 Map을 불러온다.  

navigator.geolocation.getCurrentPosition 메소드로 position 변수를 통해 pos 에 현재 위도와 경도 값을 저장한다.

infowindow.setPosition(pos) 로 현재 위치와 관련된 지도를 화면에 보여주고 map을 open 해서 화면에 띄운다.  

이 곳에서 geocodeLatLng(geocoder, map, infowindow) (1.3 참조) 함수를 불러와서 실제 주소 값까지 반환한다.





####  1.3  좌표를 주소로 변경 (reverse Geocoding) 

```javascript
var address ;

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

```



현재 위치로 받아온 위도 경도 값을 주소 값으로 변경하는 geocodeLatLng 함수  

Map을 pos(현재 위치)로 Zoom을하고 marker 표시해 그 곳에 setContent로 주소를 화면에 출력한다.  

pos에 저장되어 있는 위도 경도 값을 result[0]에 넣고 formatted_address를 사용해서 adress 변수에 실제 주소를 저장한다. 

id가 location인 화면을 찾아 lat으로 정의한 다음 그 화면에 현재 주소를 나타내기위해 innerHTML 을 사용해서 address를 표시한다. 



------

## 2. Google Map - Firebase 연동



####  2.1 firebase 연동 

```html
  <script src="/__/firebase/5.5.8/firebase-app.js"></script>
    <script src="/__/firebase/5.5.8/firebase-auth.js"></script>
    <script src="/__/firebase/5.5.8/firebase-database.js"></script>
    <script src="/__/firebase/5.5.8/firebase-storage.js"></script>
    <script src="/__/firebase/5.5.8/firebase-messaging.js"></script>
    <script src="/__/firebase/init.js"></script>

    <script src="https://cdn.firebase.com/js/client/2.3.2/firebase.js"></script>

```



사용하는 프로젝트의 database가 저장된 firebase 을 연결하기 위해 firebase의 source를 script를 통해서 넣어준다. 



####  2.2 Google Map 연동 

```html
    <script src="scripts/map.js"></script>

    <script async defer

    src="https://maps.googleapis.com/maps/api/js?key=[Google_API_KEY]&callback=initMap">

    </script>

```

firebase-Google Map 연동을 위해 firebase.js를 참조하는 script와 google api key를 넣은 script를 추가한다.



------

# IV. Firebase Service 관리

### 1. Service 환경설정과 사용

우리가 사용한 Firebase Service 4가지```Authentication, Database, Storage, Hosting```는 
각각의 설정을 모두 console에서 한 후에 사용할 수 있다.  
각 develop 환경설정시 주의점과 공통적인 사용법을 알아보자.

#### 1-1. Authentication

**환경설정** : google 로그인 허용

**기본 사용법**: ```firebase.auth()```

```javascript
 var provider = new firebase.auth.GoogleAuthProvider();
 firebase.auth().signInWithPopup(provider).then(function(authData) {
    console.log(authData);
  }).catch(function(error) {
    console.log(error);
  });
```

google 로그인을 사용할때는 별도의 google login 메소드인 GoogleAuthProvider()를 사용해서 현재 사용자의 firebase.auth() 정보를 initialize한다.

위 세팅 (sign in method) 이후 ```firebase.auth()``` 메소드를 사용하게 되면 현재 사용자의 인증정보에 대한 내용이 드러나며, ```firebase.auth()```를 이용해서 현재 user의 id, profile, token 등을 자신의 서비스에 customizing하는 것이 가능하다.

```javascript
firebase.auth().signInWithPopup(provider);
firebase.auth().signOut();
firebase.auth().onAuthStateChanged(authStateObserver);
firebase.auth().currentUser.photoURL;
firebase.auth().currentUser.displayName;
```



#### 1-2. Database

**환경설정** : rule 설정

**기본 사용법**: ```firebase.database()```

Database를 사용하기 위해서 보안규칙(security rule)을 설정해야한다. 이때 규칙은 console에서 설정할수 있으며, rules라는 key의 value 값이 firebase database의 보안규칙이된다. value 값에 들어가는 json data는 .read, .write등 다양한 속성에 대해서 true, false를 정의할 수 있다.

위 세팅 (console setting) 이후 ```firebase.database()``` 메소드를 사용하게 되면 현재 프로젝트의 database를 접근하겠다는 의미이다. ```firebase.database()```를 이용해서 MySQL, MongoDB의 query문과 같은 명령어를 사용할 수 있다. database() 메소드를 이용해서, DB 저장 및 연결을 위한 관리는 본 위키의 [[3. Database 메소드 활용정리]](#3. Database 메소드 활용 정리) 에서 자세한 내용을 확인하자.



#### 1-3. Storage

**환경설정** : rule 설정

**기본 사용법 **: ```firebase.storage()```

Database와 마찬가지로 storage를 사용하기 위해서도 버킷규칙(bucket rule)을 설정해야한다. 이때 규칙은 console에서 설정할수 있으며, 이 안에는 file을 저장(write)할때의 이름 규칙 및, imagemaxsize에 관한 설정이 이루어져잇다. 

```javascript
// Returns true if the uploaded file is an image and its size is below the given number of MB.
function isImageBelowMaxSize(maxSizeMB) {
  return request.resource.size < maxSizeMB * 1024 * 1024
      && request.resource.contentType.matches('image/.*');
}

service firebase.storage {
  match /b/{bucket}/o {
    match /{userId}/{messageId}/{fileName} {
      allow write: if request.auth != null && request.auth.uid == userId && isImageBelowMaxSize(5);
      allow read;
    }
  }
}
```

위 세팅 (console setting) 이후 ```firebase.storage()``` 메소드를 사용하게 되면 현재 프로젝트의 storage를 접근하겠다는 의미이다.  database와 마찬가지로 ref("경로")를 이용해서 저장 혹은 접근할 파일의 경로를 지정하고, .put() 등을 이용해서 write한다.

```javascript
firebase.storage().ref(filePath).put(file)
```



#### 1-4. Hosting

**환경설정** : 현재 개발중인 firebase 프로젝트의 **deploy**

```shell
firebase login
firebase use --add    #firebase 프로젝트 선택 후 alias 부여

# firebase 프로젝트 local 서버로 확인하기
firebase serve
firebase serve --only hosting

# firebase에서 제공하는 hosting을 사용하여 deploy하기
# 본 프로젝트는 firebase에서 제공하는 function을 사용하지 않았기 때문에 exception function을 사용해서 deploy하였다. 
firebase deploy
firebase deploy --except function
```

local hosting을 이용해서 현재 프로젝트의 진행사항을 체크하고, 

프로젝트가 마무리 되면 deploy를 하여 프로젝트의 **도메인**을 얻어 여러 환경에서 프로젝트를 실행할 수 있다.



------

### 2. Firebase initialize

> shell command와 firebase initalize가 연관되어있으므로 이 위치이다..

firebase 프로젝트를 개발하기 위해서는 firebase console의 프로젝트의 속성정보를 나의 웹앱 source에 가져와야한다. 따라서 속성정보를 나의 source 코드에 가져오는 방법 2가지를 알아보겠다.

#### ㄱ. config 코드에 직접 넣기

firebase console > project Overview > 앱추가 > 웹앱 선택

아래 스피넷이 나오게된다. 이 내용을 내가 현재 개발하고있는 프로젝트의 html 하단이나, 관련 javascript code에 직접 넣게 되면, 해당 html, js 파일에서는 ```firebase``` 변수에 접근 할 수 있다. ```firebase```변수에 접근을 하게 되면 ```firebase.auth(), firebase.database(), firebase.storage()```등의 개발 서비스에 접근 할 수 있어 나의 웹앱에 맞춰 커스터마이징이 가능하다.

```javascript
<script src="https://www.gstatic.com/firebasejs/5.7.0/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "APIKEY",
    authDomain: "DOMAIN",
    databaseURL: "DB URL",
    projectId: "triptmate",
    storageBucket: "BUCKET URL",
    messagingSenderId: "ID"
  };
  firebase.initializeApp(config);
</script>
```

하지만 이 경우, source code에 그대로 들어가기 때문에 html에 넣기라도 하면, F12 개발자 도구를 이용해서 APIKEY 등 중요정보를 쉽게 접근할 수 있다는 문제가 있다. 따라서 보안을 위해서라면 다른 방법을 권장한다.



#### ㄴ. shell 활용해서 config 숨기기

바로 html태그안에 해당 config과 관련한 정보를 연결하는 방법이다. 

```html
<script src="/__/firebase/5.5.8/firebase-app.js"></script>
<script src="/__/firebase/5.5.8/firebase-auth.js"></script>
<script src="/__/firebase/5.5.8/firebase-database.js"></script>
<script src="/__/firebase/5.5.8/firebase-storage.js"></script>
<script src="/__/firebase/5.5.8/firebase-messaging.js"></script>
<script src="/__/firebase/init.js"></script>
```

다음 태그에 있는 js의 내용은 환경변수를 이용해서 사용자 firebase 프로젝트의 주요 정보들을 가린 후 각 service를 initalize 한다.

cmd에서 firebase 명령어를 이용해서 설정한 나의 firebase 프로젝트의 config 값들이 모두 환경변수로 설정되고, 그 환경변수가 저 js 파일에 들어간다.

```shell
firebase use --add
? Which project do you want to add? (Use arrow keys)
> friendychat-8920d
  triptmate
```

아래와 같이 사용할 나의 firebase 프로젝트를 설정할 수 있다.



------

### 3. Database 메소드 활용 정리

Firebase Database의 메소드를 Select / Update / Insert 명령어를 연관시켜서 사용법을 분류하였다.

#### 3-1. READ (select)

```javascript
var callback = function(snap){
  printf("snap.val()");
}
firebase.database().ref("path").on("value", callback)
```

- 해당 path(경로) 안에 있는 value를 snapshot을 찍듯이 가져와서 print하는 source이다.



**기본 사용법 **: ```.on("value", callback)```

- 1번째 argument
  - value = 변경에 대한 수신 대기 (전체)
  - child_added = 하위요소 추가에 대한 수신 대기
  - child_changed = 하위요소 업데이트에 대한 수신대기

- 2번째 argument
  - 1번째 argumnet의  내용대로 대기하던 event가 들어오면 callback 함수 실행



> 즉, read는 해당 path의 어느부분이라도 변경이 있다면  callback을 실행하여 callback에서 htmltag.innerhtml 등의 html과 연관해서 내보내는 것을 목적으로 하였다.
>
> 트래픽 상 1번째 argument의 대기 범위는 변경사항의 최하위 위치가 제일 효율적이다.
>
> firebase의 realtime database가 가능한 이유는, db 변경에 대한 수신을 대기하고 이에 대해 바로 반영할 수 있는 eventlistener를 기반으로 만들어졌기 때문이다.



#### 3-2. WRITE (insert)

```javascript
firebase.ref("path").push({
	json1_key : json1_val,
    json2_key : json2_val
});
```

- 해당 path(경로) 에 push안에있는 argument를 key로 하도록 data를 insert하는 source이다.

**기본 사용법**: ```.push(json)```

= 해당 json을 value로 갖는 key를 생성하고 push

- json
  - { }를 이용해서 여러 key-value 쌍의 json 값을 넣어도 상관없다.
  - 이때 주의해야할 점은 argument가 해당 경로의 value로 들어간다는 것이다.
  - 그렇다면 key는? 임의생성

```
key : random_key, value : json
```

위 code를 적용했을 때 아래와 같은 규칙으로 database에 반영된다.  
path아래에 바로 argument의 내용이 들어가는 것이 아니다.

```
path
  ㄴrandom_key2 (afdlahfkasdjka)
    ㄴjson1_key : json1_val
    ㄴjson2_key : json2_val
```



#### 3-3. UPDATE (update)

```javascript
firebase.ref("path").set({
	json1_key : json1_val,
    json2_key : json2_val
});
```

- 해당 path(경로)를 key로 하고 set안의 argument를 value로 하는 data를 insert하는 source이다.

**기본 사용법**: ```.set(json)```

= 해당 json을 value로 path를 key로해서 해당 key(경로)의 내용을 덮어씌운다

- json
  - { }를 이용해서 여러 key-value 쌍의 json 값을 넣어도 상관없다.
  - 이때 주의해야할 점은 key값, 즉 해당 path안에 있던 기존내용이 .set의 argument로 대체된다는 점이다.

```
key : path, value : json
```

위 code를 적용했을 때 아래와 같은 규칙으로 database에 반영된다.  
path아래에 바로 argument의 내용이 들어간다

```
path
  ㄴjson1_key : json1_val
  ㄴjson2_key : json2_val
  

#기존값이 어떤것이든 상관없이 덮어씌어진다.
(기존값)
path
  ㄴjson1_key : json1_val
  ㄴjson2_key : json2_val
  ㄴjson3_key : json3_val
  ㄴjson4_key : json4_val
  ㄴjson5_key : json5_val
  ㄴjson6_key : json6_val
-> 어찌됐든 set의 argument가 key로 설정!
```





------

# V. Page Control

## 1. login

| 경로    | 짧은 설명     |
| ------- | ------------- |
| /(root) | 로그인 페이지 |

##### contoller

```
1. google_login page 띄우기
2. google api 이용한 로그인 OAUTH
3. show log_out button
4. show chat button (./list.html)
```





------

## 2. Roomlist

| 경로       | 짧은 설명            |
| ---------- | -------------------- |
| /list.html | 채팅방 리스트 페이지 |

##### contoller

```javascript
firebase.database().ref('/fcmTokens').child(currentToken).set(firebase.auth().currentUser.uid);
```

> 유저 fcmtoken 저장

```javascript
firebase.database().ref('messages/').limitToLast(12).on('value', callback);
```

> [loadList(), displayList(roomlist)];
>
> database에 있는 roomlist 전부 불러오기 및 보여주기
> 경로 : messages

```javascript
firebase.database().ref('/status/'+getUserName()+'/location').set({
    status: clickRoom
  }).catch(function(error) {
    console.error('Error writing new message to Firebase Database', error);
  });
```

> database에 현재 사용자가 클릭한 room의 위치 업데이트하기
> 경로 : /status/{username}/location
> 저장결과 : status : {clickRoom}





------

## 3. Chatting

| 경로       | 짧은 설명     |
| ---------- | ------------- |
| /main.html | 채팅방 페이지 |

##### contoller

```javascript
firebase.database().ref('/messages/'+getRoom).limitToLast(12).on('child_added', callback);
  firebase.database().ref('/messages/'+getRoom).limitToLast(12).on('child_changed', callback);
```

> user가 클릭한 room의 채팅방 message를 전부 불러오기 및 보여주기
> 경로 : messages/{currentUserRoom}

```javascript
firebase.database().ref('/messages/'+getRoom).push({
    name: getUserName(),
    imageUrl: LOADING_IMAGE_URL,
    profilePicUrl: getProfilePicUrl()
  }).then(function(messageRef) {
    // 2 - Upload the image to Cloud Storage.
    var filePath = firebase.auth().currentUser.uid + '/' + messageRef.key + '/' + file.name;
    return firebase.storage().ref(filePath).put(file).then(function(fileSnapshot) {
      // 3 - Generate a public URL for the file.
      return fileSnapshot.ref.getDownloadURL().then((url) => {
        // 4 - Update the chat message placeholder with the image’s URL.
        return messageRef.update({
          imageUrl: url,
          storageUri: fileSnapshot.metadata.fullPath,
          location : address,
          time: makeTime()
        });
      });
    });
  }).catch(function(error) {
    console.error('There was an error uploading a file to Cloud Storage:', error);
  });
```

> user가 첨부한 image를 firebase stroage에 올리고, 그 url을 얻어 user가 클릭한 room의 채팅방 message로 저장
> 경로 : messages/{currentUserRom}
> 저장결과 
> messsage_key: {
> ​    imageurl: currnet user profile image,
> ​    location: current user location,
> ​    name: current user name,
> ​    storageUri: filepath,
> ​    time: current time
> }

```javascript
 var callback= function(snap){
    console.log(snap.val().status);
    getRoom = snap.val().status;
    loadMessages(getRoom);
    console.log(userName);
    htmlroom.innerHTML = getRoom;
  }
  firebase.database().ref('/status/'+userName+'/location').on('value', callback)
```

> database에 현재 사용자가 클릭한 room의 위치를 찾는 function이다.
> callback함수를 이용해서, 해당 위치 database의 snapshot을 찍고, 해당 위치의 각종 속성에 접근할 수 있도록한다.
> 경로:/status/{username}/location

```javascript
firebase.database().ref('/status/'+getUserName()+"/bookmark").push({
    text: text,
    status: getRoom,
    time: time,
    image: output
  }, getToggle()).catch(function(error) {
    console.error('Error writing new message to Firebase Database', error);
  });

```

> database에 현재 사용자가 클릭한 room의 위치에서 선택한 message를 mypage의 bookmark에 추가하기
> 경로: /status/{username}/bookmark
> 저장결과
> bookmark_key{
> ​    text: user click text massage
> ​    status: room name,
> ​    time: current time,
> ​    image: user click image message
> }



------

## 4. Mypage

| 경로      | 짧은 설명       |
| --------- | --------------- |
| /map.html | 유저 마이페이지 |

##### contoller

```javascript
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
```

> [loadBook(), displayBook(roomlist)];
>
> 현재 user의 bookmark 정보를 mypage에 보여주기 위해 해당 리스트를 찾는다. 
> callback함수를 이용해서, 해당 위치 database의 snapshot을 찍고, 해당 위치에 접근한다. 위치에 접근해서 얻은 data를 displaybook()함수를 이용해서 html과 연동한다.
> 경로 : status/{username}/bookmark



------

# VI. About US

### 1. 개발자 정보

- 고승의 (uiuiui629) : 사용자 인터페이스(UI) 디자인, 프론트엔드 개발
  - uiuiui629
  - loginChatDesign : 로그인창, 채팅창 디자인(main.css 수정 및 index.css, list.html 추가)
  - listDesign : 채팅방 list 디자인(list.html, list.js 수정 및 list.css 추가)
  - mypagedesign : 마이페이지 디자인(map.html, map.js 수정 및 map.css 추가)
  - UIdesign : header 수정, 채팅방 list 레이아웃 수정
- 김민정 (mjung1798) : 데이터베이스 관리, 백엔드 개발
  - ming : login 분리하기, 브랜치 정리, apply .gitignore
  - ming123 : 채팅방 list 개발(list.html, list.js 추가), icon 수정
  - Listlink : list의 기능에 맞게 db 연결, user가 위치하는 room인 status DB 재구성
  - roomname : DB에서 불러온 room list의 정보를 html에 보여주기 (js와 html 연동)
  - mapinformation : 북마크 버튼 추가하고, 유저의 bookmark만 모은 DB 재구성 및 저장
  - debugging : 북마크가 지워지는 현상 (push와 set 차이점 발견), DB 저장 오류 수정
  - snackbar : 북마크 저장시 snackbar 나타나게 수정
  - final, tripmate.V.1.0 : deploy를 위한 최종적인 전체 수정
- 심정민 (jmini1234) : 백엔드 개발, 지도api, firebase 연동, 현재 위치 반환
  - Shim
  - roomlist : 채팅방 생성 및 분리
  - MapApi : google map api 와 firebase 연동하기 
  - converting : 현재 위치 반환 후 , 위도 경도를 주소로 변환

### 2. 협업 과정

git branch를 이용해서 기능을 수정하고, pull request를 이용해서 변경사항을 확인하고, conflict를 대처했습니다.

<img src="https://user-images.githubusercontent.com/37237145/50142476-a2012700-02ed-11e9-86c3-c6383abf948e.png"></img>
