import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBH6ioE3bLhxEJPXoU8EUbKGP8YWAKgFsU",
	authDomain: "movies-app-16001.firebaseapp.com",
	projectId: "movies-app-16001",
	storageBucket: "movies-app-16001.firebasestorage.app",
	messagingSenderId: "71920852509",
	appId: "1:71920852509:web:e94da9ce78eae2344270f4",
	measurementId: "G-YKD7J7M371",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
