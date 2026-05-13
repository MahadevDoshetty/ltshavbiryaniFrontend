import Image from "next/image";
import Banner from "./Banners/Banner";
import Menu from "./Menu/page";

export default function Home() {
  return (
    <div>
      <div>
        <Banner />
      </div>
      <div className="flex justify-center p-5 text-2xl">
        <div><h2>⭐⭐ Our Bestsellers ⭐⭐</h2></div>
      </div>
      <div>
        <Menu />
      </div>
    </div>
  )
}