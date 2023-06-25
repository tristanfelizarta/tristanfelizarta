'use client'

type MainProps = {
    children: React.ReactNode
}

const Main = ({ children }: MainProps) => {
    return (
        <main className="mx-auto flex min-h-full w-full max-w-7xl items-center px-6 py-20">
            {children}
        </main>
    )
}

export default Main
