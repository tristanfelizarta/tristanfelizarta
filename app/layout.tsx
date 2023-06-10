import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Tristan Felizarta',
    description: ''
}

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en" className={inter.className}>
            <body>{children}</body>
        </html>
    )
}

export default Layout
