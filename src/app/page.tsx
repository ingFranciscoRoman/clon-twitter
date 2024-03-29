import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { AuthButtonServer } from './components/AuthButtonServer'
import { redirect } from 'next/navigation'
import PostList from './components/PostsList'
import { type Database } from './types/database'
import { ComposePosts } from './components/ComponsePosts'

export default async function Home () {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if (session === null) {
    redirect('/login')
  }

  const { data: posts } = await supabase
    .from('posts')
    .select('*, users(name, user_name, avatar_url)')
    .order('created_at', { ascending: false })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className='max-w-[600px] w-full mx-auto border-l border-r border-white/20 min-h-screen'>
       <ComposePosts userAvatarurl={session?.user.user_metadata.avatar_url} />
       <PostList posts={posts} />
      </section>
      <AuthButtonServer />
    </main>
  )
}
