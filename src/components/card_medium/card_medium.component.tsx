import { Card, Container, Div1, Div2, Div, Header, Img, P, Shadow } from './card_medium.styles'
import { Navigate } from 'react-router-dom'

interface CardMediumProps {
    header: string,
    text: string,
    image: string,
    link: string,
    color: string
}

const handleClick = (link: string) => {
    Navigate({ to: link })
}

export default function Card_Medium({ header, text, image, link, color }: CardMediumProps) {

    return (
        <Container>
            <Card onClick={() => handleClick(link)}>
                <Div1>
                    <Div>
                        <Header>{header}</Header>
                    </Div>
                    <Div>
                        <P>{text}</P>
                    </Div>
                </Div1>
                <Div2>
                    <Img src={image} />
                </Div2>
            </Card>
            <Shadow color={color} />
        </Container>

    )
}

