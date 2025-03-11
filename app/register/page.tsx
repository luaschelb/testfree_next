'use client'
import { signup } from '@/app/actions/auth'
import { useActionState } from 'react'
 
export default function SignupForm() {
  const [state, action, pending] = useActionState(signup, undefined)
  return (
    <div className='w-fit m-auto mt-[15%]'>
      <form action={action} className="border rounded p-2">
        <h1 className='text-center font-bold'>Sign Up</h1>
        <div className='mb-2'>
          <label className="block" htmlFor="name">Name</label>
          <input id="name" name="name" placeholder="Name" className="py-2 px-3 shadow border rounded"/>
          {state?.errors?.name && <p>{state.errors.name}</p>}
        </div>
        <div className='mb-2'>
          <label className="block" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="Email" className="py-2 px-3 shadow border rounded"/>
          {state?.errors?.email && <p>{state.errors.email}</p>}
        </div>
        <div className='mb-2'>
          <label className="block" htmlFor="password">Password</label>
          <input id="password" name="password" type="password" 
          className="py-2 px-3 shadow border rounded"/>
          {state?.errors?.password && (
            <div>
              <p>Password must:</p>
              <ul>
                {
                  state.errors.password.map((item) => (
                    <li key={item}>{item}</li>
                  ))
                }
              </ul>
            </div>
          )}
        </div>
        <button type="submit" 
        disabled={pending}
          className="py-2 px-3 shadow border rounded bg-teal-100 hover:bg-teal-200 p-1 hover:cursor-pointer">Register</button>
      </form>
    </div>
  )
}