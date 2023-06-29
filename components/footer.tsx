'use client'

import { BiLogoGithub, BiLogoLinkedinSquare } from 'react-icons/bi'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="fixed bottom-0 z-10 flex h-20 w-full items-center bg-transparent">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6">
                <p className="text-sm text-slate-400">© {currentYear}</p>

                <div className="flex items-center gap-3">
                    <a
                        href="https://linkedin.com/in/tristanfelizarta"
                        target="_blank"
                    >
                        <BiLogoLinkedinSquare size={24} />
                    </a>

                    <a
                        href="https://github.com/tristanfelizarta"
                        target="_blank"
                    >
                        <BiLogoGithub size={24} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
