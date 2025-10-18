import { CardMain } from './styles'
import PropTypes from 'prop-types'

function CardDfault({ children, ...props }){

    return(
        <CardMain {...props}>{children}</CardMain>
    )
}

CardDfault.propTypes = {
    children: PropTypes.node.isRequired
}

export default CardDfault