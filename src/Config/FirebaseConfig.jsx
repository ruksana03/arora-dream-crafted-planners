
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDTt9miU5mZDkDbRMyWKi7img_OpRzedYk",
  authDomain: "arora-dream-crafted-planners.firebaseapp.com",
  projectId: "arora-dream-crafted-planners",
  storageBucket: "arora-dream-crafted-planners.appspot.com",
  messagingSenderId: "887010169943",
  appId: "1:887010169943:web:cd8224e3ef5b586fad3f12"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);