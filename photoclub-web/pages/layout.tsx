import "./globals.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

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
const picRef = ref(storage, 'photos');
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
