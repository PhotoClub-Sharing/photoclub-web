import FirebaseInit from "./initfirebasee"
import {query, getDocs, collection } from "firebase/firestore";
export default async function FetchAlbums() {
  const db = FirebaseInit();
  const q = query(collection(db, "albums"));
  const querySnapshot = await getDocs(q);
  const albumList = Array.from(querySnapshot.docs.map((doc) => doc.data()));
  return albumList;
}
