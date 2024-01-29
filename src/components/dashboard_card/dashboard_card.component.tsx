import { useSelector } from 'react-redux'
import { content } from '../../library/language.libary'
import { Card, Container, Div1, Div2, Div, Header, P, IMG } from './dashboard_card.styles'
import { RootState } from '../../store/configureStore'
import imageLibary from '../../library/image.libary'

interface DashboardCardProps {
    name: 'account'
}


function DashboardCard({ name }: DashboardCardProps) {
    const { language } = useSelector((state: RootState) => state.currentLanguage)
    const image = imageLibary[name]

    return (
        <Container>
            <Card>
                <Div1>
                    <Div>
                        <Header>{content[language].dashboard_page.cards[name].title}</Header>
                    </Div>
                    <Div>
                        <P>{content[language].dashboard_page.cards[name].text}</P>
                    </Div>
                </Div1>
                <Div2>
                    <IMG src={image} />
                </Div2>
            </Card>
        </Container>

    )
}
export default DashboardCard
