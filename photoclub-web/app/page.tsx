import Image from "next/image";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBU9OvJ15hPXmQU0JDUykSIeNgHsatKzc",
  authDomain: "photoclub-281c2.firebaseapp.com",
  projectId: "photoclub-281c2",
  storageBucket: "photoclub-281c2.firebasestorage.app",
  messagingSenderId: "60265097004",
  appId: "1:60265097004:web:afc557220ee747a5e7ee89",
  measurementId: "G-NN51Y5620H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 align-content-center gap-16 sm:p-20 font-[family-name:var(--font-lilita-one)] bg-[#FFBC51]">
      <main className="flex flex-col gap-[32px] row-start-2 align-items-center items-center sm:items-start justify-content-center">
        <Image
          className="size-xl"
          src="/logo.svg"
          alt="Photo Club Photo sharing made easy"
          width={360}
          height={76}
          priority
        /> 
         <div className="bg-orange-200 hover:bg-orange-600 text-orange-600 hover:text-white font-bold py-2 px-4 rounded">
          <a href="#">Download Photos</a> 
        </div>
      </main>
    </div>
  );
}
