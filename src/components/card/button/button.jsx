import './button.css'








const Button = ({label}) => {
    return <button className="btn" 
    onClick={()=> {
        alert(`A label desse botão é ${label}`)
    }}>Clique aqui</button>
}



Button.defaultProps = {
     label: 'Baixar CV'
 }


export default Button