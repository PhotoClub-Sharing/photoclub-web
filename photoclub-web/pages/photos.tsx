import React from "react";
import Layout from "./layout";
import { collection, getDocs } from "firebase/firestore"; 
export default async function Photos() {
  const [albums, setAlbums] = React.useState([]);
  
  React.useEffect(() => {
    const fetchAlbums = async () => {
      const querySnapshot = await getDocs(collection(db, "Albums"));
      const albumsData = [];
      querySnapshot.forEach((doc) => {
        albumsData.push(doc.data());
      });
    };
    fetchAlbums();
  if (albums.length < 1) {
    return <p>No albums found</p>;
  }
  

  return (
    <Layout>
      <div>
    <h1>Albums</h1>
      <ul>
        {albumData.map((album) => (
          <li key={album.code}>
            <div>
              <Image src={album.thumbnailURL} alt={album.name} />
              <span>{album.name}</span>
              <span>{album.owner}</span>
            </div> 
          </li>
        ))}; 
    </div>
    </Layout>
  );
}
