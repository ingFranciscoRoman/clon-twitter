'use client'

import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader
} from '@nextui-org/react'
import Link from 'next/link'
import { IconMessageCircle, IconHeart, IconRepeat } from '@tabler/icons-react'

export function PostsCard ({ userName, userFullName, avatarUrl, content }: { userName: string, userFullName: string, avatarUrl: string, content: string }) {
  return (
    <Card className='shadow-none bg-transparent hover:bg-slate-800 transition border-b rounded-none cursor-pointer border-white/20'>
      <CardHeader className='justify-between'>
        <div className='flex gap-x-3'>
          <Link href={`/${userName}}`}>
            <Avatar
              radius='full'
              size='md'
              src={avatarUrl}
            />
          </Link>
          <div className='flex flex-col gap-1 items-start justify-center'>
            <h4 className='text-small font-semibold leading-none text-default-600'>
              {userFullName}
            </h4>
            <h5 className='text-small tracking-tight text-default-400'>
              @{userName}
            </h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className='px-5 py-0 text-xs text-white'>
        <p>
          {content}
        </p>
      </CardBody>
      <CardFooter className='gap-3'>
        <button>
          <IconMessageCircle className='w-4 h-4' />
        </button>
        <button>
          <IconHeart className='w-4 h-4' />
        </button>
        <button>
          <IconRepeat className='w-4 h-4' />
        </button>
      </CardFooter>
    </Card>
  )
}
