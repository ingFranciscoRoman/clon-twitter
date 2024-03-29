'use server'

import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'

export const addPost = async (formData: FormData) => {
  const content = formData.get('posts')
  // eslint-disable-next-line no-useless-return
  if (content === null) return
  const supabase = createServerActionClient({ cookies })
  // Validar si el usuario esta autentificado
  const { data: { session: { user } } } = await supabase.auth.getSession()
  if (user === null) return
  await supabase.from('posts').insert({ content, user_id: user.id })

  revalidatePath(`/?content=${content.toString()}`)
}
