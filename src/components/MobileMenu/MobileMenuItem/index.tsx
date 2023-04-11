interface MobileMenuItemProps {
  text: string
}

export default function MobileMenuItem({ text }: MobileMenuItemProps) {
  return (
    <div className=" flex flex-col gap-4">
      <div className="px-3 text-center text-white hover:underline">{text}</div>
    </div>
  )
}
