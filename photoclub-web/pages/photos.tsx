'use server'
import React from "react";
import Layout from "./layout";
import { collection, query, getDocs } from "firebase/firestore"; 
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
  async function refreshAlbums() { 
    const albums = fetchAlbums();
    if (albums.length < 1) {
      return <p>No albums found</p>;
  
      const albums = fetchAlbums();
  if (albums.length < 1) {
    return <p>No albums found</p>;
  }

  return (
    <Layout>
      <div>
        <button 
          className="px-4 py-2 mt-4 bg-white text-black rounded-md"
          onClick={refreshAlbums}>
          Refresh Albums
        </button>
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
