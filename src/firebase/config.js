import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAJyxXHUJIrPNVOedtjs1ZsU0a8_Xx6j1M",
  authDomain: "estacionamento-pwa-f1699.firebaseapp.com",
  databaseURL: "https://estacionamento-pwa-f1699-default-rtdb.firebaseio.com",
  projectId: "estacionamento-pwa-f1699",
  storageBucket: "estacionamento-pwa-f1699.firebasestorage.app",
  messagingSenderId: "360941756455",
  appId: "1:360941756455:web:0a3445d3fc108a27de2e02"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);