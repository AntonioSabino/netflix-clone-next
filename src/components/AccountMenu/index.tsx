import { signOut } from 'next-auth/react'
import Image from 'next/image'

interface AccountMenuProps {
  visible?: boolean
}

export default function AccountMenu({ visible }: AccountMenuProps) {
  if (!visible) return null

  return (
    <div
      className="
        bg-black 
        w-56 
        absolute 
        top-14
        right-0
        py-5
        flex
        flex-col
        border-2
        border-gray-800
      "
    >
      <div className="flex flex-col gap-3">
        <div
          className="
            px-3
            group/item
            flex
            flex-row
            gap-3
            items-center
            w-full
          "
        >
          <div className="w-8 h-8 rounded-md overflow-hidden relative">
            <Image src="/images/default-blue.png" alt="Avatar" fill />
          </div>
          <p className="text-white text-sm group-hover/item:underline">
            Username
          </p>
        </div>
        <hr
          className="
            bg-gray-600 border-0 h-px my-4
          "
        />
        <div
          className="
            px-3 
            text-center 
            text-white 
            text-sm
            hover:underline 
          "
          onClick={() => signOut()}
        >
          Sign out of Netflix
        </div>
      </div>
    </div>
  )
}
