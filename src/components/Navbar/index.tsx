import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import AccountMenu from '../AccountMenu'
import MobileMenu from '../MobileMenu'
import NavbarItem from '../NavbarItem'

import { BsChevronDown, BsSearch, BsBell } from 'react-icons/bs'

const TOP_OFFSET = 66

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showAccountMenu, setShowAccountMenu] = useState(false)
  const [showBackground, setShowBackground] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true)
      } else {
        setShowBackground(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current)
  }, [])

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current)
  }, [])

  return (
    <nav className="w-full fixed z-40">
      <div
        className={`
          px-4
          sm:px-16
          py-6
          flex
          flex-row
          items-center
          transition
          duration-500
          ${showBackground ? 'bg-zinc-900  bg-opacity-90' : ''}
        `}
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
          <BsChevronDown
            className={`
                text-white 
                transition
                ${showMobileMenu ? 'rotate-180' : 'rotate-0'}
              `}
          />
          <MobileMenu isOpen={showMobileMenu} />
        </div>
        <div
          className="
            flex 
            flex-row 
            ml-auto 
            items-center 
            gap-7
          "
        >
          <div
            className="
            text-gray-200 
            hover:text-gray-300 
            cursor-pointer
            transition
          "
          >
            <BsSearch />
          </div>
          <div
            className="
            text-gray-200 
            hover:text-gray-300 
            cursor-pointer
            transition
          "
          >
            <BsBell />
          </div>
          <div
            className="
              flex 
              flex-row
              items-center
              gap-2
              cursor-pointer
              relative
            "
            onClick={toggleAccountMenu}
          >
            <div
              className="
                w-6 
                h-6 
                lg:w-10 
                lg:h-10 
                rounded-md 
                overflow-hidden
                relative
              "
            >
              <Image src="/images/default-blue.png" alt="Avatar" fill />
            </div>
            <BsChevronDown
              className={`
                text-white 
                transition
                ${showAccountMenu ? 'rotate-180' : 'rotate-0'}
              `}
            />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  )
}
