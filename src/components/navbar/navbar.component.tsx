// import Link from '../link/link.component'
import { useDispatch, useSelector } from "react-redux";
import Linkfield from "../linkfield/linkfield.component";
import {
  Account_Section,
  Affiliate_Section,
  Container,
  HeaderDiv,
  Home_Section,
  ID,
  Information_Section,
  InnerContainer,
  Key_Section,
  Line,
  Name,
  Profile,
  TextArea,
} from "./navbar.styles";
import { RootState } from "../../store/configureStore";
import axios from "../../utils/axios";
import { useEffect } from "react";
import { IndexProps, updateAllIndexesWith } from "../../store/redux_slices/index.slice";

function Navbar() {
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch()


  useEffect(() => {
    if (state.auth.isAuth) {
      (async () => {
        try {
          const data = (await axios.get('http://localhost:5000/index_values')).data.payload as IndexProps | undefined
          if (data) {
            dispatch(updateAllIndexesWith(data))
          }

        } catch (err) {
          console.log('failed to fetch data. ', err)
        }

      })()

    }
  }, [state.auth.isAuth])
  return (
    <Container>
      <InnerContainer>
        <Profile>
          <TextArea>
            <HeaderDiv>
              <Name>Receptify.se</Name>
            </HeaderDiv>
            <ID></ID>
          </TextArea>
        </Profile>
        <Home_Section>
          <Linkfield iconName="dashboard" to="/" />
        </Home_Section>
        <Line />
        <Information_Section>
          <Linkfield  iconName="users" to="/users" />
          <Linkfield iconName="statistics" to="/statistic" />
        </Information_Section>
        <Key_Section>
          <Linkfield iconName="recipes" to="/recipes" />
          <Linkfield  iconName="filesystem" to="/filesystem" sublinks={['countries', 'categories', 'sub_categories', 'nutritions', 'manufactorers', 'suppliers', 'products', 'producers']} />
        </Key_Section>
        <Line />
        <Affiliate_Section>
          <Linkfield iconName="affiliate" to="/affiliate" />
        </Affiliate_Section>
        <Account_Section>
          <Linkfield iconName="settings" to="/controlpanel" />
          <Linkfield iconName="signout" to="/signout" />
        </Account_Section>
      </InnerContainer>
    </Container>
  );
}

export default Navbar;
