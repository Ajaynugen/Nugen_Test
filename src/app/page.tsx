"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter(); 
  const handleLoginRedirect = () => {
 
    router.push("/Login");
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="text-blue-700 text-6xl">Welcome to Home Page</div>
    {/* <Link href="/login"> */}
        <button className="px-8 py-2 bg-blue-500 text-white mt-3 rounded-lg" onClick={()=>handleLoginRedirect()}>
        
          Go to Login
        </button>
        {/* </Link> */}
    </div>
  );
}
