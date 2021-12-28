import Proptypes from 'prop-types'



const Button = ({color, text, onClick}) => {
   
    return(
    <button
     onClick={onClick}                   
     style={{backgroundColor: color}} 
     className='btn'
     >
    {text}
    </button>
    )
}


Button.defaultProps = {
    color:'steelblue',
}

Button.prototype = {
    color: Proptypes.string,
    text:Proptypes.string,
    onClick: Proptypes.func,
}


export default Button
