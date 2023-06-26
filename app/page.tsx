import '@/components/button/index.css'
import Link from 'next/link'

const Page = () => {
    return (
        <div className="flex w-full flex-col items-center gap-6 text-center">
            <h1 className="text-[48px] font-extrabold leading-[1] xl:text-[64px]">
                The React Developer
                <br className="lg:hidden" /> for the Web
            </h1>

            <p className="px-6 text-sm text-slate-600 lg:text-base">
                Hi, I&apos;m Tristan Felizarta, a passionate React developer
                dedicated to building outstanding web applications.
                <br className="hidden lg:block" />
                Through self-teaching, I have gained extensive expertise in
                React and its ecosystem.
            </p>

            <div className="flex gap-3">
                <Link href="/" className="btn primary md">
                    Showcase
                </Link>

                <a
                    href="https://github.com/tristanfelizarta"
                    target="_blank"
                    className="btn secondary md"
                >
                    GitHub
                </a>
            </div>
        </div>
    )
}

export default Page
