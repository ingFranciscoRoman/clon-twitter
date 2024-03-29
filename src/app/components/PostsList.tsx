import { PostsCard } from '@/app/components/PostsCard'
import { type Database } from '../types/database'

type Posts = Database['public']['Tables']['posts']['Row']

export default function PostList ({ posts }: { posts: Posts[] | null }) {
  return (
    <>
      {posts?.map((post) => {
        const {
          id,
          users,
          content
        } = post

        const {
          user_name: userName,
          name: userFullName,
          avatar_url: avatarUrl
        } = users

        return (
          <PostsCard
            key={id}
            userName={userName}
            userFullName={userFullName}
            avatarUrl={avatarUrl}
            content={content}
          />
        )
      })}
    </>
  )
}
