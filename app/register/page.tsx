import { signup } from '@/app/actions/auth'
 
export default function SignupForm() {
  return (
    <div className='w-fit m-auto mt-[15%]'>
      <form action={signup} className="border rounded p-2">
        <h1 className='text-center font-bold'>Register</h1>
        <div className='mb-2'>
          <label className="block" htmlFor="name">Name</label>
          <input id="name" name="name" placeholder="Name" className="py-2 px-3 shadow border rounded"/>
        </div>
        <div className='mb-2'>
          <label className="block" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="Email" className="py-2 px-3 shadow border rounded"/>
        </div>
        <div className='mb-2'>
          <label className="block" htmlFor="password">Password</label>
          <input id="password" name="password" type="password" 
          className="py-2 px-3 shadow border rounded"/>
        </div>
        <button type="button" 
          className="py-2 px-3 shadow border rounded bg-teal-100 hover:bg-teal-200 p-1 hover:cursor-pointer">Sign Up</button>
      </form>
    </div>
  )
}