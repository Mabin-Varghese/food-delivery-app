import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDLfN9anP9mZYaImEalDAKTMBOcJ90Uuo0",
    authDomain: "restaurentapp-cb5e0.firebaseapp.com",
    databaseURL: "https://restaurentapp-cb5e0-default-rtdb.firebaseio.com",
    projectId: "restaurentapp-cb5e0",
    storageBucket: "restaurentapp-cb5e0.appspot.com",
    messagingSenderId: "123561584391",
    appId: "1:123561584391:web:1405e94488eb8c46e907a2",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
