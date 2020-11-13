import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyCQgDoehWKwf810bQmWzbET65z2xUVhN2w",
  authDomain: "moj-pierwszy-1d220.firebaseapp.com",
  databaseURL: "https://moj-pierwszy-1d220.firebaseio.com",
  projectId: "moj-pierwszy-1d220",
  storageBucket: "moj-pierwszy-1d220.appspot.com",
  messagingSenderId: "41008836486",
  appId: "1:41008836486:web:fb911909509394985bc607",
  measurementId: "G-7GMP0ZPL6L",
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export const dbRefObject = firebase.database().ref();
