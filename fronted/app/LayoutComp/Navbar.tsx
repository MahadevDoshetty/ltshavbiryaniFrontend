"use client"
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { FaCartShopping } from 'react-icons/fa6'

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="sticky top-0 z-50 bg-[#0B1F2E]/90 backdrop-blur border-b border-[#2C4A5F]">

      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LOGO */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            src="/Logo.svg"
            width={40}
            height={40}
            alt="Logo"
            className="rounded-xl"
          />
          <span className="font-semibold text-[#F9FAFB] text-lg hidden sm:block">
            LtsHavBiryani
          </span>
        </div>

        {/* NAV LINKS */}
        <div className="flex items-center gap-2 sm:gap-4 text-sm">

          <button
            onClick={() => router.push("/Menu")}
            className="nav-btn"
          >
            Menu
          </button>

          <button
            onClick={() => router.push("/Cart")}
            className="nav-btn flex items-center gap-2"
          >
            <FaCartShopping />
            <span className="hidden sm:block">Cart</span>
          </button>

          <button
            onClick={() => router.push("/Login")}
            className="btn-primary"
          >
            Login
          </button>

        </div>

      </div>

      {/* STYLES */}
      <style jsx>{`
        .nav-btn {
          color: #9CA3AF;
          padding: 8px 12px;
          border-radius: 10px;
          transition: 0.2s;
        }

        .nav-btn:hover {
          color: #F9FAFB;
          background: #1E3A4C;
        }

        .btn-primary {
          background: #F4B400;
          color: #0B1F2E;
          padding: 8px 14px;
          border-radius: 10px;
          font-weight: 600;
          transition: 0.2s;
        }

        .btn-primary:hover {
          background: #D99A00;
        }
      `}</style>

    </div>
  )
}

export default Navbar;