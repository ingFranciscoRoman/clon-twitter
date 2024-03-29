'use client'

import { useFormStatus } from 'react-dom'

export function ComposePostBottom () {
  const { pending } = useFormStatus()
  return (
    <button
        disabled={pending}
        type='submit'
        className='bg-sky-500 text-sm disabled:opacity-40 disabled:pointer-events-none font-bold rounded-full px-5 py-2 self-end'
    >
        { pending ? 'Postear...' : 'Postear' }
    </button>
  )
}
