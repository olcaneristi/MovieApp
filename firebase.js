// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA-haEW1bboyreJV2j_iRabjqJIJao32k0',
  authDomain: 'moviemania-20654.firebaseapp.com',
  projectId: 'moviemania-20654',
  storageBucket: 'moviemania-20654.appspot.com',
  messagingSenderId: '454627604651',
  appId: '1:454627604651:web:ae380029b9663f8cd05fee',
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();
export { auth };
