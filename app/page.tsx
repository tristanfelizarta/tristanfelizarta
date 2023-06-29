import '@/components/button/index.css'
import Link from 'next/link'
import { BiLogoGithub } from 'react-icons/bi'

const Page = () => {
    return (
        <div className="flex w-full flex-col items-center gap-6 text-center">
            <h1 className="text-4xl font-extrabold md:text-5xl lg:text-6xl xl:text-7xl">
                The Full Stack
                <br className="block lg:hidden" /> Dev for the Web
            </h1>

            <p className="px-6 text-sm text-slate-400 lg:text-base">
                Hi, I&apos;m Tristan Felizarta, a passionate Full Stack
                developer dedicated to crafting exceptional web applications.
                <br className="hidden md:block" /> Through self-teaching, I have
                acquired extensive expertise in various aspects of web
                development.
            </p>

            <div className="flex gap-3">
                <Link href="/showcase" className="btn primary md">
                    Showcase
                </Link>

                <a
                    href="https://github.com/tristanfelizarta"
                    target="_blank"
                    className="btn secondary md flex items-center gap-2"
                >
                    <BiLogoGithub size={20} />
                    GitHub
                </a>
            </div>
        </div>
    )
}

export default Page
