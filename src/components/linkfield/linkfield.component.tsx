import { useNavigate } from "react-router-dom";
import { ArrowContainer, Container, Div, Div_Row_1, DropBox, Header, HeaderContainer, HighLightContainer, IconContainer, IndexContainer, IndexValue, Outer_Div_Row_1, SubLinkContainer, Sublink } from "./linkfield.styles";

import Icon from "../icon/icon.component";
import { IconName } from "../../library/icons.library";
import { useState } from "react";
import DropArrow from "../drop_arrow/drop_arrow.component";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/configureStore";
import { IndexProps } from "../../store/redux_slices/index.slice";
import { linkSelect } from "../../store/redux_slices/linkSelect.slice";
import { navBarColors } from "../../style/global.styles";
import Highlight from "../highlight/highlight.component";
import SmoothGlideDiv from "../../style/animations/highlight_selection.animation";
interface LinkProps {
  iconName: IconName;
  to: string;
  sublinks?: string[];
}

function Linkfield({ to, iconName, sublinks }: LinkProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const highLightColor = navBarColors[iconName];
  const isSelected = useSelector((state: RootState) => state.linkSelect[iconName]);
  const [isDropped, setIsDropped] = useState(false)
  const [isHover, setIsHover] = useState(false)
  const indexObject: IndexProps = useSelector((state: RootState) => state.indexes)

  return (
    <Container>
      <Div
        onMouseLeave={() => setIsHover(false)}
        onMouseEnter={() => setIsHover(true)}
        onClick={() => dispatch(linkSelect(iconName))}>
        <Outer_Div_Row_1>
          <Div_Row_1 onClick={() => {
              navigate(to);
            }}>

            <HighLightContainer>
              {isSelected ? <SmoothGlideDiv><Highlight color={highLightColor} /> </SmoothGlideDiv> : null}
            </HighLightContainer>
            <IconContainer>
              <Icon isSelected={isSelected} isHover={isHover} name={iconName} />
            </IconContainer>
            <HeaderContainer>
              <Header isSelected={isSelected} isHover={isHover}>{iconName.charAt(0).toUpperCase() + iconName.slice(1)}</Header>
            </HeaderContainer>
            

          </Div_Row_1>
          <ArrowContainer onClick={() => {
              if (sublinks) {
                setIsDropped(prevState => {
                  return !prevState
                })
              }
            }}>
              {sublinks ? <DropArrow dropped={isDropped} /> : null}

            </ArrowContainer>
        </Outer_Div_Row_1>
        {
          sublinks ? <DropBox isDropped={isDropped}>
            {sublinks.map(sublink => {
              return (
                <SubLinkContainer>
                  <Sublink onClick={() => {
                    navigate(`${to}/${sublink}`)
                  }}>
                    {sublink}
                  </Sublink>
                  <IndexContainer >
                    <IndexValue>{indexObject[sublink]}</IndexValue>
                  </IndexContainer>
                </SubLinkContainer>
              )
            })} </DropBox> : null
        }
      </Div >
    </Container >
  );
}

export default Linkfield;
