import firebase from "firebase/app";
import 'firebase/auth';
import "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyBW2YM-HQiOGt1j9jibRYMNPY95naS7hzE",
    authDomain: "lab7-tinder.firebaseapp.com",
    databaseURL: "https://lab7-tinder-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "lab7-tinder",
    storageBucket: "lab7-tinder.appspot.com",
    messagingSenderId: "483700471976",
    appId: "1:483700471976:web:51f99793e1783fceaeaa9d",
    measurementId: "G-WGBB5J6SPJ"
  };

  if(!firebase.app.lenght) {
      firebase.initializeApp(firebaseConfig);
  }
  else{
      firebase.app();
  }

 export const auth = firebase.auth();
 export const database = firebase.database();
  //export const firestore = firebase.firestore();