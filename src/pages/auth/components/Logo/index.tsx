import Image from 'next/image'

export default function Logo() {
  return (
    <nav className="px-12 py-5">
      <Image
        src="/images/logo.png"
        alt="Logo"
        height={20}
        width={180}
        sizes="heigth: 48px;"
        style={{
          width: 'auto',
          height: '48px'
        }}
      />
    </nav>
  )
}
