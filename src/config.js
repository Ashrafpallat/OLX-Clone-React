// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {addDoc, collection, getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBri1HG7GLGvHirRAa-0QFwhCxm3Jpuf5k",
  authDomain: "olx-clone-3f91b.firebaseapp.com",
  projectId: "olx-clone-3f91b",
  storageBucket: "olx-clone-3f91b.appspot.com",
  messagingSenderId: "290782594240",
  appId: "1:290782594240:web:0a9ff839b837fe48cdd925"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db= getFirestore(app)

const signup = async(username, email, phone, password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user
        await addDoc(collection(db, 'user'),{
            uid: user.uid,
            username,
            phone,
            authProvider: 'local',
            email,

        })
    } catch (error) {
        console.log(error);
        alert(error)
    }
}

const login = async (email, password)=>{
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error);
        alert(error)
    }
}

const logout = ()=>{
    signOut(auth)
}

export {
    auth,
    db,
    login,
    signup,
    logout
}