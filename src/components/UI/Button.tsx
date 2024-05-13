interface ButtonProps {
  text: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

const Button = ({ text, type = 'button', onClick }: ButtonProps) => {
  return (
    <button className="button" type={type} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
