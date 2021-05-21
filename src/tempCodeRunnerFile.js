import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC-25RGqGpzI_kgzvItns5YXuDJdb-_QIM",
  authDomain: "disney-plus-f5746.firebaseapp.com",
  projectId: "disney-plus-f5746",
  storageBucket: "disney-plus-f5746.appspot.com",
  messagingSenderId: "678496044597",
  appId: "1:678496044597:web:453e1a319d1b195328937c",
  measurementId:"G-FHRZG5WGJE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { auth, provider, storage };
export default db;
