// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// 🔑 Aapka Firebase Config (Firebase console se liya hua)
const firebaseConfig = {
  apiKey: "AIzaSyAb2HBC8MrCjJiR5Q6bjDEzKWuWY3PePBg",
    authDomain: "edura-plus.firebaseapp.com",
      projectId: "edura-plus",
        storageBucket: "edura-plus.appspot.com", // ✅ correct spelling
          messagingSenderId: "124283825015",
            appId: "1:124283825015:web:8c6d0418ddc870e7e00f72",
              measurementId: "G-J7CTY02YK6"
              };

              // ✅ Initialize Firebase
              const app = initializeApp(firebaseConfig);

              // ✅ Firebase services export karo
              export const auth = getAuth(app);                     // Authentication
              export const provider = new GoogleAuthProvider();     // Google Login Provider
              export const db = getFirestore(app);                  // Firestore Database
              export const analytics = getAnalytics(app);           // Analytics

              export default app;