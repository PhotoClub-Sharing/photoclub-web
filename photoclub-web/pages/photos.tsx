import React from "react";
import Layout from "./layout";
import { collection, getDocs } from "firebase/firestore"; 
export default async function Photos() {
  const [albums, setAlbums] = React.useState([]);
  
  React.useEffect(() => {
    const fetchAlbums = async () => {
      const querySnapshot = await getDocs(collection(db, "albums"));
      const albumsData = [];
    };
    fetchAlbums();
  }, []);
  querySnapshot.forEach((doc) => {
    albumsData.push(doc.data());
  });

  if (albums.length < 1) {
    return <p>No albums found</p>;
  }
  

  return (
    <Layout>
    <div>
      <h1>Albums</h1>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            <span>{album.name}</span>
            <span>{album.owner}</span>
          </li>
        ))}; 
    </div>
    </Layout>
  );
}
