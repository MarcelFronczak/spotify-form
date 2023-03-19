import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// const { API_KEY, MESSAGING_SENDER_ID, APP_ID } = import.meta.env;

const firebaseConfig = {
  apiKey: import.meta.env.API_KEY,
  authDomain: "spotify-form.firebaseapp.com",
  projectId: "spotify-form",
  storageBucket: "spotify-form.appspot.com",
  messagingSenderId: import.meta.env.MESSAGING_SENDER_ID,
  appId: import.meta.env.APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;