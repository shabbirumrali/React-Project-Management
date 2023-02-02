import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyD3DxZOABoyDs_aMHsrqu6PtnFzIPMMMTg",
    authDomain: "projectmanagement-a5f23.firebaseapp.com",
    projectId: "projectmanagement-a5f23",
    storageBucket: "projectmanagement-a5f23.appspot.com",
    messagingSenderId: "873888864901",
    appId: "1:873888864901:web:9e46f8322719c5d10a27ec"
};

//   init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

const projectStorage = firebase.storage()

// setup timestamp function
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage }