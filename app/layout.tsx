import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Analytics from '@/components/analytics'
import Header from '@/components/header'
import Main from '@/components/main'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Tristan Felizarta',
    description:
        'A passionate React developer dedicated to building outstanding web applications.'
}

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en" className={inter.className}>
            <body>
                <Header />
                <Main>{children}</Main>
                <Footer />
            </body>

            <Analytics />
        </html>
    )
}

export default Layout
