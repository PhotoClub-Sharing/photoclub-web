import Image from "next/image";
import Link from 'next/link';
import Layout from './layout';
import { useState } from "react";

export default function Home() {
  const [isHydrated, setIsHydrated] = useState(false);



  if (!isHydrated) {
    return null; // Ensure the client and server render the same initial markup
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
         <button className="bg-orange-600 hover:bg-orange-400 text-white hover:text-white font-bold py-2 px-4 rounded">
        <Link href="/download">Download Photos</Link> 
        </button>
      </main>
    </div>
  </Layout>
  );
    setIsHydrated(true);

}
