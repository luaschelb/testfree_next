'use client'

import Link from "next/link";
import { useActionState } from "react";
import { login } from "../actions/auth";

export default function LoginForm() {
    const [state, action] = useActionState(login, undefined)
    return (
        <div className="size-full bg-stone-100 fixed">
            <form className="shadow rounded p-4 w-fit m-auto mt-16 bg-white" action={action}>
                <h1 className='text-center font-bold'>Login</h1>
                <div className='mb-2'>
                    <label className="block" htmlFor="name">Name</label>
                    <input id="name" name="name" placeholder="Name" className="py-2 px-3 shadow border rounded"/>
                    {state?.errors?.name && <p className='text-sm text-red-400'>Login is required</p>}
                </div>
                <div className='mb-2'>
                    <label className="block" htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" placeholder="Email" className="py-2 px-3 shadow border rounded"/>
                    {state?.errors?.email && <p className='text-sm text-red-400'>Email is required</p>}
                </div>
                <div className='mb-4'>
                    <label className="block" htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" 
                    className="py-2 px-3 shadow border rounded"/>
                    {state?.errors?.password && <p className='text-sm text-red-400'>Password is required</p>}
                </div>
                <button type="submit" 
                className="hover:cursor-pointer py-1 px-2 rounded bg-blue-500 hover:bg-blue-600 text-white border-blue-600/50 border">Sign In</button>
                <Link href={"register"} className= "py-1 px-2 float-end border-gray-800/50 border bg-gray-700 hover:bg-gray-800 rounded  text-white">Sign Up</Link>
            </form>
        </div>
    )
}