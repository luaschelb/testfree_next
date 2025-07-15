'use client'
import BarsIcon from "@/resources/icons/BarsIcon";
import LadyBeetleIcon from "@/resources/icons/LadyBeetleIcon";
import { useState } from "react";
import { signout } from "../actions/signOut";
import Link from "next/link";
import styles from './DrawerLayout.module.css'


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
            <div id="Header" className={styles.header}>
                <button className={styles.menuButton} onClick={toggleDrawer}>
                    <BarsIcon />
                </button>
                <span>
                    <LadyBeetleIcon />
                </span>
                <span className={styles.title}>Test Free Next</span>
                <button onClick={signout} className={styles.logoutButton}>
                Logout
                </button>
            </div>

            <div id="Main" className={styles.main}>
                <div
                id="Drawer"
                className={`${styles.drawer} ${open ? styles.drawerOpen : styles.drawerClosed}`}
                >
                    <div className={styles.drawerInner}>
                        <h2 className={styles.drawerTitle}>Navigation</h2>
                        <nav>
                        <Link href="/" className={styles.navItem}>Home</Link>
                        <Link href="/projects" className={styles.navItem}>Projects</Link>
                        <Link href="/" className={styles.navItem}>Settings</Link>
                        <Link href="/" className={styles.navItem}>Profile</Link>
                        </nav>
                    </div>
                </div>
                    <div id="Content" className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    )
}