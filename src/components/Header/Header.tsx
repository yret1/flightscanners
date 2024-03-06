import Link from "next/link"
import Menu from "@/assets/Menu.svg"
import Logo from "@/assets/Logo.svg"
import Image from "next/image"
const Header = () => {
  return (
    <header className="bg-neutral-50 px-2 h-16 flex justify-center shadow-3xl shadow-black items-center">
        <div className="flex-1 h-full flex justify-start items-center">
            <i className="h-full flex justify-center items-center">
                <Image src={Logo} width={50} alt="Logo"></Image>
            </i>
            <h2 className="font-bold text-[#6254f3] hidden sm:block">Flightscanner</h2>
        </div>
        <ul className=" hidden sm:flex flex-1 text-[#6254f3]  justify-center items-center gap-4 font-semibold">
            <li className="hover:text-black cursor-pointer"><Link href={"/"}>Home</Link></li>
            <li className="hover:text-black cursor-pointer"><Link href={"/deals"}>Deals</Link></li>
            <li className="hover:text-black cursor-pointer"><Link href={"/about"}>About</Link></li>
            <li className="hover:text-black cursor-pointer"><Link href={"/contact"}>Contact</Link></li>
        </ul>
        <div className="flex-1 sm:hidden flex justify-end items-center h-full">
            <button className="h-full">
                <Image src={Menu} height={40} alt="Logo" />
            </button>
        </div>
    </header>
  )
}

export default Header