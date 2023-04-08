interface LoginIconProps {
  children: React.ReactNode
}

export default function LoginIcon({ children }: LoginIconProps) {
  return (
    <div
      className="
      w-10
      h-10
      bg-white
      rounded-full
      flex
      items-center
      justify-center
      cursor-pointer
      hover:opacity-80
      transition
    "
    >
      {children}
    </div>
  )
}
