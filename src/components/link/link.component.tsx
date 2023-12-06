import {useNavigate} from 'react-router-dom'
import { Div, Text } from './link.styles'
interface LinkProps {
    name: string,
    to: string,
    header: 'false' | 'true'
}

function Link({ to, name, header }: LinkProps) {
    const navigate = useNavigate()
    return (
        <Div onClick={ () => {
            navigate(to)
        }}>
            <Text header={header}>{name}</Text>
        </Div>
    )
}

export default Link