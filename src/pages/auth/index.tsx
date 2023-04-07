import Image from 'next/image'
import { useCallback, useState } from 'react'
import Input from './components/input'

export default function AuthPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [variant, setVariant] = useState<'login' | 'register'>('login')

  const toggleVariant = useCallback(() => {
    setVariant((prev) => (prev === 'login' ? 'register' : 'login'))
  }, [])

  return (
    <div
      className="
        relative 
        h-full 
        w-full 
        bg-[url('/images/hero.jpg')] 
        bg-no-repeat 
        bg-center 
        bg-fixed bg-cover
      "
    >
      <div className="bg-black sm:bg-opacity-50 w-full h-full">
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
        <div className="flex justify-center">
          <div
            className="
              bg-black/70 
              px-16 
              py-16 
              self-center 
              mt-2 
              max-w-md 
              rounded-md 
              w-full
            "
          >
            <h2
              className="
              text-white 
                text-4xl 
                mb-8 
                font-semibold
              "
            >
              {variant === 'login' ? 'Entrar' : 'Cadastre-se'}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === 'register' && (
                <Input
                  id="username"
                  label="Nome do usuário"
                  type="text"
                  onChange={(e) => {
                    setName(e.target.value)
                  }}
                  value={name}
                />
              )}
              <Input
                id="email"
                label="Email"
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                value={email}
              />
              <Input
                id="password"
                label="Senha"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                value={password}
              />
            </div>
            <button
              className=" 
                bg-red-600
                py-3
                text-white
                rounded-md
                w-full
                mt-10
                hover:bg-red-700
                transition
              "
            >
              {variant === 'login' ? 'Entrar' : 'Cadastrar'}
            </button>
            <p className="text-neutral-500 mt-12">
              {variant === 'login' ? 'Novo por aqui?' : 'Já tem uma conta?'}
              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                {variant === 'login' ? 'Cadastre-se' : 'Entre'} agora.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
