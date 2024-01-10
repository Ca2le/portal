// import Link from '../link/link.component'
import { useSelector } from "react-redux";
import Linkfield from "../linkfield/linkfield.component";
import Role from "../role/role.component";
import {
  Container,
  HeaderDiv,
  ID,
  Img,
  LinkContainer,
  Name,
  Profile,
  TextArea,
} from "./navbar.styles";
import { RootState } from "../../store/configureStore";

function Navbar() {
  const name = useSelector((state: RootState) => state.user.name);
  return (
    <Container>
      <Profile>
        <Img />
        <TextArea>
          <HeaderDiv>
            <Name>{name}</Name>
            <Role role="master" />
          </HeaderDiv>
          <ID>123fawj222122221f123ijc</ID>
        </TextArea>
      </Profile>
      <LinkContainer>
        {/* <Linkfield iconName="home" to="/" /> */}
        <Linkfield iconName="recipes" to="/recipes" />
        <Linkfield iconName="products" to="/products" sublinks={['country', 'category', 'nutritions', 'manufactorer', 'supplier']}/>
        <Linkfield iconName="affiliate" to="/affiliate" />
        <Linkfield iconName="users" to="/users" />
        <Linkfield iconName="settings" to="/controlpanel" />
      </LinkContainer>
    </Container>
  );
}

export default Navbar;
