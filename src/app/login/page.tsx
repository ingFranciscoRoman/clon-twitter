import { AuthButtonServer } from '@/app/components/AuthButtonServer'
import { IconLink } from '@tabler/icons-react'
import Link from 'next/link'

export default function Login () {
  return (
    <section className='grid place-content-center min-h-screen text-center'>
        <h1 className='text-xl font-bold text-center mb-4'>Iniciar sesión en TwitterClone</h1>
        <AuthButtonServer />
        <Link className='flex mt-6 text-small hover:bg-sky-300 p-1 rounded-sm transition' href="https://github.com/ingFranciscoRoman/clon-twitter">
          <span className='mr-1'>By Francisco Román - repositorio Github</span>
          <IconLink className='w-4' />
        </Link>
    </section>
  )
}
