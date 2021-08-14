import firebase from 'firebase';


const firebaseConfig = {

    apiKey: "AIzaSyCWlhlScn_TVlPACsnO8gJnvSI_kyhZH9w",
  authDomain: "speed-riders-transport.firebaseapp.com",
  projectId: "speed-riders-transport",
  storageBucket: "speed-riders-transport.appspot.com",
  messagingSenderId: "941465065122",
  appId: "1:941465065122:web:9f4d6435f39fc4ca05a9fb"
  

};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}


const auth = firebase.auth();

export { auth }