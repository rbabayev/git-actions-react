import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AI",
  authDomain: "gitactionstask.firebaseapp.com",
  projectId: "gitactionstask",
  storageBucket: "gitactionstask.firebasestorage.app",
  messagingSenderId: "97601",
  appId: "16358",
};

const app = initializeApp(firebaseConfig);

export default app;
