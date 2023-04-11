import MobileMenuItem from './MobileMenuItem'

interface MobileMenuProps {
  isOpen?: boolean
}

export default function MobileMenu({ isOpen }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <div
      className="
      bg-black
      w-56
      absolute
      top-8
      left-0
      py-5
      flex-col
      border-2
      border-gray-800
    "
    >
      <MobileMenuItem text="Home" />
      <MobileMenuItem text="Series" />
      <MobileMenuItem text="Films" />
      <MobileMenuItem text="New & Popular" />
      <MobileMenuItem text="My List" />
      <MobileMenuItem text="Browse by languages" />
    </div>
  )
}
