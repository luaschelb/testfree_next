import Link from "next/link";

export default function () {
    return (
        <div className='w-fit m-auto mt-[15%]'>
            <form className="border rounded p-2">
                <h1 className='text-center font-bold'>Login</h1>
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
                <button type="submit" 
                className="hover:cursor-pointer py-1 px-2 border rounded bg-teal-100 hover:bg-teal-200">Sign In</button>
                <Link href={"register"} className= "py-1 px-2 float-end bg-gray-700 hover:bg-gray-800 rounded  text-white">Sign Up</Link>
            </form>
        </div>
    )
}