import FirebaseInit from "./initfirebasee"
import {query, getDocs, collection } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
//export default async function FetchAlbums() {
 // const db = FirebaseInit();
//  const q = query(collection(db, "albums"));
  //const querySnapshot = await getDocs(q);
 // const albumList = Array.from(querySnapshot.docs.map((doc) => doc.data()));
 // return albumList;
//}
//export async function DownloadAlbums(albumid: string) {  const Storage = FirebaseInit().Storage();
//  const picRef = Storage.ref("images");
  //const albumList = await Promise.all(
    //albums.map(async (album) => {
      //const id = albumid;
    //  const picUrl = await picRef.child(`${id}/*.jpeg`).getDownloadURL()
     // return picUrl;
   // }))
//}
