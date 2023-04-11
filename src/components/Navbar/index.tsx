import Image from 'next/image'
import NavbarItem from '../NavbarItem'
import { BsChevronDown } from 'react-icons/bs'
import MobileMenu from '../MobileMenu'
import { useCallback, useState } from 'react'

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current)
  }, [])

  return (
    <nav className="w-full fixed z-40">
      <div
        className="
          px-4
          sm:px-16
          py-6
          flex
          flex-row
          items-center
          transition
          duration-500
          bg-zinc-900
          bg-opacity-90
        "
      >
        <div className="h-4 w-16 lg:h-7 lg:w-28 relative">
          <Image src="/images/logo.png" alt="Logo" fill />
        </div>

        <div
          className="
          flex-row
          ml-8
          gap-7
          hidden
          lg:flex
        "
        >
          <NavbarItem label="Home" />
          <NavbarItem label="Series" />
          <NavbarItem label="Films" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="My List" />
          <NavbarItem label="Browser by languages" />
        </div>
        <div
          className="
            lg:hidden 
            flex 
            flex-row 
            items-center
            gap-2
            ml-8
            cursor-pointer
            relative
          "
          onClick={toggleMobileMenu}
        >
          <p className="text-white text-sm">Browse</p>
          <BsChevronDown className="text-white transition" />
          <MobileMenu isOpen={showMobileMenu} />
        </div>
      </div>
    </nav>
  )
}
