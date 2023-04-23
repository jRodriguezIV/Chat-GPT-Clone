import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB6fkBEuDzFIrXdr_YDlQrfuub1w9Uiw5Q",
  authDomain: "chat-gpt-clone-f8f2c.firebaseapp.com",
  projectId: "chat-gpt-clone-f8f2c",
  storageBucket: "chat-gpt-clone-f8f2c.appspot.com",
  messagingSenderId: "895853684359",
  appId: "1:895853684359:web:7fbf564d2ab86ded223a22"
};

// Initialize Firebase
const app = getApps().length ? getApp( ) : initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }