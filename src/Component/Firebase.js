import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAmlS-UFhVgtvnn9zmUbCd9HR-D3Rci8HQ",
  authDomain: "pomodro-timer-app-300ba.firebaseapp.com",
  projectId: "pomodro-timer-app-300ba",
  storageBucket: "pomodro-timer-app-300ba.appspot.com",
  messagingSenderId: "167610282433",
  appId: "1:167610282433:web:04111a65c7c75baa30bf40",
  measurementId: "G-Y8M7TJFJXJ",
};

const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
const provider =new GoogleAuthProvider()
export {auth,provider};