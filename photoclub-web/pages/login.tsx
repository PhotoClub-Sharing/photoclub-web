import Layout from './layout';
export default function Login() {
  const GoogleLogin = () => {
    console.log("Google Login");
  }
  const AppleLogin = () => {
    console.log("Apple Login");
  }
  const GuestLogin = () => {
    console.log("Guest Login");
  }
  return (
    <Layout>
    <div className="flex flex-col items-center justify-center h-screen bg-[#FFBC51]">
      <h1 className="">Login</h1>
      <button className="px-4 py-2 mt-4 bg-white text-black rounded-md" onClick={GoogleLogin}>Continue with Google</button>
      <button className="px-4 py-2 mt-4 bg-black text-white rounded-md" onClick={AppleLogin}>Continue with Apple</button>
      <button className="px-4 py-2 mt-4 bg-orange-600 rounded-md" onClick={GuestLogin}>Continue as Guest</button>
    </div>
    </Layout>
  );
}
