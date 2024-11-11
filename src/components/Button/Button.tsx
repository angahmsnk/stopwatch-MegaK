import './Button.scss'

interface ButtonProps {
    btnName: string;
    btnFn: () => void;
}

export const Button = ({btnName, btnFn}: ButtonProps) => {
    return <button onClick={btnFn} className={`button button--${btnName}`}>{btnName.toUpperCase()}</button>
}