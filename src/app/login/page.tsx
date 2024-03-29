import { AuthButtonServer } from '@/app/components/AuthButtonServer'

export default function Login () {
  return (
    <section className='grid place-content-center min-h-screen text-center'>
        <h1 className='text-xl font-bold text-center mb-4'>Iniciar sesión en TwitterClone</h1>
        <AuthButtonServer />
    </section>
  )
}
