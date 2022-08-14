import '../styles.css'
import PropTypes from 'prop-types'; // ES6


const Button = ({loadMOre}) => {

    return (

<div class='Load-more'>
    <button type="button" class='Button' onClick={loadMOre}>Load More</button>
</div>
    )
}

Button.propTypes = {

    loadMOre: PropTypes.func
}

export default Button