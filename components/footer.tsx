'use client'

import { IconButton } from './button'
import { LuMoonStar } from 'react-icons/lu'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="fixed bottom-0 z-10 flex h-20 w-full items-center bg-white dark:bg-slate-950">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6">
                <p className="text-sm text-slate-600">© {currentYear}</p>

                <IconButton variant="secondary" size="sm">
                    <LuMoonStar size={16} />
                </IconButton>
            </div>
        </footer>
    )
}

export default Footer
