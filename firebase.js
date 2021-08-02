import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCJyowVyBrMQDBCEbwj4pFlUR8Bu_GtpQY",
  authDomain: "doc-cod.firebaseapp.com",
  projectId: "doc-cod",
  storageBucket: "doc-cod.appspot.com",
  messagingSenderId: "199945856846",
  appId: "1:199945856846:web:a7b10b34c1b3b46041e01f",
  measurementId: "G-0EG28BM6BH",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
