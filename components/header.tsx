'use client'

import '@/components/button/index.css'
import Link from 'next/link'
import Logo from './logo'

const Header = () => {
    return (
        <header className="fixed top-0 z-10 flex h-20 w-full items-center bg-white dark:bg-slate-950">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6">
                <Link href="/">
                    <Logo />
                </Link>

                <Link href="/" className="btn primary sm">
                    Hire Me
                </Link>
            </div>
        </header>
    )
}

export default Header
