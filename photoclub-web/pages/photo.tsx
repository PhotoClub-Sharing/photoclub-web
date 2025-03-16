import React, { useState, useEffect } from "react";
import Image from "next/image";
import Layout from "./layout";
import FirebaseInit from "./initfirebasee";
import FetchAlbums, { DownloadAlbums } from "./fetchAlbums";

export default function Photos() {
  const db = FirebaseInit();
  const [albums, setAlbums] = useState([]);
  const [code, setCode] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");

  useEffect(() => {
    const getAlbums = async () => {
      const albumList = await FetchAlbums(db);
      setAlbums(albumList);
    };
    getAlbums();
  }, [db]);

  const checkCode = (e) => {
    e.preventDefault();
    const album = albums.find((album) => album.code === code);
    if (album) {
      const albumid = album.id;
      const url = DownloadAlbums(albumid);
      setDownloadUrl(url);
    } else {
      alert("Album not found");
    }
  };

  return (
    <Layout>
      <div className="bg-[#FFBC51] font-[family-name:var(--font-lilita-one)] grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 align-content-center gap-16 sm:p-20 md:p-32 lg:p-40 xl:p-48">
        <form onSubmit={checkCode} className="flex flex-col items-center justify-center w-full max-w-md p-8 mx-auto bg-white rounded-lg shadow-lg">
          <input
            type="text"
            id="code"
            placeholder="Enter album code"
            className="w-full p-2 mb-4 border text-black border-gray-300 rounded-lg" 
            onChange={(e) => setCode(e.target.value)} 
          />
          <button type="submit" className="w-50% p-2 text-white bg-orange-500 rounded-lg">
            Submit
          </button>
        </form>
        {downloadUrl && (
          <div>
            <a href={downloadUrl} download className="w-full p-2 mb-4 text-white bg-orange-500 rounded-lg">
              Download Album
            </a>
          </div>
        )}
      </div>
    </Layout>
  );
}
