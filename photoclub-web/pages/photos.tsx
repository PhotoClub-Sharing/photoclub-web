'use server'
import React from "react";
import Image from "next/image";
import Layout from "./layout";
import FirebaseInit from "./initfirebasee";
import { collection, query, getDocs, getFirestore } from "firebase/firestore";

//const firebaseConfig = {
 // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  //authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
 // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
 // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  //messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//};
//const app = initializeApp(firebaseConfig);
//const db = getFirestore(app);
export default async function Photos() {
  const db = FirebaseInit().db;
  const albumData = []; 
  async function fetchAlbums() {
      const q = query(collection(db, "Albums"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        albumData.push(doc.data());
      });
      return albumData;
    };
  const albums = await fetchAlbums();
  if (albums.length < 1) {
    return <p>No albums found</p>;
  }
  const sif =  ({
    showWhen,
    children
  }: {
  showWhen: boolean;
  children: React.ReactNode;
}) => {
  if (showWhen) {
    return <>{children}</>;
  }
 return <></>;


  return (
    <Layout>
      <div className="bg-[#FFBC51]" font-family="font-var(--font-lilita-one) grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 align-content-center gap-16 sm:p-20 md:p-32 lg:p-40 xl:p-48"
        <ol
          {albums.map((album) => (
            <li key={album.code}>
            <div>
              <sif showWhen={album.thumbnailURL != "" | album.thumbnailURL != null}>
                <Image src={album.thumbnailURL} alt={album.name} width={200} height={200} />}
              </sif>
              <sif showWhen={album.thumbnailURL == "" | album.thumbnailURL == null}>
                <Image src="/placeholderimg.svg" alt={album.name} width={200} height={200} />}
              </sif>
              <span>{album.name} </span>
            </div> 
            </li>
          ))};
        </ol>
    </div>
  </Layout>
);
}
