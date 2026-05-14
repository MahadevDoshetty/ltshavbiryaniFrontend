import Image from "next/image";
import Banner from "./Banners/Banner";
import Menu from "./Menu/page";
import Reviews from "./Reviews";

export default function Home() {
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
      <div>
        <Reviews />
      </div>
      <div></div>
    </div>
  )
}