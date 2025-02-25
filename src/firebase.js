import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDwdy45CFQLN13GJNRhWWKIe6XucRYuokE",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "login-d6f37",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "791256773449",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
