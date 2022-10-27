import app from 'firebase/app'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBNy1Vu_dMiLoaB9a77j8HdgwfaIP12tbQ",
    authDomain: "prog03tm-tp.firebaseapp.com",
    projectId: "prog03tm-tp",
    storageBucket: "prog03tm-tp.appspot.com",
    messagingSenderId: "390834797440",
    appId: "1:390834797440:web:3507491354a0e779d29f65"
};

app.initializeApp(firebaseConfig)

export const auth = firebase.auth();
export const storage= app.storage();
export const db = app.firestore();