'use client'

type MainProps = {
    children: React.ReactNode
}

const Main = ({ children }: MainProps) => {
    return <main>{children}</main>
}

export default Main
