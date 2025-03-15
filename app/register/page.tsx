'use client'
import { signup } from '@/app/actions/auth'
import Link from 'next/link'
import { useActionState } from 'react'
 
export default function SignupForm() {
  const [state, action, pending] = useActionState(signup, undefined)
  return (
    <div className='size-full bg-stone-100 fixed'>
      <form action={action} className="shadow rounded p-4 w-fit m-auto mt-16 bg-white">
        <h1 className='text-center font-bold'>Sign Up</h1>
        <div className='mb-2'>
          <label className="block" htmlFor="name">Name</label>
          <input id="name" name="name" placeholder="Name" className="py-2 px-3 shadow border rounded"/>
          {state?.errors?.name && <p className='text-sm text-red-400'>{state.errors.name}</p>}
        </div>
        <div className='mb-2'>
          <label className="block" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="Email" className="py-2 px-3 shadow border rounded"/>
          {state?.errors?.email && <p className='text-sm text-red-400'>{state.errors.email}</p>}
        </div>
        <div className='mb-2'>
          <label className="block" htmlFor="password">Password</label>
          <input id="password" name="password" type="password" 
          className="py-2 px-3 shadow border rounded"/>
          {state?.errors?.password && (
            <div>
              <p className='text-sm text-bold'>Password must:</p>
              <ul>
                {
                  state.errors.password.map((item) => (
                    <li key={item} className='text-sm text-red-400'>* {item}</li>
                  ))
                }
              </ul>
            </div>
          )}
        </div>
        <div className='mt-4 flex w-full items-center justify-between'>
          <button type="submit" 
          disabled={pending}
            className="hover:cursor-pointer py-1 px-2 rounded bg-blue-500 hover:bg-blue-600 text-white border-blue-600/50 border">Register</button>
          <Link href="/login" className='text-blue-500 w-fit'>Return to login</Link>
        </div>
      </form>
    </div>
  )
}