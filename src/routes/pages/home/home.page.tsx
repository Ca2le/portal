import React from 'react'
import FeatureGrid from '../../../components/feature_grid/feature_grid.component'
import StatasticGrid from '../../../components/statistic_grid/statistic_grid.component'
import { Container, Div, H } from './home.styles'

function Home() {
    return (
        <Container>
            <Div>
                <H>Bounjour Calle❤️🥞😎</H>
            </Div>
            <FeatureGrid />
            <StatasticGrid />
        </Container>
    )
}

export default Home     