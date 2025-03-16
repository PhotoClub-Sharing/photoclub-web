import Layout from './layout';
import Link from 'next/link';
import Image from 'next/image';

export default function Login() {
  const EmailLogin = () => {
    console.log("Email Login");
  }
  const GuestLogin = () => {
    console.log("Guest Login");
  }
  return (
    <Layout>
    <div className="flex flex-col items-center justify-center h-screen bg-[#FFBC51]">
      <Image src="/loginlogo.svg" alt="login" width={300} height={200} />

      <button className="px-4 py-2 mt-4 bg-orange-600 text-orange-200 hover:bg-orange-700 hover:text-white rounded-md" onClick={EmailLogin}>Continue with Email</button>
      <button className="px-4 py-2 mt-4 bg-orange-600 hover:bg-orange-700 hover:text-white rounded-md" onClick={GuestLogin}>Continue as Guest</button>
      <button className="px-4 py-2 mt-4 bg-orange-600 hover:bg-orange-700 hover:text-white rounded-md">
      <Link href="/">Back to Home</Link>
      </button>
    </div>
    </Layout>
  );
}
