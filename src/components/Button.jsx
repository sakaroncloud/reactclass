export const Button = ({label, className}) => {
   console.log(className)
    return (
        <button className={className}>
            {label}
        </button>
    )
}


