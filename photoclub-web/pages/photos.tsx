'use server'
import React from "react";
import Layout from "./layout";
import { collection, query, getDocs, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default async function Photos() {
  const albumData = []; 
  async function fetchAlbums() {
      const q = query(collection(db, "Albums"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        albumData.push(doc.data());
      });
      return albumsData;
    };
  await fetchAlbums();
  if (albumsData.length < 1) {
    return <p>No albums found</p>;
  }

  return (
    <Layout>
      <div>
        <ul>
          {albumData.map((album) => (
            <li key={album.code}>
            <div>
              <Image src={album.thumbnailURL} alt={album.name} />
              <span>{album.name}</span>
              <span>owned by {album.owner}</span>
            </div> 
            </li>
          ))};
        </ul>
    </div>
  </Layout>
    );
}
