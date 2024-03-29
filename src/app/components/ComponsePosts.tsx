'use client'

import { ComposePostBottom } from './ComposePostBottom'
import { addPost } from '../actions/AddPostActios'
import { useRef } from 'react'

export function ComposePosts (userAvatarUrl: { userAvatarurl: string }) {
  const imgAvatar = Object.values(userAvatarUrl)
  const formRef = useRef<HTMLFormElement>(null)

  return (
        <form ref={formRef} action={ async (formData) => {
          await addPost(formData)
          formRef.current?.reset()
        } } className='flex flex-row p-4 border-b border-white/20'>
            <img className='rounded-full w-10 h-10 mr-4' src={imgAvatar} />
            <div className='flex flex-1 flex-col gap-y-4'>
              <textarea
                name='posts'
                rows={4}
                className='w-full text-2xl bg-black placeholder-gray-500 p-2'
                placeholder='¡¿Qué está pasando?!'
              ></textarea>
              <ComposePostBottom />
            </div>
        </form>
  )
}
