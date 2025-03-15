import Image from "next/image";
import Link from 'next/link';
import Layout from './layout';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
export default function Home() {
  const Download = () => {
    console.log("Code for downloading photos goes here");
  }
  const Login = () => {
    console.log("Code for login goes here");
  }
  return (
    <Layout>
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
         <button className="bg-orange-600 hover:bg-orange-400 text-white hover:text-white font-bold py-2 px-4 rounded" onClick={Download}>
          <a href="#">Download Photos</a> 
        </button>
        <button className="bg-orange-600 hover:bg-orange-400 text-white hover:text-white font-bold py-2 px-4 rounded">
          <Link href="/login">Login</Link>
        </button>
      </main>
    </div>
  </Layout>
  );
}
