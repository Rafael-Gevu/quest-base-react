import './card.css'








const Card = ({textColor, textUppercase}) => {
    return (
        <div className='card' style={{color: textColor, textTransform: textUppercase}}>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam ut repellendus et sed ab rem, praesentium culpa, rerum ducimus quisquam, ullam veritatis architecto. Amet fugit architecto dolore vitae alias accusamus!</p>
        </div>
    )
}
 
Card.defaultProps = {
    textColor: 'red',
    textUppercase: 'uppercase'
}
export default Card