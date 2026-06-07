
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
apiKey: "AIzaSyDyXGxZvoGol3jDffQL01zBDRmnuhAYOkY",
authDomain: "sliatedge.firebaseapp.com",
projectId: "sliatedge",
storageBucket: "sliatedge.firebasestorage.app",
messagingSenderId: "301159507745",
appId: "1:301159507745:web:49c9a30772931ad1ebc060"
};


const app = initializeApp(firebaseConfig);


let analytics;
if (typeof window !== "undefined") {
analytics = getAnalytics(app);
}


export const auth = getAuth(app);
export const db = getFirestore(app);
export { analytics };