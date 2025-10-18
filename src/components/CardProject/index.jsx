import { CardProject } from './styles'
import PropTypes from 'prop-types'

function CardProjects( {children, ...props}){

    return(
        <CardProject { ...props }>{ children }</CardProject>
    )
}

CardProjects.propTypes = {
    children: PropTypes.node.isRequired
}

export default CardProjects