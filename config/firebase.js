const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");

// Add Firebase SDK Snippet
const firebaseConfig = {
  apiKey: "AIzaSyBfUoxplcHQxCRJfSlsk6Z1QAzvUGN9M7A",
  authDomain: "appwait-78ade.firebaseapp.com",
  projectId: "appwait-78ade",
  storageBucket: "appwait-78ade.appspot.com",
  messagingSenderId: "700882185672",
  appId: "1:700882185672:web:c639093cb280b95d2364fd",
  measurementId: "G-6B7WG06F57"

}
firebase.initializeApp(firebaseConfig);

module.exports = firebase;
