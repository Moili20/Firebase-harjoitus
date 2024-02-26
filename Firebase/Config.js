import {getFirestore,collection,addDoc,serverTimestamp, orderBy, onSnapshot, query} from 'firebase/firestore';
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAajzONf_2NOGP6OO_67azUCet3O1_8lPY",
  authDomain: "chat-b4ce4.firebaseapp.com",
  projectId: "chat-b4ce4",
  storageBucket: "chat-b4ce4.appspot.com",
  messagingSenderId: "773060874961",
  appId: "1:773060874961:web:514d45502a0a9301c7ebf0"
};

initializeApp(firebaseConfig);

const firestore = getFirestore();

const MESSAGES = "messages";

export{
    firestore,
    collection,
    addDoc,
    serverTimestamp,
    MESSAGES,
    onSnapshot,
    query,
    orderBy
};