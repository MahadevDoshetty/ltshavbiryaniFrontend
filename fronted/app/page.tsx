"use client"
import Banner from "./Banners/Banner";
import { useRouter } from "next/navigation";
import Menu from "./Menu/page";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-5">
      <div>
        <Banner />
      </div>
      <div className="flex justify-center p-5 text-2xl">
        <h2>⭐⭐ Our Bestsellers ⭐⭐</h2>
      </div>
      <div>
        <Menu />
      </div>
      <div className="p-5 text-xl font-extrabold" >
        <h1 className="text-2xl" >Curious what makes our biryani irresistibly delicious? <button className="text-yellow-500" onClick={() => { router.push("/ingredients") }} >Click here!</button> </h1>
      </div>
      <div></div>
    </div>
  )
}