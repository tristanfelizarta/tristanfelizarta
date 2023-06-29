import Image from 'next/image'
import Showcase1 from '@/public/assets/showcase/1.png'
import Showcase2 from '@/public/assets/showcase/2.png'
import Showcase3 from '@/public/assets/showcase/3.png'
import Showcase4 from '@/public/assets/showcase/4.png'
import Showcase5 from '@/public/assets/showcase/5.png'
import Showcase6 from '@/public/assets/showcase/6.png'

const content = [
    {
        id: 0,
        image: Showcase1,
        title: 'Romadan',
        link: 'https://romadan.vercel.app'
    },
    {
        id: 1,
        image: Showcase2,
        title: 'Ctxpress',
        link: 'https://ctxpress.vercel.app'
    },
    {
        id: 2,
        image: Showcase3,
        title: 'Dencares',
        link: 'https://dencares.vercel.app'
    },
    {
        id: 3,
        image: Showcase4,
        title: 'Bacspace',
        link: 'https://bacspace.vercel.app'
    },
    {
        id: 4,
        image: Showcase5,
        title: 'Pacecale',
        link: 'https://pacecale.vercel.app'
    },
    {
        id: 5,
        image: Showcase6,
        title: 'Cakemasa',
        link: 'https://cakemasa.vercel.app'
    }
]

const Page = () => {
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {content.map((data) => (
                <a href={data.link} target="_blank" key={data.id}>
                    <Image
                        alt={data.title}
                        src={data.image}
                        placeholder="blur"
                        quality={100}
                        className="rounded-xl"
                    />
                </a>
            ))}
        </div>
    )
}

export default Page
