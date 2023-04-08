import AuthForm from './components/Form'
import Logo from './components/Logo'

export default function AuthPage() {
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
        <Logo />
        <AuthForm />
      </div>
    </div>
  )
}
