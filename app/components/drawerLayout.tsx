'use client'
import BarsIcon from "@/resources/icons/BarsIcon";
import LadyBeetleIcon from "@/resources/icons/LadyBeetleIcon";
import { useState } from "react";

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
            <div id="Header" className=" bg-blue-600 text-white drop-shadow-lg flex items-center h-16">
                <button 
                    className="hover:bg-blue-100 cursor-pointer ml-4 rounded-3xl p-1.5 transition-colors"
                    onClick={toggleDrawer}
                    >
                    <BarsIcon />
                </button>
                <span className="ml-1"><LadyBeetleIcon /></span>
                <span className="ml-1 text-xl font-bold">Test Free Next</span>
            </div>
            <div id="Main" className="flex h-[calc(100vh-4rem)]"> 
                <div id="Drawer" className={`overflow-hidden border-r border-gray-300 h-full transition-all ease-in-out duration-300
                    ${open ? "translate-x-0 w-64" : "-translate-x-full w-0"}`}>
                    <div className="p-4">
                        <h2 className="mb-4 text-lg font-semibold">Navigation</h2>
                        <nav className="space-y-2">
                        <a href="#" className="block p-2 hover:bg-gray-100 rounded-lg">Home</a>
                        <a href="#" className="block p-2 hover:bg-gray-100 rounded-lg">Dashboard</a>
                        <a href="#" className="block p-2 hover:bg-gray-100 rounded-lg">Settings</a>
                        <a href="#" className="block p-2 hover:bg-gray-100 rounded-lg">Profile</a>
                        </nav>
                    </div>
                </div>
                <div id="Content" className="p-4">
                    {children}
                </div>
            </div>
        </div>
    )
}