import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBMyQrqBIFkKscXEh-C929gRM54-BPw11Q",
    authDomain: "employeeform-f65f5.firebaseapp.com",
    databaseURL: "https://employeeform-f65f5-default-rtdb.firebaseio.com",
    projectId: "employeeform-f65f5",
    storageBucket: "employeeform-f65f5.appspot.com",
    messagingSenderId: "969635626862",
    appId: "1:969635626862:web:5cd78bfbc0fc5eb80c8b7f"
  };
  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);
  
  export default db;