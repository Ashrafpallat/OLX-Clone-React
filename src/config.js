// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

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
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage, app };

const signup = async (username, email, phone, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, 'user'), {
      uid: user.uid,
      username,
      phone,
      authProvider: 'local',
      email,
    });
  } catch (error) {
    console.error(error.message);
    alert(error.message);
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error.message);
    alert(error.message);
  }
};

const logout = () => {
  signOut(auth);
};

export { signup, login, logout };
