// import Link from '../link/link.component'
import Link from '../link/link.component'
import Role from '../role/role.component'
import { Container, HeaderDiv, ID, Img, LinkContainer, Name, Profile, TextArea } from './navbar.styles'

function Navbar() {
  return (
    <Container>
      <Profile>
        <Img />
        <TextArea>
          <HeaderDiv>
            <Name>Calle Sporrong</Name>
            <Role role='master' />
          </HeaderDiv>
          <ID>123fawj222122221f123ijc</ID>
        </TextArea>
      </Profile>
      <LinkContainer>
        <Link name='Home' to='/' header={'true'} />
        <Link name='Recept' to='/recept' header={'true'} />
        <Link name='Produkt' to='/produkt' header={'true'} />
        <Link name='Kategori' to='/produkt/kategori' header={'false'} />
        <Link name='Land' to='/produkt/land' header={'false'} />
        <Link name='Näringsvärde' to='/produkt/näringsvärde' header={'false'} />
        <Link name='Tillverkare' to='/produkt/tillverkare' header={'false'} />
        <Link name='Leverantör' to='/produkt/leverantör' header={'false'} />
      </LinkContainer>
    </Container>
  )
}

export default Navbar
