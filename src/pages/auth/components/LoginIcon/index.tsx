interface LoginIconProps {
  children: React.ReactNode
  onClick: () => void
}

export default function LoginIcon({ children, onClick }: LoginIconProps) {
  return (
    <div
      onClick={onClick}
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
