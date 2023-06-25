import './index.css'

type ButtonProps = {
    children: React.ReactNode
    variant: 'primary' | 'secondary'
    size: 'sm' | 'md'
}

export const Button = ({ children, variant, size }: ButtonProps) => {
    return <button className={`btn ${variant} ${size}`}>{children}</button>
}

export const IconButton = ({ children, variant, size }: ButtonProps) => {
    return <button className={`btn icon ${variant} ${size}`}>{children}</button>
}
