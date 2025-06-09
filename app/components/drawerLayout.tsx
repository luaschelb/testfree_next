'use client'
import BarsIcon from "@/resources/icons/BarsIcon";
import LadyBeetleIcon from "@/resources/icons/LadyBeetleIcon";
import { useState } from "react";
import { signout } from "../actions/auth";
import Link from "next/link";

interface DrawerLayoutProps {
    children: React.ReactNode
}

export default function DrawerLayout ({children}: DrawerLayoutProps) {
    const [ open, setOpen ] = useState(true);

    const toggleDrawer = () => {
        setOpen(prevState => !prevState)
    }

    return (
        <div>
            <div id="Header" className=" bg-blue-600 text-white drop-shadow-lg flex items-center h-16 w-full">
                <button 
                    className="hover:bg-blue-700/80 cursor-pointer ml-4 rounded-3xl p-2 transition-colors"
                    onClick={toggleDrawer}
                    >
                    <BarsIcon />
                </button>
                <span className="ml-1"><LadyBeetleIcon /></span>
                <span className="ml-1 text-xl font-bold">Test Free Next</span>
                <button 
                    onClick={signout}
                    className="ml-auto mr-12 hover:cursor-pointer py-1 px-2 rounded bg-gray-500 hover:bg-gray-600 text-white bold border-blue-600/50 border">Logout</button>
            </div>
            <div id="Main" className="flex h-[calc(100vh-4rem)]"> 
                <div id="Drawer" className={`overflow-hidden border-r border-gray-300 h-full transition-all ease-in-out duration-300
                    ${open ? "translate-x-0 w-40" : "-translate-x-full w-0"}`}>
                    <div className="p-4">
                        <h2 className="mb-4 text-lg font-semibold">Navigation</h2>
                        <nav className="space-y-2">
                        <Link href='/' className="block p-2 hover:bg-gray-100 rounded-lg hover:cursor-pointer">Home</Link>
                        <Link href='/projects' className="block p-2 hover:bg-gray-100 rounded-lg hover:cursor-pointer">Projects</Link>
                        <Link href='/' className="block p-2 hover:bg-gray-100 rounded-lg hover:cursor-pointer">Settings</Link>
                        <Link href='/' className="block p-2 hover:bg-gray-100 rounded-lg hover:cursor-pointer">Profile</Link>
                        </nav>
                    </div>      
                </div>
                <div id="Content" className="p-4 w-[calc(100vw-10rem)]">
                    {children}
                </div>
            </div>
        </div>
    )
}