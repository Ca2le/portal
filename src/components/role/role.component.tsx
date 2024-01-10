import { colorBook } from '../../style/global.styles'
import { Container, Div, P } from './role.styles'
export type RoleType = 'admin' | 'master' | 'padwan'

export interface RoleProps {
    role: RoleType
}

function Role({ role }: RoleProps) {
    const color = colorBook[role]
    return (
        <Container>
            <Div color={color}>
                <P>{role.toUpperCase()}</P>
            </Div>
        </Container>

    )

}

export default Role