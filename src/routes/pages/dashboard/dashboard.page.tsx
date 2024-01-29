import React, { useEffect } from 'react'
import FeatureGrid from '../../../components/feature_grid/feature_grid.component'
import { GridContainer, ShortcutSection, WelcomeSection, WelcomeText } from './dashboard.styles'
import DashboardCard from '../../../components/dashboard_card/dashboard_card.component'
import { content } from '../../../library/language.libary'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/configureStore'
import TrafficDiagram from '../../../components/traffic_diagram/traffic_diagram.component'
import CityDiagram from '../../../components/city_diagram/city_diagram.component'

function Dashboard() {
    const [message, setMessage] = React.useState('')
    const laungage = useSelector((state: RootState) => state.currentLanguage.language)
    const time = new Date().getHours()

    useEffect(() => {
        if (time >= 6 && time < 10) {
            setMessage(content[laungage].dashboard_page.timePhrases.morning)
        } else if (time >= 10 && time < 14) {
            setMessage(content[laungage].dashboard_page.timePhrases.day)
        } else if (time >= 14 && time < 18) {
            setMessage(content[laungage].dashboard_page.timePhrases.afternoon)
        } else if (time >= 18 && time < 22) {
            setMessage(content[laungage].dashboard_page.timePhrases.evening)
        } else {
            setMessage(content[laungage].dashboard_page.timePhrases.evening)
        }
    }, [time])

    return (
        <GridContainer>
            <WelcomeSection>
                <WelcomeText>{message}</WelcomeText>
            </WelcomeSection>
            <ShortcutSection>
                <DashboardCard name='account' />
                <DashboardCard name='account' />
                <DashboardCard name='account' />
                <DashboardCard name='account' />
                <DashboardCard name='account' />
                <DashboardCard name='account' />
            </ShortcutSection>
            <FeatureGrid />
            <TrafficDiagram />
            <CityDiagram />
        </GridContainer>
    )
}

export default Dashboard     